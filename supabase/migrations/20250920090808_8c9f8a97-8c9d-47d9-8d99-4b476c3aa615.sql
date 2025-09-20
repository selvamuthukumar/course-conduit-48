-- Update IoT course title and details
UPDATE public.courses 
SET 
  title = 'Electronics Manufacturing Services Technician',
  job_description = 'Electronics Manufacturing Services Technician in this job works on SMT machines, circuit boards and soldering equipment. The individual is responsible for the maintenance and troubleshooting of SMT equipment and also assists in the assembly and programming of SMT equipment.',
  eligibility_criteria = ARRAY[
    '8th Grade completed with 2 years of NTC (plus 2 years of NAC / relevant experience)',
    '10th Grade completed (plus 2 years of NTC / NAC / relevant experience)', 
    '12th Grade completed',
    'Certificate – NSQF (Level 3 in Maintenance Technician) with 2 years of experience'
  ],
  curriculum_url = 'https://nqr.gov.in/qualification/document/EMS%20Technician%20-%20ELE_Q5315_v3.0.pdf'
WHERE title ILIKE '%IoT%' OR title ILIKE '%internet%' OR title ILIKE '%things%';