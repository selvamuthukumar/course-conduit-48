/**
 * Enrollment Configuration
 * Reads Google Forms URLs from courses.json
 */

export interface EnrollmentConfig {
  courseId: string;
  googleFormUrl?: string;
  useLocalStorage?: boolean;
}

/**
 * Get enrollment configuration for a course
 * Reads googleFormUrl from the course data in public/courses.json
 */
export const getEnrollmentConfig = (
  courseId: string,
  courseData?: any
): EnrollmentConfig => {
  const formUrl = courseData?.googleFormUrl || '';
  
  return {
    courseId,
    googleFormUrl: formUrl,
    useLocalStorage: true
  };
};

/**
 * Check if Google Forms is configured for a course
 */
export const hasGoogleForm = (courseData?: any): boolean => {
  return !!courseData?.googleFormUrl;
};
