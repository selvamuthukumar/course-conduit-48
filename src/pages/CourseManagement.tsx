import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CourseCard } from "@/components/CourseCard";
import { CourseForm } from "@/components/CourseForm";
import { EnrollmentModal } from "@/components/EnrollmentModal";
import { EnrollmentDetailsModal } from "@/components/EnrollmentDetailsModal";
import { Course, Student } from "@/types/course";
import { Search, Plus, GraduationCap, BookOpen, Users, Home, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCourses } from "@/hooks/useCourses";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
const CourseManagement = () => {
  const {
    courses,
    loading,
    createCourse,
    enrollStudent,
    fetchEnrollments
  } = useCourses();
  const {
    user,
    canManageCourses,
    loading: authLoading,
    signOut
  } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [showEnrollmentDetails, setShowEnrollmentDetails] = useState(false);
  const [enrollmentDetails, setEnrollmentDetails] = useState<Student[]>([]);
  const [loadingEnrollments, setLoadingEnrollments] = useState(false);
  const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase()) || course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) || course.category.toLowerCase().includes(searchTerm.toLowerCase()));
  const handleCreateCourse = async (courseData: Omit<Course, 'id' | 'enrolledStudents'>) => {
    try {
      await createCourse(courseData);
      setShowForm(false);
    } catch (error) {
      // Error is handled in the hook
    }
  };
  const handleEnrollClick = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    setSelectedCourse(course || null);
    setShowEnrollmentModal(true);
  };
  const handleEnrollStudent = async (courseId: string, studentData: Omit<Student, 'id'>) => {
    try {
      await enrollStudent(courseId, studentData.name, studentData.email, studentData.phone);
      setShowEnrollmentModal(false);
    } catch (error) {
      // Error is handled in the hook
    }
  };
  const handleViewEnrollments = async (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    setSelectedCourse(course || null);
    setLoadingEnrollments(true);
    setShowEnrollmentDetails(true);
    const enrollments = await fetchEnrollments(courseId);
    setEnrollmentDetails(enrollments);
    setLoadingEnrollments(false);
  };
  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>;
  }
  if (showForm) {
    return <CourseForm onSubmit={handleCreateCourse} onCancel={() => setShowForm(false)} />;
  }
  const totalStudents = courses.reduce((sum, course) => sum + (course.enrollmentCount || course.enrolledStudents.length), 0);
  return <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <GraduationCap className="h-8 w-8" />
                <div>
                  <span className="text-2xl font-bold">SkillBridge</span>
                  <p className="text-primary-foreground/80 text-sm">
                    {user ? 'Manage courses, track enrollments, and grow your learning platform' : 'Explore our comprehensive course catalog and start learning today'}
                  </p>
                </div>
              </Link>
            </div>
            <nav className="flex items-center gap-4">
              <Link to="/">
                <Button variant="secondary" size="sm" className="gap-2">
                  <Home className="h-4 w-4" />
                  Home
                </Button>
              </Link>
              {user ? <>
                  <Link to="/profile">
                    <Button variant="outline" size="sm" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                      Profile
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" onClick={signOut} className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                    Sign Out
                  </Button>
                </> : <Link to="/auth">
                  <Button variant="outline" size="sm" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                    Sign In
                  </Button>
                </Link>}
            </nav>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center gap-3">
                <BookOpen className="h-10 w-10" />
                <div>
                  <div className="text-3xl font-bold">{courses.length}</div>
                  <div className="text-base opacity-80">Total Courses Available</div>
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
            <Input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search courses, instructors, or categories..." className="pl-10" />
          </div>
          {user && canManageCourses() && <Button onClick={() => setShowForm(true)} className="bg-gradient-primary hover:opacity-90 shadow-primary">
              <Plus className="h-4 w-4 mr-2" />
              Create Course
            </Button>}
        </div>

        {/* Loading State */}
        {loading ? <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">Loading courses...</span>
          </div> : /* Course Grid */
      filteredCourses.length === 0 ? <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {searchTerm ? 'No courses found' : 'No courses available'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {searchTerm ? 'Try adjusting your search terms' : 'Create your first course to get started'}
            </p>
            {!searchTerm && user && canManageCourses() && <Button onClick={() => setShowForm(true)} className="bg-gradient-primary hover:opacity-90 shadow-primary">
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Course
              </Button>}
          </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => <CourseCard key={course.id} course={course} onEnroll={handleEnrollClick} onViewEnrollments={canManageCourses() ? handleViewEnrollments : undefined} isAuthenticated={!!user} canManage={canManageCourses()} />)}
          </div>}

        {/* Enrollment Modal */}
        <EnrollmentModal course={selectedCourse} isOpen={showEnrollmentModal} onClose={() => setShowEnrollmentModal(false)} onEnroll={handleEnrollStudent} />

        {/* Enrollment Details Modal */}
        <EnrollmentDetailsModal course={selectedCourse} enrollments={enrollmentDetails} isOpen={showEnrollmentDetails} onClose={() => {
        setShowEnrollmentDetails(false);
        setEnrollmentDetails([]);
      }} loading={loadingEnrollments} />
      </div>
    </div>;
};
export default CourseManagement;