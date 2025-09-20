-- Add phone number column to enrollments table
ALTER TABLE public.enrollments 
ADD COLUMN student_phone text;

-- Update RLS policy to allow anyone to create enrollments (not just authenticated users)
DROP POLICY IF EXISTS "Authenticated users can create enrollments" ON public.enrollments;

CREATE POLICY "Anyone can create enrollments" 
ON public.enrollments 
FOR INSERT 
WITH CHECK (true);