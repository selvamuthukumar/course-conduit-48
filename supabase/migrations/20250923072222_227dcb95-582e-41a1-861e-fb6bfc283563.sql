UPDATE courses 
SET eligibility_criteria = ARRAY[
  '3-year Diploma after 10th',
  '10th Grade completed with 1 year of NTC / NAC',
  '10th Grade completed with 2 years of relevant experience',
  '8th Grade completed with 2 years of NTC / NAC',
  'Previous NSQF qualification with 2 years of relevant experience'
]
WHERE title = 'Machine Operator - Injection Moulding Plastic';