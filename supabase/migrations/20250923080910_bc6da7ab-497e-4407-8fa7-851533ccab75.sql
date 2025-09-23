-- Add new columns to enrollments table for additional student information
ALTER TABLE public.enrollments 
ADD COLUMN school_name TEXT,
ADD COLUMN current_grade TEXT;