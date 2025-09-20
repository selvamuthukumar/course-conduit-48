import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Course } from "@/types/course";
import { Calendar, Clock, Users, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

interface CourseDetails {
  jobDescription: string;
  eligibilityPoints: string[];
  curriculumLink: string;
}

const courseDetailsMap: Record<string, CourseDetails> = {
  "Electronics Manufacturing Services Technician": {
    jobDescription: "Electronics Manufacturing Services Technician in this job works on SMT machines, circuit boards and soldering equipment. The individual is responsible for the maintenance and troubleshooting of SMT equipment and also assists in the assembly and programming of SMT equipment.",
    eligibilityPoints: [
      "Completed 8th Grade with 2 years of NTC (plus 2 years of NAC / relevant experience)",
      "Completed 10th Grade with 2 years of NTC / NAC / relevant experience", 
      "Completed 12th Grade",
      "Certificate – NSQF (Level 3 in Maintenance Technician) with 2 years of experience"
    ],
    curriculumLink: "https://nqr.gov.in/qualification/document/EMS%20Technician%20-%20ELE_Q5315_v3.0.pdf"
  },
  "PCB Assembly Specialist": {
    jobDescription: "PCB Assembly Specialist is responsible for assembling printed circuit boards using automated and manual techniques. They work with surface mount technology, through-hole components, and perform quality testing to ensure product reliability and performance standards.",
    eligibilityPoints: [
      "Completed 10th Grade with 1 year of relevant experience in electronics",
      "ITI in Electronics/Electrical with 6 months experience",
      "Completed 12th Grade with basic electronics knowledge",
      "Certificate in PCB Design or Electronics Assembly"
    ],
    curriculumLink: "https://nqr.gov.in/qualification/document/PCB%20Assembly%20-%20ELE_Q4567_v2.0.pdf"
  },
  "IoT Hardware Developer": {
    jobDescription: "IoT Hardware Developer designs and develops hardware solutions for Internet of Things applications. They work with microcontrollers, sensors, wireless communication modules, and create prototypes for smart devices and embedded systems.",
    eligibilityPoints: [
      "Completed 12th Grade with Mathematics and Physics",
      "Diploma in Electronics/Computer Engineering",
      "B.Tech/B.E. in Electronics/Computer Science (preferred)",
      "Certificate in Embedded Systems or IoT Development"
    ],
    curriculumLink: "https://nqr.gov.in/qualification/document/IoT%20Hardware%20-%20ELE_Q7890_v1.0.pdf"
  },
  "Quality Assurance Technician": {
    jobDescription: "Quality Assurance Technician ensures that manufactured products meet industry standards and specifications. They perform testing, inspection, and documentation of quality control processes, and work with testing equipment to maintain product excellence.",
    eligibilityPoints: [
      "Completed 10th Grade with 2 years of manufacturing experience", 
      "ITI in Quality Control or related field",
      "Completed 12th Grade with basic understanding of quality processes",
      "Certificate in Quality Management System (ISO 9001)"
    ],
    curriculumLink: "https://nqr.gov.in/qualification/document/QA%20Technician%20-%20QUA_Q3456_v2.0.pdf"
  }
};

interface CourseCardProps {
  course: Course;
  onEnroll: (courseId: string) => void;
  onViewEnrollments?: (courseId: string) => void;
  isAuthenticated?: boolean;
  canManage?: boolean;
}

export const CourseCard = ({ course, onEnroll, onViewEnrollments, isAuthenticated = false, canManage = false }: CourseCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const enrolledCount = course.enrollmentCount || course.enrolledStudents.length;
  const enrollmentPercentage = (enrolledCount / course.maxStudents) * 100;
  
  const courseDetails = courseDetailsMap[course.title] || {
    jobDescription: "This course provides comprehensive training in the specified field with hands-on experience and industry-relevant skills.",
    eligibilityPoints: [
      "Completed 10th Grade or equivalent",
      "Basic understanding of the subject area",
      "Willingness to learn and commitment to the program"
    ],
    curriculumLink: "#"
  };

  return (
    <Card className="group relative overflow-hidden bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video bg-gradient-primary p-6 flex items-center justify-center">
        <BookOpen className="h-12 w-12 text-primary-foreground" />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              {course.category}
            </Badge>
            <Badge 
              variant={course.level === 'Beginner' ? 'default' : course.level === 'Intermediate' ? 'secondary' : 'destructive'}
              className="text-xs"
            >
              {course.level}
            </Badge>
          </div>
          
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          
          <p className="text-muted-foreground text-sm line-clamp-2">
            {course.description}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {course.duration}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(course.startDate).toLocaleDateString()}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              {enrolledCount}/{course.maxStudents} enrolled
            </div>
            <div className="text-lg font-bold text-primary">
              ₹{course.price}
            </div>
          </div>

          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-secondary h-2 rounded-full transition-all duration-500"
              style={{ width: `${enrollmentPercentage}%` }}
            />
          </div>
        </div>

        <div className="pt-2">
          <p className="text-sm text-muted-foreground mb-3">
            Instructor: <span className="font-medium text-foreground">{course.instructor}</span>
          </p>
          
          <div className="space-y-2">
            <Button 
              onClick={() => setShowDetails(!showDetails)}
              variant="outline"
              className="w-full"
              size="sm"
            >
              {showDetails ? (
                <>
                  Hide Details <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  View More Details <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>

             {showDetails && (
               <div className="bg-muted/50 rounded-lg p-4 space-y-3 text-sm">
                 <div>
                   <h4 className="font-semibold text-foreground mb-2">Job Description</h4>
                   <p className="text-muted-foreground">
                     {courseDetails.jobDescription}
                   </p>
                 </div>
                 
                 <div>
                   <h4 className="font-semibold text-foreground mb-2">Eligibility Criteria</h4>
                   <p className="text-muted-foreground mb-2">Applicants must meet any one of the following qualifications:</p>
                   <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                     {courseDetails.eligibilityPoints.map((point, index) => (
                       <li key={index}>{point}</li>
                     ))}
                   </ul>
                 </div>

                 <div>
                   <h4 className="font-semibold text-foreground mb-2">Course Curriculum</h4>
                   <a 
                     href={courseDetails.curriculumLink}
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-primary hover:text-primary/80 underline transition-colors"
                   >
                     View Complete Curriculum (PDF)
                   </a>
                 </div>
               </div>
             )}
            
            <Button 
              onClick={() => onEnroll(course.id)}
              className="w-full bg-gradient-primary hover:opacity-90 shadow-primary"
              disabled={enrolledCount >= course.maxStudents}
            >
              {enrolledCount >= course.maxStudents ? 'Course Full' : isAuthenticated ? 'Enroll Now' : 'Sign In to Enroll'}
            </Button>
            
            {canManage && onViewEnrollments && (
              <Button 
                onClick={() => onViewEnrollments(course.id)}
                variant="outline"
                className="w-full"
                size="sm"
              >
                View Enrollments ({enrolledCount})
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};