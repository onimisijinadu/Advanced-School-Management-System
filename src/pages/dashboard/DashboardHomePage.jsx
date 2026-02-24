import {
  ArrowRight,
  Bell,
  BookOpenIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import {
  Announcements,
  CardData,
  QuickActionLinks,
  ScheduleData,
} from '../../data/data';

export const DashboardHomePage = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
  });
  return (
    <>
      <div className="p-2">
        <h1 className="font-semibold text-3xl">Welcome Back, Prof. Johnson</h1>
        <p className="text-gray-500">
          Here's what's happening with your classes today
        </p>
        <div className="card-grid items-center mt-5 ">
          {CardData.map((data) => (
            <div
              key={data.id}
              className="flex flex-1 justify-between items-center rounded-xl border border-gray-300 gap-2 p-4 bg-white w-full"
            >
              <div>
                <p className="text-gray-500 text-sm">{data.decription}</p>
                <h2 className="font-semibold text-2xl">{data.value}</h2>
              </div>
              <div
                className={`flex justify-center items-center ${data.iconStyle}`}
              >
                <data.icon />
              </div>
            </div>
          ))}
        </div>
        <section className="s-grid">
          <article className="flex flex-col bg-white gap-5 rounded-xl border border-gray-300 p-5 my-6 h-max">
            <div className="flex justify-between items-center ">
              <h2 className="font-semibold text-lg">Today's Schedule</h2>
              <div className="flex justify-center items-center gap-2 p-2 rounded-xl hover:bg-gray-300 font-semibold text-gray-900">
                <p>View All</p>
                <span>
                  <ArrowRight className="text-xl text-gray-500" />
                </span>
              </div>
            </div>

            {ScheduleData.map(
              (data) =>
                data.scheduleDateAndTime.includes(today) && (
                  <div
                    key={data.subject}
                    className="flex gap-2 text-slate-900 bg-gray-100 hover:bg-gray-200 rounded-xl p-4"
                  >
                    <BookOpenIcon className="text-white bg-blue-500 w-10 h-10 p-2 m-0 rounded-xl" />
                    <div>
                      <h3 className="font-semibold">{data.subject}</h3>
                      <p className="text-gray-500 text-lg mb-2.5">
                        {data.grade}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {data.time} {data.location}
                      </p>
                    </div>
                  </div>
                ),
            )}
          </article>
          <article className="flex flex-col h-max  gap-3 bg-white rounded-xl border border-gray-300 p-5 my-6">
            <div className="flex justify-between items-center mb-3">
              <p className="font-semibold text-lg">Announcements</p>
              <Bell className="text-gray-500" />
            </div>
            {Announcements.map((data) => (
              <div
                key={data.topic}
                className="flex justify-between p-3.5 border border-gray-300 hover:border-blue-300 rounded-xl"
              >
                <div>
                  <p className="font-semibold text-lg">{data.topic}</p>
                  <p className="text-slate-500">{data.date}</p>
                </div>
                <div>
                  <p
                    className={`${
                      data.tagLine === "Important"
                        ? "bg-red-200 text-red-700 font-semibold"
                        : ""
                    } ${
                      data.tagLine === "Academic"
                        ? "bg-blue-200 text-blue-700 "
                        : ""
                    } ${
                      data.tagLine === "Event"
                        ? "bg-green-200 text-green-700 "
                        : ""
                    } px-2 rounded-3xl text-sm`}
                  >
                    {data.tagLine}
                  </p>
                </div>
              </div>
            ))}
          </article>
        </section>
        <footer className="flex flex-col gap-9 bg-white p-5 border border-gray-300 rounded-xl">
          <div>
            <p className="font-semibold text-lg">Quick Actions</p>
          </div>
          <div className="card-grid">
            {QuickActionLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex gap-4 border border-gray-200 hover:bg-gray-200 p-4 rounded-lg font-semibold"
              >
                <link.icon />
                {link.name}
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
};
