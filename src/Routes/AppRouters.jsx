import {
  Route,
  Routes,
} from 'react-router-dom';

import { Dashboardlayout } from '../layouts/Dashboardlayout';
import { AcademicRecords } from '../pages/academics/AcademicRecords';
import { Attendance } from '../pages/attendance/Attendance';
import { Login } from '../pages/auth/Loginpage';
import { ClassDetails } from '../pages/classes/ClassDetails';
import { MyClasses } from '../pages/classes/MyClasses';
import { DashboardHomePage } from '../pages/dashboard/DashboardHomePage';
import { Lessons } from '../pages/lessons/Lessons';
import { Reports } from '../pages/reports/Reports';
import { StudentDetails } from '../pages/students/studentDetails';
import { StudentValidation } from '../pages/validation/StudentValidation';

export const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboardlayout />}>
        <Route path="/dashboard" element={<DashboardHomePage />} />
        <Route path="/dashboard/MyClasses" element={<MyClasses />} />
        <Route path="/dashboard/MyClasses/:id" element={<ClassDetails />} />
        <Route
          path="/dashboard/MyClasses/:id/:id"
          element={<StudentDetails />}
        />
        <Route path="/dashboard/Attendance" element={<Attendance />} />
        <Route
          path="/dashboard/AcademicRecords"
          element={<AcademicRecords />}
        />
        <Route path="/dashboard/Lessons" element={<Lessons />} />
        <Route
          path="/dashboard/StudentValidation"
          element={<StudentValidation />}
        />
        <Route path="/dashboard/Reports" element={<Reports />} />
      </Route>
    </Routes>
  );
};
