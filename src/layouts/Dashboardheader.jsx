import { MenuIcon } from "lucide-react";

export const DashboardHeader = ({ toggleSideNav, isOpen, className }) => {
  return (
    <>
      <div
        className={`flex justify-between items-center text-black w-full m-0 h-max border-b border-b-neutral-200 p-3 bg-white ${className}`}
      >
        <div>
          <MenuIcon
            className={`block lg:hidden ${isOpen ? "hidden" : "block"}`}
            onClick={toggleSideNav}
          />
        </div>
        <div className="flex justify-center items-center">
          <article className="text-right ">
            <p className="font-bold text-right">Prof Sarah Johnson</p>
            <p className="text-gray-500 text-sm">Mathematics Teacher</p>
          </article>
          <div className="w-12 h-12 mx-3 bg-blue-500 flex justify-center align-middle rounded-full">
            <img
              src="./public/vite.svg"
              alt="Profile Image"
              className="w-fit rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};
