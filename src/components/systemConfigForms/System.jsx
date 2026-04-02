import { useState } from 'react';

import {
  Bell,
  Save,
} from 'lucide-react';

import { SystemNotifications } from '../../data/data';
import { Buttons } from '../Button';

export const System = () => {
  const [enabled, setEnabled] = useState({});

  const handleClick = (id, status) => {
    setEnabled((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <>
      <div className="flex flex-col gap-3 p-3 bg-cardBackground border-bordercolor rounded-lg my-4">
        <div className="flex gap-2 items-center my-3">
          <Bell className="w-5 h-5 text-blue-600" />
          <p className="text-textColor3 font-semibold text-sm sm:text-lg">
            Notification Settings
          </p>
        </div>
        {SystemNotifications.map((data) => {
          // Check the status for THIS specific item
          const isItemEnabled = !!enabled[data.label];

          return (
            <article className="flex justify-between items-center bg-black/5 rounded-lg p-4">
              <div>
                <p className="font-medium text-textColor3">{data.label}</p>
                <p className="text-sm text-textColor2">{data.description}</p>
              </div>
              <button
                onClick={() => handleClick(data.label)}
                className={`relative w-10 p-2.5 flex justify-center items-center rounded-xl  ${isItemEnabled ? "bg-black " : "bg-black/20"}`}
              >
                <span
                  className={`absolute transition-transform duration-300 ease-in-out ${isItemEnabled ? "right-1" : "left-1"}  w-3 h-3 rounded-full bg-white`}
                ></span>
              </button>
            </article>
          );
        })}
        <Buttons
          text={`Save Notifications Settings`}
          icon={<Save className="w-5 h-5" />}
          optionalClassName={`flex flex-row-reverse gap-3 items-center text-sm bg-primaryBlue hover:bg-primaryBlue2 border border-black/10 rounded-lg text-white font-medium py-1.5 px-2`}
        />
      </div>
      <div className="flex flex-col gap-3 py-3 px-5 bg-cardBackground border-bordercolor rounded-lg my-4">
        <p className="text-textColor3 font-semibold my-3 text-sm sm:text-lg">
          Notification Settings
        </p>
        <article className="flex flex-wrap sm:flex-nowrap gap-3 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="time_zone" className="font-medium text-sm">
              Time Zone
            </label>
            <select
              name="time_zone"
              id="time_zone"
              className="bg-black/10 p-2.5 font-medium text-sm appearance-none outline-black/5 rounded-lg"
            >
              <option value="ET">Eastern Time (ET)</option>
              <option value="CT">Central Time (CT)</option>
              <option value="PT">Pacific Time (PT)</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="date_format" className="font-medium text-sm">
              Date Format
            </label>
            <select
              name="date_format"
              id="date_format"
              className="bg-black/10 p-2.5 font-medium text-sm appearance-none outline-black/5 rounded-lg"
            >
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY/MM/DD">YYYY/MM/DD</option>
            </select>
          </div>
        </article>
        <Buttons
          text={`Save System Preferences`}
          icon={<Save className="w-5 h-5" />}
          optionalClassName={`flex flex-row-reverse gap-3 items-center text-sm bg-primaryBlue hover:bg-primaryBlue2 border border-black/10 rounded-lg text-white font-medium py-1.5 px-2`}
        />
      </div>
    </>
  );
};
