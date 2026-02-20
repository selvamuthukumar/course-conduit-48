
UPDATE courses SET eligibility_criteria = ARRAY[
  'Diploma (after 10th) in Electrical, Electronics, or Mechanical Engineering with 1 year of relevant work experience',
  '12th Grade Pass with 1 year of NTC/NAC and 1 year of relevant work experience',
  '12th Grade Pass with 2 years of relevant work experience',
  'NSQF Level 4 qualification in a relevant field with 3 years of relevant work experience',
  '10th Grade Pass with 4 years of relevant work experience'
] WHERE id = '9fed2c51-dc23-460f-aa6b-2d8f19e51729';

UPDATE courses SET eligibility_criteria = ARRAY[
  '8th Grade Pass with 2 years of NTC and an additional 2 years of NAC or relevant work experience',
  '10th Grade Pass with 2 years of NTC, NAC, or relevant work experience',
  '12th Class Pass',
  'NSQF Level 3 Certificate in Maintenance Technician with 2 years of relevant work experience'
] WHERE id = '41418158-ecff-4448-9313-31eb3f1f4d6c';

UPDATE courses SET eligibility_criteria = ARRAY[
  '8th Grade Pass with 2 years of NTC and 2 years of NAC or relevant work experience',
  '10th Grade Pass with 2 years of NTC, NAC, or relevant work experience',
  '12th Grade Pass',
  'NSQF Level 3 Certificate in Maintenance Technician with 2 years of relevant work experience'
] WHERE id = 'fd80cde7-6017-4ebc-b4ef-2e097ddae24d';

UPDATE courses SET eligibility_criteria = ARRAY[
  '3-Year Diploma after 10th',
  '10th Pass with 1 year of NTC/NAC',
  '10th Pass with 2 years of relevant experience',
  '8th Pass with 2 years of NTC/NAC',
  'Previous NSQF qualification with 2 years of relevant experience'
] WHERE id = '4a09fcf8-5559-4fb4-8cf2-d97c9afd90f0';
