-- Update existing Introduction to React course or insert new Electronics Manufacturing Services Technician course
DO $$
BEGIN
  -- First try to update existing course with title 'Introduction to React'
  UPDATE courses 
  SET 
    title = 'Electronics Manufacturing Services Technician',
    description = 'Electronics Manufacturing Services Technician in this job works on SMT machines, circuit boards and soldering equipment. The individual is responsible for the maintenance and troubleshooting of SMT equipment and also assists in the assembly and programming of SMT equipment.

Eligibility Criteria:
• Completed 8th Grade with 2 years of NTC (plus 2 years of NAC / relevant experience)
• OR Completed 10th Grade with 2 years of NTC / NAC / relevant experience  
• OR Completed 12th Grade
• OR Certificate – NSQF (Level 3 in Maintenance Technician) with 2 years of experience

Reference: https://nqr.gov.in/qualification/document/EMS%20Technician%20-%20ELE_Q5315_v3.0.pdf',
    category = 'Electronics Manufacturing',
    level = 'Intermediate',
    duration = '6 months',
    price = 0,
    instructor = 'Industry Expert',
    max_students = 30,
    start_date = '2025-01-15'
  WHERE title ILIKE '%react%' OR title ILIKE '%introduction%';
  
  -- If no existing course was updated, insert a new one
  IF NOT FOUND THEN
    INSERT INTO courses (
      title,
      description,
      category,
      level,
      duration,
      price,
      instructor,
      max_students,
      start_date
    ) VALUES (
      'Electronics Manufacturing Services Technician',
      'Electronics Manufacturing Services Technician in this job works on SMT machines, circuit boards and soldering equipment. The individual is responsible for the maintenance and troubleshooting of SMT equipment and also assists in the assembly and programming of SMT equipment.

Eligibility Criteria:
• Completed 8th Grade with 2 years of NTC (plus 2 years of NAC / relevant experience)
• OR Completed 10th Grade with 2 years of NTC / NAC / relevant experience  
• OR Completed 12th Grade
• OR Certificate – NSQF (Level 3 in Maintenance Technician) with 2 years of experience

Reference: https://nqr.gov.in/qualification/document/EMS%20Technician%20-%20ELE_Q5315_v3.0.pdf',
      'Electronics Manufacturing',
      'Intermediate',
      '6 months',
      0,
      'Industry Expert',
      30,
      '2025-01-15'
    );
  END IF;
END $$;