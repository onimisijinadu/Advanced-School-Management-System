import {
  Route,
  Routes,
} from 'react-router-dom';

import { Dashboardlayout } from '../layouts/Dashboardlayout';
import { AcademicAdmin } from '../pages/admin/Academic_Admin/academicAdmin';
import {
  AttendanceOversight,
} from '../pages/admin/attendance_oversight/attendanceOversight';
// import { AdminDashboard } from "../pages/admin/dashboard/admin_dashboard";
import { AdminDashboard } from '../pages/admin/dashboard/admin_dashboard';
import {
  DocumentManagement,
} from '../pages/admin/document_management/documentManagement';
import {
  ReportsAnalytics,
} from '../pages/admin/report_analytics/reportAnalytics';
import {
  StudentManagement,
} from '../pages/admin/Student_Management/studentManagement';
import { Security } from '../pages/admin/studentId_security/security';
import { SystemConfig } from '../pages/admin/system_config/system_config';
import { TeacherStaff } from '../pages/admin/teacher_staff/teacher_staff';
import { Login } from '../pages/auth/Loginpage';
import { AcademicRecords } from '../pages/teacher/academics/AcademicRecords';
import { Attendance } from '../pages/teacher/attendance/Attendance';
import { ClassDetails } from '../pages/teacher/classes/ClassDetails';
import { MyClasses } from '../pages/teacher/classes/MyClasses';
import {
  DashboardHomePage,
} from '../pages/teacher/dashboard/DashboardHomePage';
import { Lessons } from '../pages/teacher/lessons/Lessons';
import { Reports } from '../pages/teacher/reports/Reports';
import { StudentDetails } from '../pages/teacher/students/studentDetails';
import {
  StudentValidation,
} from '../pages/teacher/validation/StudentValidation';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>

      {/* teacher Routes */}

      <Route
        path="/teacher"
        element={
          <ProtectedRoute allowedRole={"teacher"}>
            <Dashboardlayout />
          </ProtectedRoute>
        }
      >
        <Route path="/teacher/dashboard" element={<DashboardHomePage />} />
        <Route path="/teacher/MyClasses" element={<MyClasses />} />
        <Route path="/teacher/MyClasses/:classId" element={<ClassDetails />} />
        <Route
          path="/teacher/MyClasses/:classId/:studentId"
          element={<StudentDetails />}
        />
        <Route path="/teacher/Attendance" element={<Attendance />} />
        <Route path="/teacher/AcademicRecords" element={<AcademicRecords />} />
        <Route path="/teacher/Lessons" element={<Lessons />} />
        <Route
          path="/teacher/StudentValidation"
          element={<StudentValidation />}
        />
        <Route path="/teacher/Reports" element={<Reports />} />
      </Route>

      {/* Admin dashbaord */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole={"admin"}>
            <Dashboardlayout />
          </ProtectedRoute>
        }
      >
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<StudentManagement />} />
        <Route path="/admin/teachers" element={<TeacherStaff />} />
        <Route path="/admin/academics" element={<AcademicAdmin />} />
        <Route path="/admin/attendance" element={<AttendanceOversight />} />
        <Route
          path="/admin/documentManagement"
          element={<DocumentManagement />}
        />
        <Route path="/admin/security" element={<Security />} />
        <Route path="/admin/reports" element={<ReportsAnalytics />} />
        <Route path="/admin/settings" element={<SystemConfig />} />
      </Route>
    </Routes>
  );
};
