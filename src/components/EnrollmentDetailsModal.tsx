import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Course, Student } from "@/types/course";
import { Users, Mail, Phone, Calendar } from "lucide-react";

interface EnrollmentDetailsModalProps {
  course: Course | null;
  enrollments: Student[];
  isOpen: boolean;
  onClose: () => void;
  loading?: boolean;
}

export const EnrollmentDetailsModal = ({ 
  course, 
  enrollments, 
  isOpen, 
  onClose,
  loading = false 
}: EnrollmentDetailsModalProps) => {
  if (!course) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Enrollments for "{course.title}"
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Course Info */}
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">{course.title}</h3>
              <Badge variant="secondary">
                {enrollments.length}/{course.maxStudents} enrolled
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Instructor: {course.instructor} • Start Date: {new Date(course.startDate).toLocaleDateString()}
            </p>
          </div>

          {/* Enrollments List */}
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              </div>
            ) : enrollments.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No students enrolled yet</p>
              </div>
            ) : (
              enrollments.map((student, index) => (
                <div key={student.id || index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h4 className="font-medium">{student.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          {student.email}
                        </div>
                        {student.phone && (
                          <div className="flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            {student.phone}
                          </div>
                        )}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Student #{index + 1}
                    </Badge>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};