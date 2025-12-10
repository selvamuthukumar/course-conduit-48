import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Course } from "@/types/course";
import { Users, BookOpen, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import smtLineImage from "@/assets/smt-line-course.png";
import pcbCourseImage from "@/assets/pcb-course.png";
import emsCourseImage from "@/assets/ems-course.png";
import injectionMouldingImage from "@/assets/injection-moulding-course.png";
interface CourseCardProps {
  course: Course;
  onEnroll: (courseId: string) => void;
  onViewEnrollments?: (courseId: string) => void;
  canManage?: boolean;
}
export const CourseCard = ({
  course,
  onEnroll,
  onViewEnrollments,
  canManage = false
}: CourseCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const enrolledCount = course.enrollmentCount || course.enrolledStudents.length;
  const enrollmentPercentage = enrolledCount / course.maxStudents * 100;
  return <Card className="group relative overflow-hidden bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video bg-gradient-primary flex items-center justify-center overflow-hidden">
        {course.title.toLowerCase().includes("in-process") ? (
          <img src={smtLineImage} alt={course.title} className="w-full h-full object-cover" />
        ) : course.title.toLowerCase().includes("printed circuit board") ? (
          <img src={pcbCourseImage} alt={course.title} className="w-full h-full object-cover" />
        ) : course.title.toLowerCase().includes("electronics manufacturing") ? (
          <img src={emsCourseImage} alt={course.title} className="w-full h-full object-cover" />
        ) : course.title.toLowerCase().includes("machine operator") ? (
          <img src={injectionMouldingImage} alt={course.title} className="w-full h-full object-cover" />
        ) : (
          <BookOpen className="h-12 w-12 text-primary-foreground" />
        )}
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            
            
          </div>
          
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {course.instructor}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Pollachi, Tamil Nadu
            </div>
          </div>
        </div>

        <div className="pt-2">
          <p className="text-sm text-muted-foreground mb-3">
            {course.jobDescription || "Job description not available for this course."}
          </p>
          <div className="space-y-2">
            <Button onClick={() => setShowDetails(!showDetails)} variant="outline" className="w-full" size="sm">
              {showDetails ? <>
                  Hide Details <ChevronUp className="ml-1 h-4 w-4" />
                </> : <>
                  View More Details <ChevronDown className="ml-1 h-4 w-4" />
                </>}
            </Button>

            {showDetails && <div className="bg-muted/50 rounded-lg p-4 space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Eligibility Criteria</h4>
                    {course.eligibilityCriteria && course.eligibilityCriteria.length > 0 ? <>
                        <p className="text-muted-foreground mb-2">Applicants must meet any one of the following qualifications:</p>
                        <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                          {course.eligibilityCriteria.map((criteria, index) => <li key={index}>{criteria}</li>)}
                        </ul>
                      </> : <p className="text-muted-foreground">Eligibility criteria not specified for this course.</p>}
                  </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Course Curriculum</h4>
                  <a
                    href={course.curriculumUrl || "https://nqr.gov.in/qualifications"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline transition-colors"
                  >
                    View NQR Qualification Details
                  </a>
                </div>
              </div>}
            
            <Button onClick={() => onEnroll(course.id)} className="w-full bg-gradient-primary hover:opacity-90 shadow-primary">
              Enroll Now
            </Button>
            
            {canManage && onViewEnrollments && <Button onClick={() => onViewEnrollments(course.id)} variant="outline" className="w-full" size="sm">
                View Enrollments ({enrolledCount})
              </Button>}
          </div>
        </div>
      </div>
    </Card>;
};