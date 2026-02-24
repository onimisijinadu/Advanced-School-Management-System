import { useState } from 'react';

import { Outlet } from 'react-router-dom';

import { DashboardHeader } from './Dashboardheader';
import { SideNav } from './Sidebar';

export const Dashboardlayout = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const handleClick = () => {
    setIsSideNavOpen((prev) => !prev);
  };
  return (
    <div className="flex h-screen max-w-screen overflow-y-auto relative">
      {/* {dashboard side bar} */}

      <SideNav toggleSideNav={handleClick} isOpen={isSideNavOpen} />
      <div className="flex flex-1 flex-col">
        <DashboardHeader toggleSideNav={handleClick} isOpen={isSideNavOpen} />
        <main className="flex-1 overflow-y-auto p-6 sm:mb-0">{<Outlet />}</main>
      </div>
    </div>
  );
};
