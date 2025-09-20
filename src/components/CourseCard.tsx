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
      
    </Card>
  );
};