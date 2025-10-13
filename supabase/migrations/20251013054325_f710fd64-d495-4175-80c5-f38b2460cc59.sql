-- Create table for puppy booking requests
CREATE TABLE public.puppy_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  preferred_sex TEXT NOT NULL CHECK (preferred_sex IN ('Male', 'Female', 'Either')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.puppy_bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form)
CREATE POLICY "Anyone can submit puppy booking requests"
ON public.puppy_bookings
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy for authenticated users to view all bookings (for admin)
CREATE POLICY "Authenticated users can view all bookings"
ON public.puppy_bookings
FOR SELECT
TO authenticated
USING (true);