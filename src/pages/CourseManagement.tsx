import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CourseCard } from "@/components/CourseCard";
import { CourseForm } from "@/components/CourseForm";
import { EnrollmentModal } from "@/components/EnrollmentModal";
import { Course, Student } from "@/types/course";
import { Search, Plus, GraduationCap, BookOpen, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to React',
    description: 'Learn the fundamentals of React including components, state management, and modern hooks. Perfect for beginners looking to start their React journey.',
    instructor: 'Sarah Johnson',
    duration: '8 weeks',
    level: 'Beginner',
    category: 'Programming',
    price: 99,
    enrolledStudents: ['1', '2', '3'],
    maxStudents: 25,
    startDate: '2024-02-15'
  },
  {
    id: '2',
    title: 'Advanced JavaScript Patterns',
    description: 'Master advanced JavaScript concepts including closures, prototypes, async programming, and design patterns used in modern web development.',
    instructor: 'Mike Chen',
    duration: '10 weeks',
    level: 'Advanced',
    category: 'Programming',
    price: 149,
    enrolledStudents: ['4', '5'],
    maxStudents: 20,
    startDate: '2024-03-01'
  },
  {
    id: '3',
    title: 'UI/UX Design Fundamentals',
    description: 'Comprehensive course covering user interface and user experience design principles, tools, and best practices for creating engaging digital products.',
    instructor: 'Emily Rodriguez',
    duration: '12 weeks',
    level: 'Intermediate',
    category: 'Design',
    price: 129,
    enrolledStudents: ['6', '7', '8', '9'],
    maxStudents: 30,
    startDate: '2024-02-20'
  }
];

const CourseManagement = () => {
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const { toast } = useToast();

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateCourse = (courseData: Omit<Course, 'id' | 'enrolledStudents'>) => {
    const newCourse: Course = {
      ...courseData,
      id: Date.now().toString(),
      enrolledStudents: []
    };
    setCourses(prev => [...prev, newCourse]);
    setShowForm(false);
    toast({
      title: "Course Created",
      description: `${courseData.title} has been successfully created.`,
    });
  };

  const handleEnrollClick = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    setSelectedCourse(course || null);
    setShowEnrollmentModal(true);
  };

  const handleEnrollStudent = (courseId: string, studentData: Omit<Student, 'id'>) => {
    const studentId = Date.now().toString();
    setCourses(prev => prev.map(course => 
      course.id === courseId 
        ? { ...course, enrolledStudents: [...course.enrolledStudents, studentId] }
        : course
    ));
    setShowEnrollmentModal(false);
    toast({
      title: "Enrollment Successful",
      description: `${studentData.name} has been enrolled in the course.`,
    });
  };

  if (showForm) {
    return (
      <CourseForm
        onSubmit={handleCreateCourse}
        onCancel={() => setShowForm(false)}
      />
    );
  }

  const totalStudents = courses.reduce((sum, course) => sum + course.enrolledStudents.length, 0);

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap className="h-12 w-12" />
            <div>
              <h1 className="text-4xl font-bold">SkillBridge</h1>
              <p className="text-primary-foreground/80 text-lg">
                Manage courses, track enrollments, and grow your learning platform
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8" />
                <div>
                  <div className="text-2xl font-bold">{courses.length}</div>
                  <div className="text-sm opacity-80">Total Courses</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8" />
                <div>
                  <div className="text-2xl font-bold">{totalStudents}</div>
                  <div className="text-sm opacity-80">Enrolled Students</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-8 w-8" />
                <div>
                  <div className="text-2xl font-bold">
                    {courses.reduce((sum, course) => sum + course.maxStudents, 0)}
                  </div>
                  <div className="text-sm opacity-80">Total Capacity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Search and Create */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search courses, instructors, or categories..."
              className="pl-10"
            />
          </div>
          <Button 
            onClick={() => setShowForm(true)}
            className="bg-gradient-primary hover:opacity-90 shadow-primary"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Course
          </Button>
        </div>

        {/* Course Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {searchTerm ? 'No courses found' : 'No courses available'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {searchTerm 
                ? 'Try adjusting your search terms' 
                : 'Create your first course to get started'
              }
            </p>
            {!searchTerm && (
              <Button 
                onClick={() => setShowForm(true)}
                className="bg-gradient-primary hover:opacity-90 shadow-primary"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Course
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onEnroll={handleEnrollClick}
              />
            ))}
          </div>
        )}

        {/* Enrollment Modal */}
        <EnrollmentModal
          course={selectedCourse}
          isOpen={showEnrollmentModal}
          onClose={() => setShowEnrollmentModal(false)}
          onEnroll={handleEnrollStudent}
        />
      </div>
    </div>
  );
};

export default CourseManagement;