export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  price: number;
  enrolledStudents: string[];
  maxStudents: number;
  startDate: string;
  imageUrl?: string;
  enrollmentCount?: number;
}

export interface Student {
  id: string;
  name: string;
  email: string;
}