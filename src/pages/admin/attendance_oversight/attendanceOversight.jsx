import {
  AlertTriangle,
  Calendar,
  CheckCircle2,
  Download,
  TrendingUp,
  Users,
} from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Buttons } from '../../../components/Button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/cards';
import { useToast } from '../../../context/useContext';
import {
  absenteeAlerts,
  gradeData,
  weeklyData,
} from '../../../data/attendance';

export const AttendanceOversight = () => {
  const { showToast } = useToast();
  return (
    <>
      <div>
        {/* heading */}
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-textColor3">
              Attendance Oversight
            </h1>
            <p className="text-textColor mb-6 text-sm sm:text-lg">
              Monitor school-wide attendance patterns and trends.
            </p>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div className=" bg-gray-200 p-2 rounded-xl font-semibold mb-2.5 sm:mb-0 flex items-center text-sm pr-5">
              <select
                name="filter"
                id="filter"
                // value={filter}
                // onChange={handleFilter}
                className="cursor-pointer pl-2 bg-transparent text-black/80 outline-none appearance-none"
              >
                <option value="This Week">This Week</option>
                <option value="Last Week">Last Week</option>
                <option value="Last Month">Last Month</option>
              </select>
            </div>
            <Buttons
              text={"Export Report"}
              // action={}
              optionalClassName={
                "flex flex-row-reverse gap-2 py-1.5 px-3 bg-white hover:bg-black/5 text-black/90 border border-black/5 rounded-lg font-semibold text-sm whitespace-nowrap mb-3 sm:mb-0"
              }
              icon={<Download className="w-5 h-5" />}
              action={() => {
                showToast(
                  "Attendance report exported",
                  <CheckCircle2 className="w-5 h-5 text-white bg-black/90 rounded-full" />,
                );
              }}
            />
          </div>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          <Card>
            <CardContent>
              <div className="flex justify-between items-center gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-textColor">Total's Attendance</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    93.4%
                  </p>
                  <p className="text-sm whitespace-nowrap">
                    1,165/1,247 students
                  </p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-bold text-blue-600 p-2.5 rounded-xl ">
                  <Users className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-textColor">Pending Approval</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    8
                  </p>
                  <div className="text-green-500 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <p className="text-sm whitespace-nowrap">
                      +1.2% from last week
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-bold text-orange-400 p-2.5 rounded-xl ">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-textColor">New This Month</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    12
                  </p>
                  <p className="text-sm">Students absent</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-bold text-green-500 p-2.5 rounded-xl ">
                  <AlertTriangle className="w-5 h-5  " />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-textColor">Archived</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    34
                  </p>
                  <p className="text-sm whitespace-nowrap">75/79 present</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-bold text-purple-500 p-2.5 rounded-xl  ">
                  <Users className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* weekly attendance trend */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Attendance Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <LineChart data={weeklyData}>
                  <XAxis dataKey="day" stroke="#888888" fontSize={12} />
                  <YAxis stroke="#888888" fontSize={12} domain={[85, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type={"monotone"}
                    dataKey={"students"}
                    name="Students"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ fill: "#10b981", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type={"monotone"}
                    dataKey={"teachers"}
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ fill: "#3b82f6", r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Teachers"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Attendance Grade</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width={"100%"} height={300}>
                <CartesianGrid strokeDasharray={"3 3"} stroke="#f0f0f0" />
                <BarChart data={gradeData}>
                  <XAxis dataKey={"grade"} stroke="#888888" fontSize={12} />
                  <YAxis stroke="#888888" fontSize={12} />
                  <Tooltip />
                  <Bar
                    dataKey={"rate"}
                    fill="#3b82f6"
                    radius={[6, 6, 0, 0]}
                    name="Attendance %"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        {/* absentee pattern detection */}
        <div className="my-4">
          <Card>
            <CardHeader>
              <CardTitle className={`flex justify-between items-center`}>
                <div>
                  <p className="text-black/90 font-semibold">
                    Absentee Pattern Detection
                  </p>
                  <p className="text-black/60 text-sm">
                    Students with concerning attendance patterns
                  </p>
                </div>
                <div>
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {absenteeAlerts.map((data) => (
                <div className="flex justify-between items-center flex-wrap gap-4 my-2 bg-amber-50 border border-amber-300 px-2.5 py-4 rounded-lg">
                  <div>
                    <p className="font-semibold text-lg">{data.student}</p>
                    <p className="text-sm text-black/70">
                      {data.grade} • {data.consecutive} consecutive absences •{" "}
                      {data.percentage}% total attendance
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <Buttons
                      text={"Contact Parent"}
                      optionalClassName={`text-black/90 font-semibold text-sm p-2 bg-white border border-black/10 hover:bg-black/5 rounded-lg`}
                    />
                    <Buttons
                      text={"Contact Parent"}
                      optionalClassName={`text-white font-semibold text-sm p-2 bg-primaryBlue border border-blue-200 hover:bg-primaryBlue2 rounded-lg`}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
