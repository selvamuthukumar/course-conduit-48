import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Course, Student } from "@/types/course";
import { UserPlus, Mail, User, Phone } from "lucide-react";

interface EnrollmentModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onEnroll: (courseId: string, student: Omit<Student, 'id'>) => void;
}

export const EnrollmentModal = ({ course, isOpen, onClose, onEnroll }: EnrollmentModalProps) => {
  
  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (course) {
      onEnroll(course.id, studentData);
      setStudentData({ name: '', email: '', phone: '' });
    }
  };

  const handleClose = () => {
    setStudentData({ name: '', email: '', phone: '' });
    onClose();
  };

  if (!course) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-gradient-card">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <UserPlus className="h-5 w-5 text-primary" />
            Enroll in Course
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-accent/50 p-4 rounded-lg">
            <h3 className="font-semibold text-foreground">{course.title}</h3>
            <p className="text-sm text-muted-foreground">
              Instructor: {course.instructor}
            </p>
            <p className="text-sm text-muted-foreground">
              Duration: {course.duration} • Level: {course.level}
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-muted-foreground">
                {course.enrolledStudents.length}/{course.maxStudents} enrolled
              </span>
              <span className="text-lg font-bold text-primary">
                ₹{course.price}
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="studentName" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Student Name
              </Label>
              <Input
                id="studentName"
                value={studentData.name}
                onChange={(e) => setStudentData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter student name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="studentEmail" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address
              </Label>
              <Input
                id="studentEmail"
                type="email"
                value={studentData.email}
                onChange={(e) => setStudentData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="student@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="studentPhone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone Number
              </Label>
              <Input
                id="studentPhone"
                type="tel"
                value={studentData.phone}
                onChange={(e) => setStudentData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="+91 9876543210"
                required
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                type="submit" 
                className="flex-1 bg-gradient-primary hover:opacity-90 shadow-primary"
                disabled={course.enrolledStudents.length >= course.maxStudents}
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Enroll Student
              </Button>
              <Button type="button" variant="outline" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};