-- Fix security vulnerability: Restrict enrollment creation to authenticated users only
-- This prevents malicious users from inserting fake enrollments

DROP POLICY IF EXISTS "Anyone can create enrollments" ON public.enrollments;

CREATE POLICY "Only authenticated users can create enrollments" 
ON public.enrollments 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);