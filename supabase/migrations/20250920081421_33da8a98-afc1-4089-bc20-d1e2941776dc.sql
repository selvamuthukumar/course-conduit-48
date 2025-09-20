-- Fix security vulnerability: Restrict access to student enrollment data
-- Only allow admins and managers to view enrollment records containing personal information

DROP POLICY IF EXISTS "Anyone can view enrollments" ON public.enrollments;

CREATE POLICY "Only admins and managers can view enrollments" 
ON public.enrollments 
FOR SELECT 
USING (
  has_role(auth.uid(), 'admin'::app_role) OR 
  has_role(auth.uid(), 'manager'::app_role)
);