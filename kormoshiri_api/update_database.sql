-- Update users table to add role column
ALTER TABLE users 
ADD COLUMN role ENUM('student', 'recruiter') NOT NULL DEFAULT 'student' 
AFTER phone;

-- Update existing records to set default role as 'student'
UPDATE users SET role = 'student' WHERE role IS NULL; 