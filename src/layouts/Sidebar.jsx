import {
  ArrowRightFromLine,
  BookOpenIcon,
  XIcon,
} from 'lucide-react';
import {
  Link,
  useLocation,
} from 'react-router-dom';

import { useAuth } from '../context/useContext';
import { NavLinks } from '../data/data';

export const SideNav = ({ toggleSideNav, isOpen, rel }) => {
  const location = useLocation();
  const { user } = useAuth();

  const links = user.role == "teacher" ? NavLinks.teacher : NavLinks.admin;

  const handleClick = (linkTo) => {
    if (window.innerWidth < 1024) {
      toggleSideNav();
    }
  };
  return (
    <aside
      ref={rel}
      className={`fixed lg:static flex flex-col justify-between bg-white items-center border-r border-r-neutral-200 white w-72 h-dvh top-0 left-0 transform transition-transform duration-300 z-10  ${
        isOpen ? "translate-x-0 " : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="w-full">
        <div className="flex items-center text-black w-full m-0 h-max border-b border-b-neutral-200 p-4 pl-5">
          <div className="flex flex-1">
            <BookOpenIcon className="bg-blue-500 text-white p-2 m-0 w-10 h-10 rounded-xl " />
            <h1 className="text-md font-semibold text-center text-neutral-900 p-2">
              School System
            </h1>
          </div>
          <XIcon className={`block lg:hidden`} onClick={toggleSideNav} />
        </div>
        <nav className="flex flex-1 flex-col gap-1 w-70 pl-5 pt-2.5">
          {links.map((link) => {
            // Check if the current URL starts with this link's path
            // Using .startsWith handles sub-pages (e.g., /students/edit)
            const isActive =
              location.pathname === link.path ||
              location.pathname.startsWith(`${link.path}/`);

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-2  hover:bg-gray-100 p-2 rounded-2xl mr-2 font-semibold isActive? 'text-blue-600': "
             ${isActive ? "bg-blue-100 text-blue-700" : "text-gray-800"}`}
                onClick={() => handleClick(link.name)}
              >
                <link.icon />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex justify-end gap-2 text-gray-700 border-t border-t-neutral-200 p-3 w-full">
        <Link
          to="/"
          className="flex gap-2 hover:bg-gray-100 w-full p-3 rounded-xl font-semibold"
        >
          <ArrowRightFromLine /> Logout
        </Link>
      </div>
    </aside>
  );
};
