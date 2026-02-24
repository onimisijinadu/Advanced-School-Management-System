import {
  BookMarkedIcon,
  BookOpen,
  BookOpenIcon,
  Calendar,
  ChartColumnIncreasing,
  CheckCircle,
  LayoutDashboardIcon,
  LucideCalendarCheck,
  LucideFileText,
  UserCheckIcon,
  Users,
} from 'lucide-react';

// cardData for dashboard home page
export const CardData = [
  {
    id: "1",
    decription: "Today's Classes",
    value: "3",
    icon: Calendar,
    iconStyle: "text-blue-600 bg-blue-100 w-15 h-15 p-2 m-0 rounded-xl",
  },
  {
    id: "2",
    decription: "Total Students",
    value: "142",
    icon: Users,
    iconStyle: "text-green-600 bg-green-100 w-15 h-15 p-2 m-0 rounded-xl",
  },
  {
    id: "3",
    decription: "Today's Classes",
    value: "3",
    icon: CheckCircle,
    iconStyle: "text-purple-600 bg-purple-100 w-15 h-15 p-2 m-0 rounded-xl",
  },
  {
    id: "4",
    decription: "Today's Classes",
    value: "3",
    icon: BookOpen,
    iconStyle: "text-orange-600 bg-orange-100 w-15 h-15 p-2 m-0 rounded-xl",
  },
];
//schedule data for dashboard home page
export const ScheduleData = [
  {
    id: 1,
    subject: "Mathematics",
    class: "Grade 10-A",
    time: "9:00 AM - 10:30 AM",
    location: "Room 101",
    totalStudents: "32 students",
    scheduleDateAndTime: "Mon, Wed, Fri - 9:00 AM",
    icon: BookOpen,
  },
  {
    id: 2,
    subject: "Algebra",
    class: "Grade 11-B",
    time: "11:00 AM - 12:00 PM",
    location: "Room 101",
    totalStudents: "28 students",
    scheduleDateAndTime: "Tue, Thu - 11:00 AM",
    icon: BookOpen,
  },
  {
    id: 3,
    subject: "Calculus",
    class: "Grade 12-A",
    time: "2:00 PM - 3:00 PM",
    location: "Room 305",
    totalStudents: "25 students",
    scheduleDateAndTime: "Mon, Wed - 2:00 PM",
    icon: BookOpen,
  },
  {
    id: 4,
    subject: "Mathematics",
    class: "Grade 10-B",
    time: "10:00 AM - 12:30 PM",
    location: "Room 201",
    totalStudents: "30 students",
    scheduleDateAndTime: "Tue, Thu, Fri - 10:00 AM",
    icon: BookOpen,
  },
  {
    id: 5,
    subject: "Algebra",
    class: "Grade 11-A",
    time: "1:00 PM - 2:00 PM",
    location: "Room 305",
    totalStudents: "27 students",
    scheduleDateAndTime: "Mon, Wed - 1:00 AM",
    icon: BookOpen,
  },
];
//Announcements data
export const Announcements = [
  {
    topic: "Parent-Teacher Meeting",
    date: "Feb 15, 2026",
    tagLine: "Important",
  },
  {
    topic: "Mid-Term Examination Schedule Released",
    date: "Feb 12, 2026",
    tagLine: "Academic",
  },
  {
    topic: "Professional Development Workshop",
    date: "Feb 19, 2026",
    tagLine: "Event",
  },
];
//SideNav Links or Dashbaord links
export const NavLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    name: "My Classes",
    path: "/dashboard/MyClasses",
    icon: BookOpenIcon,
  },
  {
    name: "Attendance",
    path: "/dashboard/Attendance",
    icon: LucideCalendarCheck,
  },
  {
    name: "Academic Records",
    path: "/dashboard/AcademicRecords",
    icon: LucideFileText,
  },
  {
    name: "Lessons",
    path: "/dashboard/Lessons",
    icon: BookMarkedIcon,
  },
  {
    name: "Student Validation",
    path: "/dashboard/StudentValidation",
    icon: UserCheckIcon,
  },
  {
    name: "Reports",
    path: "/dashboard/Reports",
    icon: ChartColumnIncreasing,
  },
];
//Quick Dashboard Action Links
export const QuickActionLinks = [
  {
    name: "Mark Attendance",
    icon: CheckCircle,
    path: "/dashboard/Attendance",
  },
  {
    name: "Enter Grades",
    icon: BookOpen,
    path: "/dashboard/AcademicRecords",
  },
  {
    name: "Upload Lesson",
    icon: Calendar,
    path: "/dashboard/Lessons",
  },
  {
    name: "Generate Report",
    icon: Users,
    path: "/dashboard/Reports",
  },
];
//Array of scheduled classes
// export const classes =[
//     {
//         class: "Grade 10-A",
//         subject:
//     }
// ]
// Student List
export const studentList = [
  {
    studentId: "STU001",
    name: "Emma Wilson",
    status: "Active",
    attendance: "95%",
    grade: "A",
    mail: "emma.wilson@school.edu",
    class: "Grade 10-A",
    address: "123 Main street, Springfield, IL 62701",
    phone: "+234 9176456732",
    dob: "may-15-2009",
    dateIn: "Feb 10, 2026",
  },
  {
    studentId: "STU002",
    name: "James Brown",
    status: "Active",
    attendance: "92%",
    grade: "A-",
    mail: "jams.brown@school.edu",
    class: "Grade 10-A",
    address: "123 Main street, Starfield, IL 62710",
    phone: "+234 9090706070",
    dob: "may-15-2005",
    dateIn: "Feb 9, 2026",
  },
  {
    studentId: "STU003",
    name: "Olivia Davis",
    status: "Active",
    attendance: "98%",
    grade: "A+",
    mail: "olivia@school.edu",
    class: "Grade 10-A",
    address: "153 Main street, Sfild, rv 701",
    phone: "+234 7090236745",
    dob: "may-15-2005",
    dateIn: "Dec 9, 2025",
  },
  {
    studentId: "STU004",
    name: "Noah Martinez",
    status: "Inactive",
    attendance: "88%",
    grade: "B+",
    mail: "noah@school.edu",
    class: "Grade 10-A",
    address: "123 Main street, Springfield, IL 62701",
    phone: "+234 9176456732",
    dob: "may-15-2007",
    dateIn: "Feb 9, 2026",
  },
  {
    studentId: "STU005",
    name: "Sophia Garcia",
    status: "Active",
    attendance: "94%",
    grade: "A",
    mail: "sonian@school.edu",
    class: "Grade 11-A",
    address: "123 Main street, Springfield, IL 62701",
    phone: "+234 9125673401",
    dob: "may-15-2010",
    dateIn: "Feb 10, 2026",
  },
  {
    studentId: "STU006",
    name: "Liam Anderson",
    status: "Inactive",
    attendance: "90%",
    grade: "B+",
    mail: "anderson@school.edu",
    class: "Grade 11-A",
    address: "123 Main street, Springfield, IL 62701",
    phone: "+234 7167575641",
    dob: "may-15-2009",
    dateIn: "Feb 10, 2026",
  },
  {
    studentId: "STU007",
    name: "Ava Taylor",
    status: "Active",
    attendance: "96%",
    grade: "A",
    mail: "emma.wilson@school.edu",
    class: "Grade 10-B",
    address: "123 Main street, Springfield, IL 62701",
    phone: "+234 9176456732",
    dob: "may-15-2009",
    dateIn: "Feb 9, 2026",
  },
  {
    studentId: "STU008",
    name: "Williams Thomas",
    status: "Inactive",
    attendance: "85%",
    grade: "B",
    mail: "emma.wilson@school.edu",
    class: "Grade 12-A",
    address: "123 Main street, Springfield, IL 62701",
    phone: "+234 9176456732",
    dob: "may-15-2009",
    dateIn: "Feb 9, 2026",
  },
];
//student academic performance table
export const academicPerformance = [
  {
    subject: "Mathemathics",
    term: "Mid-Term 2026",
    score: "92%",
    grade: "A",
    teacher: "Prof. Sarah Johnson",
  },
  {
    subject: " Physics",
    term: "Mid-Term 2026",
    score: " 88%",
    grade: "B+",
    teacher: "Prof. Micheal Chen",
  },
  {
    subject: "Chemistry",
    term: "Mid-Term 2026",
    score: "95%",
    grade: "A+",
    teacher: "Prof. Emily Brown",
  },
  {
    subject: "English",
    term: "Mid-Term 2026",
    score: "90%",
    grade: "A-",
    teacher: "Prof. Maria Garcia",
  },
  {
    subject: "History",
    term: "Mid-Term 2026",
    score: "85%",
    grade: "B",
    teacher: "Prof. James Smith",
  },
];
//student attendance table
export const attendance = [
  {
    month: "Feburary 2026",
    date: "Mon, Feb 9, 2026",
    present: "20",
    absent: "2",
    percentage: "90.9%",
  },
  {
    month: "January 2025",
    date: "Tue, Feb 10, 2026",
    present: "18",
    absent: " 1%",
    percentage: "94.7%",
  },
  {
    month: "December 2025",
    date: "Wed, Feb 11, 2026",
    present: "21",
    absent: "1",
    percentage: "95.5%",
  },
  {
    month: "November 2025",
    date: "Thur, Feb 12, 2026",
    present: "22",
    absent: "0",
    percentage: "100%",
  },
];
//grade scale table
export const gradeScale = [
  {
    grade: "A",
    percentage: "70-100%",
  },
  {
    grade: "B",
    percentage: "50-69%",
  },
  {
    grade: "C",
    percentage: "46-50%",
  },
  {
    grade: "D",
    percentage: "40-45%",
  },
  {
    grade: "E",
    percentage: "30-39%",
  },
  {
    grade: "F",
    percentage: "0-29%",
  },
];
//student performance overview
export const studetGrade = [
  {
    studentId: "STU001",
    name: "Emma Wilson",
    test: "92%",
    exam: "95%",
    total: "187",
    average: "93.5%",
    grade: "A",
  },
  {
    studentId: "STU002",
    name: "James Brown",
    test: "88%",
    exam: "90%",
    total: "178",
    average: "89%",
    grade: "A",
  },
  {
    studentId: "STU003",
    name: "Olivia Davis",
    test: "95%",
    exam: "98%",
    total: "193",
    average: "95.5%",
    grade: "A+",
  },
  {
    studentId: "STU004",
    name: "Noah Martinez",
    status: "Inactive",
    test: "82",
    exam: "85",
    total: "167",
    average: "83.5%",
    grade: "B",
  },
];
// Uploaded Materials table
export const materialsUpload = [
  {
    Title: "Quadratic Equations - Chapter 5",
    FileName: "quadratic_equations.pdf",
    Class: "Grade 10-A",
    types: "PDF",
    Size: "2.4 MB",
    UploadDate: "Feb. 7, 2026",
  },
  {
    Title: "Algebric Expressions Worksheet",
    FileName: "algebra_worksheet.docx",
    Class: "Grade 11-B",
    types: "DOCX",
    Size: "1.1 MB",
    UploadDate: "Feb 6, 2026",
  },
  {
    Title: "Calculus Introduction Slides",
    FileName: "calculus_intro.pptx",
    Class: "Grade 12-A",
    types: "PPTX",
    Size: "5.6 MB",
    UploadDate: "Feb 5, 2026",
  },
  {
    Title: "Trigonometry Practice Problems",
    FileName: "trig_practice.pdf",
    Class: "Grade 10-A",
    types: "PDF",
    Size: "1.4 MB",
    UploadDate: "Feb 4, 2026",
  },
  {
    Title: "Linear Functions Video Tutorial",
    FileName: "linear_functions.mp4",
    Class: "Grade 11-B",
    types: "MP4",
    Size: "45.4 MB",
    UploadDate: "Feb. 1, 2026",
  },
];
