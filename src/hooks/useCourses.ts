import { useState, useEffect } from 'react';
import { Course, Student } from '@/types/course';
import { useToast } from '@/hooks/use-toast';
import { coursesData } from '@/data/courses';

const ENROLLMENTS_KEY = 'course_enrollments';

interface StoredEnrollment {
  id: string;
  courseId: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  schoolName: string;
  currentGrade: string;
  enrolledAt: string;
}

const getStoredEnrollments = (): StoredEnrollment[] => {
  try {
    const stored = localStorage.getItem(ENROLLMENTS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveEnrollments = (enrollments: StoredEnrollment[]) => {
  localStorage.setItem(ENROLLMENTS_KEY, JSON.stringify(enrollments));
};

export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchCourses = () => {
    try {
      setLoading(true);
      const enrollments = getStoredEnrollments();
      
      // Count enrollments per course
      const enrollmentCounts = enrollments.reduce((acc, enrollment) => {
        acc[enrollment.courseId] = (acc[enrollment.courseId] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      // Add enrollment counts to courses
      const coursesWithCounts = coursesData.map(course => ({
        ...course,
        enrollmentCount: enrollmentCounts[course.id] || 0
      }));

      setCourses(coursesWithCounts);
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
    // Note: For local storage, courses are static. This is a no-op.
    toast({
      title: "Info",
      description: "Course creation is not available in local mode"
    });
    return null;
  };

  const enrollStudent = async (
    courseId: string, 
    studentName: string, 
    studentEmail: string, 
    studentPhone: string, 
    schoolName: string, 
    currentGrade: string
  ) => {
    try {
      const enrollments = getStoredEnrollments();
      
      // Check if already enrolled
      const alreadyEnrolled = enrollments.some(
        e => e.courseId === courseId && e.studentEmail === studentEmail
      );
      
      if (alreadyEnrolled) {
        toast({
          title: "Error",
          description: "This email is already enrolled in this course",
          variant: "destructive"
        });
        throw new Error('Already enrolled');
      }

      const newEnrollment: StoredEnrollment = {
        id: crypto.randomUUID(),
        courseId,
        studentName,
        studentEmail,
        studentPhone,
        schoolName,
        currentGrade,
        enrolledAt: new Date().toISOString()
      };

      enrollments.push(newEnrollment);
      saveEnrollments(enrollments);

      toast({
        title: "Success",
        description: "Student enrolled successfully!"
      });

      fetchCourses(); // Refresh to update enrollment counts
      return newEnrollment;
    } catch (error) {
      if ((error as Error).message !== 'Already enrolled') {
        console.error('Error enrolling student:', error);
        toast({
          title: "Error",
          description: "Failed to enroll student",
          variant: "destructive"
        });
      }
      throw error;
    }
  };

  const fetchEnrollments = async (courseId: string): Promise<Student[]> => {
    try {
      const enrollments = getStoredEnrollments();
      const courseEnrollments = enrollments
        .filter(e => e.courseId === courseId)
        .sort((a, b) => new Date(b.enrolledAt).getTime() - new Date(a.enrolledAt).getTime());

      return courseEnrollments.map(enrollment => ({
        id: enrollment.id,
        name: enrollment.studentName,
        email: enrollment.studentEmail,
        phone: enrollment.studentPhone,
        schoolName: enrollment.schoolName,
        currentGrade: enrollment.currentGrade
      }));
    } catch (error) {
      console.error('Error fetching enrollments:', error);
      toast({
        title: "Error",
        description: "Failed to fetch enrollment details",
        variant: "destructive"
      });
      return [];
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
    fetchEnrollments,
    refetch: fetchCourses
  };
};
