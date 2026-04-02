import {
  ArrowRight,
  Bell,
  BookOpen,
  BookOpenIcon,
  Calendar,
  CheckCircle,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/cards';
import { DashboardCard } from '../../../components/DashboardCard';
import {
  Announcements,
  ScheduleData,
} from '../../../data/data';

export const DashboardHomePage = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
  });
  return (
    <>
      <div className="p-2 flex flex-col gap-3">
        <h1 className="font-semibold  text-2xl sm:text-3xl text-textColor3">
          Welcome Back, {storedUser.name}
        </h1>
        <p className="text-textColor2">
          Here's what's happening with your classes today
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Card>
            <CardContent>
              <div className="flex flex-1 justify-between items-center gap-2 bg-white w-full">
                <div>
                  <p className="text-textColor2 text-sm">Today's Classes</p>
                  <h2 className="font-semibold text-2xl">3</h2>
                </div>
                <div
                  className={`flex justify-center items-center text-blue-600 bg-blue-100 w-15 h-15 p-2 m-0 rounded-xl`}
                >
                  <Calendar />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex flex-1 justify-between items-center gap-2 bg-white w-full">
                <div>
                  <p className="text-textColor2 text-sm">Total Students</p>
                  <h2 className="font-semibold text-2xl">142</h2>
                </div>

                <div
                  className={`flex justify-center items-center text-green-600 bg-green-100 w-15 h-15 p-2 m-0 rounded-xl`}
                >
                  <Users />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex flex-1 justify-between items-center gap-2 bg-cardBackground w-full">
                <div>
                  <p className="text-textColor2 text-sm">Attendance Today</p>
                  <h2 className="font-semibold text-2xl">94%</h2>
                </div>
                <div
                  className={`flex justify-center items-center text-purple-600 bg-purple-100 w-15 h-15 p-2 m-0 rounded-xl`}
                >
                  <CheckCircle />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex flex-1 justify-between items-center gap-2 bg-cardBackground w-full">
                <div>
                  <p className="text-textColor2 text-sm">Active Classs</p>
                  <h2 className="font-semibold text-2xl">5</h2>
                </div>

                <div
                  className={`flex justify-center items-center text-orange-600 bg-orange-100 w-15 h-15 p-2 m-0 rounded-xl`}
                >
                  <BookOpen />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <section className="s-grid">
          <DashboardCard
            title={"Today's Schedule"}
            actionText={"View All"}
            btnIcon={ArrowRight}
          >
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
                      <p className="text-textColor2 text-lg mb-2.5">
                        {data.grade}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {data.time} {data.location}
                      </p>
                    </div>
                  </div>
                ),
            )}
          </DashboardCard>
          <DashboardCard title={"Announcements"} icons={Bell}>
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
          </DashboardCard>
        </section>
        <Card>
          <CardHeader>
            <CardTitle className={"font-semibold text-lg sm:text-xl"}>
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <Link
                to="/teacher/Attendance"
                className="flex gap-4 border border-gray-200 hover:bg-gray-200 p-4 rounded-lg font-semibold"
              >
                <CheckCircle />
                Mark Attendance
              </Link>
              <Link
                to="/teacher/AcademicRecords"
                className="flex gap-4 border border-gray-200 hover:bg-gray-200 p-4 rounded-lg font-semibold"
              >
                <BookOpen />
                Enter Grades
              </Link>
              <Link
                to="/teacher/Lessons"
                className="flex gap-4 border border-gray-200 hover:bg-gray-200 p-4 rounded-lg font-semibold"
              >
                <Calendar />
                Upload Lesson
              </Link>
              <Link
                to="/teacher/Reports"
                className="flex gap-4 border border-gray-200 hover:bg-gray-200 p-4 rounded-lg font-semibold"
              >
                <Users />
                Generate Report
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
