import { useState } from 'react';

import {
  AcademicForms,
} from '../../../components/systemConfigForms/academicForm';
import {
  ClassConfig,
} from '../../../components/systemConfigForms/classConfigForm';
import {
  ProfileForm,
} from '../../../components/systemConfigForms/schoolProfileForm';
import { System } from '../../../components/systemConfigForms/System';
import { UserRole } from '../../../components/systemConfigForms/userRoleCard';

export const SystemConfig = () => {
  const [isActive, setIsActive] = useState("schoolProfile");

  const handleClick = (name) => {
    setIsActive(name);
  };

  return (
    <>
      <div>
        {/* heading */}
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center">
          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-textColor3">
              System Configuration
            </h1>
            <p className="text-textColor w-full mb-6 text-sm sm:text-lg">
              Manage school profile, academic settings, and system preferences.
            </p>
          </div>
        </div>
        {/* Navigations */}
        <div className="flex flex-wrap lg:flex-nowrap items-center text-center gap-x-3 gap-y-1 lg:bg-black/5 rounded-xl text-sm md:text-lg font-semibold whitespace-nowrap my-4">
          <div className="grid grid-cols-2 bg-black/5 lg:p-0 lg:bg-transparent gap-3 rounded-xl whitespace-nowrap w-full lg:w-94">
            <div
              onClick={() => handleClick("schoolProfile")}
              className={` px-3 m-1 text-center cursor-pointer ${isActive === "schoolProfile" ? "bg-white rounded-xl" : ""}`}
            >
              School Profile
            </div>
            <div
              onClick={() => handleClick("academic")}
              className={`px-3 m-1  text-center cursor-pointer ${isActive === "academic" ? "bg-white rounded-xl" : ""}`}
            >
              Academic
            </div>
          </div>
          <div className="grid grid-cols-2 bg-black/5 lg:p-0 lg:bg-transparent gap-3 rounded-xl whitespace-nowrap w-full lg:w-94">
            <div
              onClick={() => handleClick("classes")}
              className={`px-3 m-1  text-center cursor-pointer ${isActive === "classes" ? "bg-white rounded-xl" : ""}`}
            >
              Classes
            </div>
            <div
              onClick={() => handleClick("userRole")}
              className={`px-3 m-1  text-center cursor-pointer ${isActive === "userRole" ? "bg-white rounded-xl" : ""}`}
            >
              User Roles
            </div>
          </div>
          <div className="grid grid-cols-1 bg-black/5 lg:p-0 lg:bg-transparent rounded-xl whitespace-nowrap w-full lg:w-40">
            <div
              onClick={() => handleClick("system")}
              className={`px-3 m-1  text-center cursor-pointer ${isActive === "system" ? "bg-white rounded-xl" : ""}`}
            >
              System
            </div>
          </div>
        </div>
        {isActive === "schoolProfile" && <ProfileForm />}
        {isActive === "academic" && <AcademicForms />}
        {isActive === "classes" && <ClassConfig />}
        {isActive === "userRole" && <UserRole />}
        {isActive === "system" && <System />}
      </div>
    </>
  );
};
