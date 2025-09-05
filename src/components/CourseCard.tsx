import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Course } from "@/types/course";
import { Calendar, Clock, Users, BookOpen } from "lucide-react";

interface CourseCardProps {
  course: Course;
  onEnroll: (courseId: string) => void;
}

export const CourseCard = ({ course, onEnroll }: CourseCardProps) => {
  const enrolledCount = course.enrollmentCount || course.enrolledStudents.length;
  const enrollmentPercentage = (enrolledCount / course.maxStudents) * 100;

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
              ${course.price}
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
          
          <Button 
            onClick={() => onEnroll(course.id)}
            className="w-full bg-gradient-primary hover:opacity-90 shadow-primary"
            disabled={enrolledCount >= course.maxStudents}
          >
            {enrolledCount >= course.maxStudents ? 'Course Full' : 'Enroll Now'}
          </Button>
        </div>
      </div>
    </Card>
  );
};