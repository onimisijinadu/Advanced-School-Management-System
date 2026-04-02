export const ALL_PERMISSIONS = [
  { id: "full_access", label: "Full System Access", category: "System" },
  { id: "user_mgmt", label: "User Management", category: "System" },
  { id: "system_config", label: "System Configuration", category: "System" },
  {
    id: "academic_oversight",
    label: "Academic Oversight",
    category: "Academic",
  },
  {
    id: "staff_mgmt",
    label: "Staff Management",
    category: "Staff",
  },
  {
    id: "class_mgmt",
    label: "Class Management",
    category: "Academic",
  },
  {
    id: "view_grade",
    label: "View Grades",
    category: "Academic",
  },
  {
    id: "view_attendance",
    label: "View Attendance",
    category: "Academic",
  },
  {
    id: "access_materials",
    label: "Access Materials",
    category: "Academic",
  },
  { id: "grade_entry", label: "Grade Entry", category: "Academic" },
  { id: "attendance", label: "Attendance Marking", category: "Staff" },
  { id: "reports", label: "Reports Access", category: "Staff" },
];

//user roles and permissions

export const Permissions = [
  {
    role: "Administrator",
    users: 3,
    permissions: [
      { id: "full_access", label: "Full System Access", category: "System" },
      { id: "user_mgmt", label: "User Management", category: "System" },
      {
        id: "system_config",
        label: "System Configuration",
        category: "System",
      },
    ],
  },
  {
    role: "Principal",
    users: 1,
    permissions: [
      {
        id: "academic_oversight",
        label: "Academic Oversight",
        category: "Academic",
      },

      { id: "reports", label: "Reports Access", category: "Staff" },
      {
        id: "staff_mgmt",
        label: "Staff Management",
        category: "Staff",
      },
    ],
  },
  {
    role: "Teacher",
    users: 78,
    permissions: [
      {
        id: "class_mgmt",
        label: "Class Management",
        category: "Academic",
      },
      { id: "grade_entry", label: "Grade Entry", category: "Academic" },
      { id: "attendance", label: "Attendance Marking", category: "Staff" },
    ],
  },
  {
    role: "Student",
    users: 1247,
    permissions: [
      {
        id: "view_grade",
        label: "View Grades",
        category: "Academic",
      },
      {
        id: "view_attendance",
        label: "View Attendance",
        category: "Academic",
      },
      {
        id: "access_materials",
        label: "Access Materials",
        category: "Academic",
      },
    ],
  },
];

// [theme: "dark"]{
//     --color-dark-orange-50: #fff3e5;
// --color-dark-orange-100: #ffe7cc;
// --color-dark-orange-200: #ffcf99;
// --color-dark-orange-300: #ffb866;
// --color-dark-orange-400: #ffa033;
// --color-dark-orange-500: #ff8800;
// --color-dark-orange-600: #cc6d00;
// --color-dark-orange-700: #995200;
// --color-dark-orange-800: #663600;
// --color-dark-orange-900: #331b00;
// --color-dark-orange-950: #241300;

// }
