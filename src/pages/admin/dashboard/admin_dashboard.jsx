import {
  Activity,
  Award,
  Bell,
  Calendar,
  ChartColumn,
  TrendingUp,
  UserCog,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/cards';
import { DashboardCard } from '../../../components/DashboardCard';
import { attendanceData } from '../../../data/attendance';
import {
  announcements,
  recentActivities,
} from '../../../data/carddata';
import { performanceData } from '../../../data/performance';

export const AdminDashboard = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const data = performanceData;
  const lineData = attendanceData;
  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold text-textColor3  text-2xl sm:text-3xl">
          Admin Dashboard
        </h1>
        <p className=" text-xl text-textColor">
          Welcome Back, {storedUser.name}. Here's your school overview
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <Card>
            <CardContent>
              <div className="flex flex-1 justify-between items-center ">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 text-sm">Total Students</p>
                  <h2 className="font-semibold text-2xl">1,247</h2>
                  <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +12 this month
                  </p>
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
              <div className="flex flex-1 justify-between items-center ">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 text-sm">Total Teachers</p>
                  <h2 className="font-semibold text-2xl">78</h2>
                  <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +3 this month
                  </p>
                </div>
                <div
                  className={`flex justify-center items-center text-blue-600 bg-blue-100 w-15 h-15 p-2 m-0 rounded-xl`}
                >
                  <UserCog />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex flex-1 justify-between items-center ">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 text-sm">Daily Attendance</p>
                  <h2 className="font-semibold text-2xl">93.4%</h2>
                  <p className="text-xs mt-1 flex items-center gap-1">
                    1,165 present today
                  </p>
                </div>
                <div
                  className={`flex justify-center items-center text-purple-600 bg-purple-100 w-15 h-15 p-1 m-0 rounded-xl`}
                >
                  <Activity />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex flex-1 justify-between items-center ">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 text-sm">Academic Average</p>
                  <h2 className="font-semibold text-2xl">83.4%</h2>
                  <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +2.1% from last term
                  </p>
                </div>
                <div
                  className={`flex justify-center items-center text-orange-600 bg-orange-100 w-13 h-13 p-1 m-0 rounded-xl`}
                >
                  <Award />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Charts */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Card>
            <CardHeader>
              <CardTitle className="font-semibold text-lg">
                Weekly Attendance Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" stroke="#888888" fontSize={12} />
                  <YAxis stroke="#888888" fontSize={12} domain={[85, 100]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="rate"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ fill: "#3b82f6", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-semibold text-lg">
                Academic Performance by Grade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <BarChart data={data}>
                  <XAxis dataKey="grade" fontSize={12} />
                  <YAxis fontSize={12} stroke="#888888" />
                  <Tooltip />
                  <Bar dataKey="average" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>
        {/* Annoucements and Shedules */}
        <section className="s-grid">
          <DashboardCard title={"Recent System Activity"} icons={Activity}>
            {recentActivities.map((data) => (
              <div
                key={data.id}
                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                    data.type === "success"
                      ? "bg-green-500"
                      : data.type === "warning"
                        ? "bg-yellow-500"
                        : data.type === "event"
                          ? "bg-blue-500"
                          : "bg-purple-500"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {data.action}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {data.user} • {data.time}
                  </p>
                </div>
              </div>
            ))}
          </DashboardCard>
          <DashboardCard title={"Important Announcements"} icons={Bell}>
            {announcements.map((data) => (
              <div
                key={data.id}
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{data.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {data.description}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full shrink-0 ${
                      data.priority === "high"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {data.priority === "high" ? "High" : "Medium"}
                  </span>
                </div>
              </div>
            ))}
          </DashboardCard>
        </section>

        {/* Quick Actions */}

        <Card>
          <CardHeader>
            <CardTitle className={"font-semibold text-lg sm:text-xl"}>
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <Link
                to="/admin/students"
                className="flex gap-4 border border-gray-200 hover:bg-gray-200 p-4 rounded-lg font-semibold"
              >
                <Users />
                Manage Students
              </Link>
              <Link
                to="/admin/teachers"
                className="flex gap-4 border border-gray-200 hover:bg-gray-200 p-4 rounded-lg font-semibold"
              >
                <UserCog />
                Manage Teachers
              </Link>
              <Link
                to="/admin/reports"
                className="flex gap-4 border border-gray-200 hover:bg-gray-200 p-4 rounded-lg font-semibold"
              >
                <ChartColumn />
                Generate Report
              </Link>
              <Link
                to="/admin/settings"
                className="flex gap-4 border border-gray-200 hover:bg-gray-200 p-4 rounded-lg font-semibold"
              >
                <Calendar />
                System Settings
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
