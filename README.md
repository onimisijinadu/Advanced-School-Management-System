## Simple School Management System

## Description

The Simple School Management System is a modern web-based application designed to help teachers efficiently manage daily academic activities with minimal effort.

The system streamlines classroom operations by providing tools for:

- Managing classes and students

- Recording attendance

- Handling academic records

- Uploading lesson materials

- Validating student identity

- Generating reports and documentation

It is built with a clean, intuitive interface to ensure teachers can focus more on teaching and less on administrative work.

## Tech Stack

The project is built using the following technologies:

1. React (Vite) – Frontend framework and fast build tool

2. Tailwind CSS – Utility-first CSS framework for styling

3. React Router DOM – Client-side routing

4. Lucide React – Icon library for UI elements

## Features

when a teacher logs in, the system should help them do daily academics work with minimal efforts.
A. Dashboard Overview (dashboard homepage)
• Today’s Classes (classes they will teach for the day)
• Number of students per class
• Today’s attendance summary
• Announcements/notices

B. Class & Student Management (second page)
• View assigned classes (classes the teacher are assigned to)
• View students in each class
• Access individual student profiles
• View student academic history

C. Attendance Management
• Mark daily attendance
• View attendance history
• Generate attendance reports

D. Academic Records
• Enter test scores
• Enter exam results
• Automatic grade calculation
• View student performance trend

E. Lesson & Content Management
• Upload lesson notes
• Upload teaching materials
• Store files digitally
• Reuse materials across classes

F. Student Identification & Validation
• View student digital ID
• Validate students via ID number
• Confirm enrollment status

H. Reports & Document
• Generate class reports
• Download students lists
• Upload students-related documents

## Installation & Setup

A. Clone Respository

    git clone 

    cd 

B. Install Dependencies

    npm install

C. Run Development Server
npm run dev
(the application will start on "(http://localhost:5173)")

## Project Structure

    src/

│
├── assets/
│ ├── react.svg
│
├── components/
│ │── Button.jsx
│ │── Classcard.jsx
│ │── Tables.jsx
│ │── Message.jsx
│ │── Validationmessage.jsx
│ │
├── data/
│ │── data.jsx
│  
│── layout/
│ ├── Sidebar.jsx
│ ├── Dashboardheader.jsx
│ └── Dashboardlayout.jsx
│
├── pages/
│ ├── auth/
│ │ └── Loginpage.jsx
│ │
│ ├── dashboard/
│ │ └── DashboardHome.jsx
│ │
│ ├── classes/
│ │ ├── MyClasses.jsx
│ │ └── ClassDetails.jsx
│ │
│ ├── students/
│ │ └── StudentProfile.jsx
│ │
│ ├── attendance/
│ │ └── Attendance.jsx
│ │
│ ├── academics/
│ │ └── AcademicRecords.jsx
│ │
│ ├── lessons/
│ │ └── LessonManagement.jsx
│ │
│ ├── validation/
│ │ └── StudentValidation.jsx
│ │
│ └── reports/
│ └── Reports.jsx
│
├── routes/
│ └── AppRouters.jsx
│
│
│
│
├── App.jsx
├── main.jsx
└── index.css

## Architecture Overview

The application follows a component-based architecture using React best practices:

Pages handle high-level views.

Components provide reusable UI elements.

Routes define protected and public navigation.

Layout Components ensure consistent dashboard structure.

## Routing Structure

/login → Authentication page

/dashboard → Dashboard overview

/MyClasses → Class management

/MyClasses/:id→ Class details

/MyClasses/:id/:id → Student profile

/attendance → Attendance management

/AcademicRecords → Academic records

/lessons → Lesson management

/StudentValidation → Student validation

/reports → Reports and documentation

## Future Improvements

Backend integration (Node.js / Express / Firebase)

Role-based authorization (Admin, Teacher, Staff)

PDF report export

Real-time notifications

Database integration (PostgreSQL)

## Target Users

A. Teachers
B. School administrators
C. Academic coordinators

## License

This project is developed for educational and academic purposes.
You may modify and extend it as needed.

## Author

Developed as a modern academic management solution using React and Tailwind CSS.
