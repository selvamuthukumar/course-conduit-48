import { Course } from '@/types/course';

export type DataFormat = 'json' | 'csv';

/**
 * Load courses from a static JSON file
 */
export const loadCoursesFromJson = async (filePath: string = '/courses.json'): Promise<Course[]> => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load courses: ${response.statusText}`);
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error loading courses from JSON:', error);
    throw error;
  }
};

/**
 * Load courses from a CSV file
 * CSV should have headers: id,title,description,instructor,duration,level,category,price,maxStudents,startDate,jobDescription,curriculumUrl
 */
export const loadCoursesFromCsv = async (filePath: string = '/courses.csv'): Promise<Course[]> => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load courses: ${response.statusText}`);
    }
    const text = await response.text();
    const lines = text.trim().split('\n');
    
    if (lines.length < 2) {
      throw new Error('CSV file is empty or has no data rows');
    }

    const headers = lines[0].split(',').map(h => h.trim());
    const courses: Course[] = [];

    for (let i = 1; i < lines.length; i++) {
      // Simple CSV parsing (handles quoted values with commas)
      const values = parseCSVLine(lines[i]);
      const row = headers.reduce((obj, header, index) => {
        obj[header] = values[index]?.trim() || '';
        return obj;
      }, {} as Record<string, string>);

      courses.push({
        id: row.id,
        title: row.title,
        description: row.description,
        instructor: row.instructor,
        duration: row.duration,
        level: (row.level as 'Beginner' | 'Intermediate' | 'Advanced') || 'Beginner',
        category: row.category,
        price: parseInt(row.price) || 0,
        enrolledStudents: [],
        maxStudents: parseInt(row.maxStudents) || 50,
        startDate: row.startDate,
        jobDescription: row.jobDescription,
        curriculumUrl: row.curriculumUrl,
      });
    }

    return courses;
  } catch (error) {
    console.error('Error loading courses from CSV:', error);
    throw error;
  }
};

/**
 * Simple CSV line parser that handles quoted values containing commas
 */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        i++; // Skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current);
  return result;
}

/**
 * Load courses from either JSON or CSV format
 */
export const loadCourses = async (
  format: DataFormat = 'json',
  filePath?: string
): Promise<Course[]> => {
  if (format === 'csv') {
    return loadCoursesFromCsv(filePath);
  } else {
    return loadCoursesFromJson(filePath);
  }
};
