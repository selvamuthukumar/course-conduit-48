UPDATE public.courses 
SET title = 'Printed Circuit Board Assembly Specialist'
WHERE title ILIKE '%PCB%' OR title ILIKE '%circuit board%' OR title ILIKE '%assembly%';