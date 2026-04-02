import {
  useEffect,
  useRef,
  useState,
} from 'react';

import { Outlet } from 'react-router-dom';

import { DashboardHeader } from './Dashboardheader';
import { SideNav } from './Sidebar';

export const Dashboardlayout = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const sideNavRef = useRef(null);

  const handleClick = () => {
    setIsSideNavOpen((prev) => !prev);
  };

  //for click outside the side nav to close it

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setIsSideNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex h-screen max-w-screen overflow-y-auto relative">
      {/* {dashboard side bar} */}

      <SideNav
        toggleSideNav={handleClick}
        isOpen={isSideNavOpen}
        rel={sideNavRef}
      />
      <div className="flex flex-1 flex-col">
        <DashboardHeader toggleSideNav={handleClick} isOpen={isSideNavOpen} />
        <main className="flex-1 overflow-y-auto p-6 sm:mb-0">{<Outlet />}</main>
      </div>
    </div>
  );
};
