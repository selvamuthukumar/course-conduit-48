import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Course } from '@/types/course';
import { useToast } from '@/hooks/use-toast';

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const { data: coursesData, error: coursesError } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

      if (coursesError) throw coursesError;

      // Get enrollment counts for each course
      const { data: enrollmentsData, error: enrollmentsError } = await supabase
        .from('enrollments')
        .select('course_id');

      if (enrollmentsError) throw enrollmentsError;

      // Count enrollments per course
      const enrollmentCounts = enrollmentsData.reduce((acc, enrollment) => {
        acc[enrollment.course_id] = (acc[enrollment.course_id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      // Transform database courses to match our Course interface
      const transformedCourses: Course[] = coursesData.map(course => ({
        id: course.id,
        title: course.title,
        description: course.description || '',
        instructor: course.instructor,
        duration: course.duration,
        level: course.level as 'Beginner' | 'Intermediate' | 'Advanced',
        category: course.category,
        price: Number(course.price),
        enrolledStudents: [], // We'll use enrollment count instead
        maxStudents: course.max_students,
        startDate: course.start_date,
        imageUrl: course.image_url,
        enrollmentCount: enrollmentCounts[course.id] || 0
      }));

      setCourses(transformedCourses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      toast({
        title: "Error",
        description: "Failed to fetch courses",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const createCourse = async (courseData: Omit<Course, 'id' | 'enrolledStudents'>) => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .insert({
          title: courseData.title,
          description: courseData.description,
          instructor: courseData.instructor,
          duration: courseData.duration,
          level: courseData.level,
          category: courseData.category,
          price: courseData.price,
          max_students: courseData.maxStudents,
          start_date: courseData.startDate,
          image_url: courseData.imageUrl
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Success",
        description: "Course created successfully!"
      });

      fetchCourses(); // Refresh the list
      return data;
    } catch (error) {
      console.error('Error creating course:', error);
      toast({
        title: "Error", 
        description: "Failed to create course",
        variant: "destructive"
      });
      throw error;
    }
  };

  const enrollStudent = async (courseId: string, studentName: string, studentEmail: string) => {
    try {
      const { data, error } = await supabase
        .from('enrollments')
        .insert({
          course_id: courseId,
          student_name: studentName,
          student_email: studentEmail
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Success",
        description: "Student enrolled successfully!"
      });

      fetchCourses(); // Refresh to update enrollment counts
      return data;
    } catch (error) {
      console.error('Error enrolling student:', error);
      toast({
        title: "Error",
        description: "Failed to enroll student. They may already be enrolled.",
        variant: "destructive"
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return {
    courses,
    loading,
    createCourse,
    enrollStudent,
    refetch: fetchCourses
  };
};