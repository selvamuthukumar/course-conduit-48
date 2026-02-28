import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Course, Student } from "@/types/course";
import { UserPlus, ExternalLink } from "lucide-react";

interface EnrollmentModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onEnroll: (courseId: string, student: Omit<Student, 'id'>) => void;
  googleFormEmbedUrl?: string;
}

/**
 * EnrollmentModal with Google Forms Integration
 * 
 * Usage:
 * 1. Create a Google Form for enrollment
 * 2. Get the embed URL from Google Forms (Send > </> icon)
 * 3. Pass googleFormEmbedUrl prop to this component
 * 4. Form will be embedded in an iframe within the modal
 * 
 * The onEnroll callback is kept for backward compatibility
 * but the actual form submission is handled by Google Forms
 */
export const EnrollmentModal = ({ 
  course, 
  isOpen, 
  onClose,
  onEnroll,
  googleFormEmbedUrl 
}: EnrollmentModalProps) => {

  if (!course) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl bg-gradient-card max-h-[90vh] overflow-y-auto">
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
          </div>

          {googleFormEmbedUrl ? (
            <div className="space-y-4">
              {/* Google Form embedded in iframe */}
              <iframe
                src={googleFormEmbedUrl}
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg border border-border"
                title="Enrollment Form"
              >
                Loading form...
              </iframe>
              
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  ℹ️ Fill out the form above to enroll in this course. Your response will be recorded automatically.
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  onClick={onClose}
                  className="flex-1 bg-gradient-primary hover:opacity-90 shadow-primary"
                >
                  Done
                </Button>
              </div>
            </div>
          ) : (
            // Fallback if Google Form not configured
            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm text-yellow-900 dark:text-yellow-100 mb-4">
                  ⚠️ Google Forms enrollment not configured. 
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  To enable Google Forms enrollment:
                </p>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Create a Google Form with your enrollment questions</li>
                  <li>Click "Send" and then the "&lt;&gt;" icon to get the embed URL</li>
                  <li>Pass the googleFormEmbedUrl prop to this component</li>
                </ol>
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                >
                  Close
                </Button>
                <Button 
                  asChild
                  className="flex-1 bg-gradient-primary hover:opacity-90 shadow-primary"
                >
                  <a 
                    href="https://forms.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Create Form
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};