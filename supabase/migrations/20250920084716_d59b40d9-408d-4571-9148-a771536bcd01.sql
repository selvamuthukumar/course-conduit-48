-- Add new columns to courses table for dynamic content
ALTER TABLE public.courses 
ADD COLUMN job_description TEXT,
ADD COLUMN eligibility_criteria TEXT[],
ADD COLUMN curriculum_url TEXT;

-- Update existing courses with unique content for each
UPDATE public.courses 
SET 
  job_description = 'PCB assembly operator is responsible for manually placing different types of components on the PCB as per the design requirements and then soldering them.',
  eligibility_criteria = ARRAY[
    'Completed 8th Grade with 2 years of NTC (plus 2 years of NAC / relevant experience)',
    'Completed 10th Grade with 2 years of NTC / NAC / relevant experience', 
    'Completed 12th Grade',
    'Certificate – NSQF (Level 3 in Assembly Technician) with 2 years of experience'
  ],
  curriculum_url = 'https://nqr.gov.in/qualification/document/PCB_Assembly_Specialist_v3.0.pdf'
WHERE title = 'PCB Assembly Specialist';

UPDATE public.courses 
SET 
  job_description = 'IoT Hardware Developer designs and develops Internet of Things devices, sensors, and embedded systems for various applications.',
  eligibility_criteria = ARRAY[
    'Bachelor''s degree in Electronics/Computer Engineering',
    'Diploma in Electronics with 3 years of experience',
    'Certificate in IoT Development with 2 years of experience',
    'Relevant industry certification in embedded systems'
  ],
  curriculum_url = 'https://nqr.gov.in/qualification/document/IoT_Hardware_Developer_v2.0.pdf'
WHERE title = 'IoT Hardware Developer';

UPDATE public.courses 
SET 
  job_description = 'Quality Assurance Technician ensures products meet quality standards through testing, inspection, and documentation of manufacturing processes.',
  eligibility_criteria = ARRAY[
    'Completed 12th Grade in Science stream',
    'Diploma in Quality Management',
    'Certificate in Quality Control with 1 year experience',
    'ITI certification with quality testing specialization'
  ],
  curriculum_url = 'https://nqr.gov.in/qualification/document/QA_Technician_v1.5.pdf'
WHERE title = 'Quality Assurance Technician';