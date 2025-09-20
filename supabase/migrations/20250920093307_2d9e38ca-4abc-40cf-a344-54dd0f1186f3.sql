-- Update Quality Assurance course to In-Process And Final Quality Engineer
UPDATE public.courses 
SET 
  title = 'In-Process And Final Quality Engineer',
  job_description = 'The individual at work sample checks final PCB assembly for functional conformance as well as visually before they are packed and dispatched. The individual is responsible for ensuring total quality or IPC or ISO standards compliance during the assembly of PCBs.',
  eligibility_criteria = ARRAY[
    'Diploma (after 10th in Electrical / Electronics / Mechanical) with 1 year of relevant experience',
    '12th Grade completed with 1 year of NTC / NAC and 1 year of relevant experience', 
    '12th Grade completed with 2 years of relevant experience',
    'Previous relevant qualification of NSQF Level 4 with 3 years of relevant experience',
    '10th Grade completed with 4 years of relevant experience'
  ]
WHERE title ILIKE '%quality%assurance%' OR title ILIKE '%quality%control%' OR title ILIKE '%qa%';