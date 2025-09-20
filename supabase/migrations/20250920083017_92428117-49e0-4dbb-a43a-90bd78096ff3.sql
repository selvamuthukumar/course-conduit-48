-- Add 3 new technical training courses

-- PCB Assembly Specialist Course
INSERT INTO public.courses (
  title,
  description,
  instructor,
  duration,
  level,
  category,
  price,
  max_students,
  start_date
) VALUES (
  'PCB Assembly Specialist',
  'Master the art of PCB assembly with hands-on training in surface mount technology, through-hole components, and quality testing procedures.',
  'VVDN Technologies',
  '8 weeks',
  'Intermediate',
  'Electronics Manufacturing',
  15000,
  25,
  '2024-11-15'
);

-- IoT Hardware Developer Course  
INSERT INTO public.courses (
  title,
  description,
  instructor,
  duration,
  level,
  category,
  price,
  max_students,
  start_date
) VALUES (
  'IoT Hardware Developer',
  'Learn to design and develop cutting-edge IoT hardware solutions using microcontrollers, sensors, and wireless communication technologies.',
  'VVDN Technologies',
  '12 weeks',
  'Advanced',
  'IoT Development',
  25000,
  20,
  '2024-12-01'
);

-- Quality Assurance Technician Course
INSERT INTO public.courses (
  title,
  description,
  instructor,
  duration,
  level,
  category,
  price,
  max_students,
  start_date
) VALUES (
  'Quality Assurance Technician',
  'Comprehensive training in quality control processes, testing methodologies, and industry standard compliance for manufacturing excellence.',
  'VVDN Technologies',
  '6 weeks',
  'Beginner',
  'Quality Management',
  12000,
  30,
  '2024-10-28'
);