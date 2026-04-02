import { useState } from 'react';

import {
  AlertCircle,
  Award,
  Calendar,
  CheckCircle,
  CheckCircle2,
  FileCheck,
  GraduationCap,
  Settings,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Bar,
  BarChart,
  CartesianGrid,
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
import {
  TableBody,
  TableCard,
  TableHeader,
  Tables,
  TableTitle,
} from '../../../components/tables';
import { useToast } from '../../../context/useContext';
import {
  AcademicData,
  Results,
} from '../../../data/academicData';

export const AcademicAdmin = () => {
  const { showToast } = useToast();

  const [resultStatus, setResultStatus] = useState(Results);
  // function to handle approval of results and update the status
  const handleClick = (id, examName) => {
    setResultStatus((prevResult) =>
      prevResult.map((result) =>
        result.id === id ? { ...result, status: "Approved" } : result,
      ),
    );
    showToast(
      `${examName} approved`,
      <CheckCircle2 className="w-5 h-5 text-white bg-black/90 rounded-full" />,
    );
  };

  // function to filter out results that are not approved

  const filteredResult = resultStatus.filter(
    (data) => data.status != "Approved",
  );
  // function to handle approval of all results at once

  const handleApproveAll = () => {
    setResultStatus((prev) =>
      prev.map((item) => ({ ...item, status: "Approved" })),
    );
    showToast(
      "All results approved successfully",
      <CheckCircle2 className="w-5 h-5 text-white  bg-black/90 rounded-full" />,
    );
  };
  return (
    <>
      <div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-textColor3">
            Academic Administration
          </h1>
          <p className="text-textColor mb-6 text-sm sm:text-lg">
            Manage grading system, approve results, and monitor academic
            performance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 my-4">
          <Card>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Overall Average</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    83.4%
                  </p>
                </div>
                <GraduationCap className="w-12 h-12 bg-blue-100 text-bold text-blue-600 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Pass Rate</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    94.81%
                  </p>
                </div>
                <CheckCircle className="w-12 h-12 bg-green-100 text-bold text-green-600 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center gap-2">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Pending Approval</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    8
                  </p>
                </div>
                <FileCheck className="w-12 h-12 bg-purple-100 text-bold text-purple-500 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Honor Students</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    156
                  </p>
                </div>
                <Award className="w-12 h-12 bg-orange-100 text-bold text-orange-500 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Chart */}
        <div className="my-4">
          <Card>
            <CardHeader>
              <CardTitle
                className={`font-semibold text-textColor3 pl-2 text-sm sm:text-lg`}
              >
                Academic Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={360}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <BarChart data={AcademicData}>
                  <XAxis dataKey="grade" fontSize={12} />
                  <YAxis stroke="#888888" fontSize={12} />
                  <Tooltip />
                  <Bar
                    dataKey="average"
                    fill="#3b82f6"
                    radius={[4, 4, 0, 0]}
                    name="Average Score"
                  />
                  <Bar
                    dataKey="pass"
                    fill="#10b981"
                    radius={[4, 4, 0, 0]}
                    name="Pass Rate %"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        {/* Table */}
        <div className="my-4">
          <Tables>
            <TableTitle>
              <div className="flex justify-between items-center flex-wrap gap-3">
                <div>
                  <p className="text-black/90 font-semibold text-sm sm:text-lg">
                    Pending Results Approval
                  </p>
                </div>
                <div className="w-full sm:w-30">
                  <Buttons
                    text={"Approve All"}
                    action={handleApproveAll}
                    fullWidth={"w-full"}
                    optionalClassName={`text-textColor3  w-full font-semibold hover:bg-gray-300 bg-background border border-gray-200 rounded-lg px-3 py-1.5 text-sm`}
                  />
                </div>
              </div>
            </TableTitle>
            <TableCard>
              <TableHeader>
                <tr className="border-b border-b-gray-200 text-sm">
                  <th className="p-3">Examination</th>
                  <th className="p-3">Teacher</th>
                  <th className="p-3">Submitted On</th>
                  <th className="p-3">Students</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </TableHeader>
              <TableBody>
                {filteredResult.map((data) => (
                  <tr
                    key={data.id}
                    className="whitespace-nowrap border-b border-b-gray-200 last:border-b-0 text-sm"
                  >
                    <td className="py-3 px-4 font-semibold">-{data.exam}</td>
                    <td className="py-3 px-4">{data.teacher}</td>
                    <td className="py-3 px-4">{data.submitted}</td>
                    <td className="py-3 px-4">{data.students}</td>
                    <td className="py-3 px-4">{data.status}</td>
                    <td className="py-3 px-4">
                      <div className="flex justify-between items-center gap-2">
                        <Buttons
                          text={"Review"}
                          action={() => {
                            showToast(
                              "Viewing result details",
                              <AlertCircle className="w-5 h-5 text-white  bg-black/90 rounded-full" />,
                            );
                          }}
                          optionalClassName={`text-textColor3 font-semibold hover:bg-gray-300 bg-background border border-gray-200 rounded-lg px-3 py-1.5 text-sm`}
                        />
                        <Buttons
                          text={"Approve"}
                          action={() => handleClick(data.id, data.exam)}
                          optionalClassName={`text-white font-semibold hover:bg:primaryBlue2 bg-primaryBlue border border-gray-200 rounded-lg px-3 py-1.5 text-sm`}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </TableBody>
            </TableCard>
          </Tables>
        </div>
        {/* Grading System Configuration */}
        <div className="my-4">
          <Card>
            <CardHeader>
              <CardTitle className={`text-black/90 font-semibold`}>
                Grading System Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className={`flex flex-col items-center gap-3`}>
              <div className="flex justify-between items-center bg-black/5 rounded-lg w-full py-2 px-4">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Grade A</p>
                  <p className="text-sm">90%-100%</p>
                </div>
                <Link to="/admin/settings">
                  <Settings className="w-8 h-8 pointer p-2 hover:bg-black/20 rounded-full" />
                </Link>
              </div>
              <div className="flex justify-between items-center bg-black/5 rounded-lg w-full py-2 px-4">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Grade B</p>
                  <p className="text-sm">80%-89%</p>
                </div>
                <Link to="/admin/settings">
                  <Settings className="w-8 h-8 pointer p-2 hover:bg-black/20 rounded-full" />
                </Link>
              </div>
              <div className="flex justify-between items-center bg-black/5 rounded-lg w-full py-2 px-4">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Grade C</p>
                  <p className="text-sm">70%-79%</p>
                </div>
                <Link to="/admin/settings">
                  <Settings className="w-8 h-8 pointer p-2 hover:bg-black/20 rounded-full" />
                </Link>
              </div>
              <div className="flex justify-between items-center bg-black/5 rounded-lg w-full py-2 px-4">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Grade D</p>
                  <p className="text-sm">60%-69%</p>
                </div>
                <Link to="/admin/settings">
                  <Settings className="w-8 h-8 pointer p-2 hover:bg-black/20 rounded-full" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Academic Calender */}
        <div className="my-4">
          <Card>
            <CardHeader>
              <CardTitle className={`text-black/90 font-semibold`}>
                Academic Calender
              </CardTitle>
            </CardHeader>
            <CardContent className={`flex flex-col text-sm items-center gap-3`}>
              <div className="flex items-center gap-3 bg-black/5 rounded-lg w-full py-2 px-4">
                <Calendar className="w-5 h-5 text-primaryBlue" />
                <div className="flex flex-col">
                  <p className="font-semibold">Mid-Term Examinations</p>
                  <p className="text-sm">March 20-27, 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/5 rounded-lg w-full py-2 px-4">
                <Calendar className="w-5 h-5 text-primaryBlue" />
                <div className="flex flex-col">
                  <p className="font-semibold">Final Examinations</p>
                  <p className="text-sm">May 15-25, 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/5 rounded-lg w-full py-2 px-4">
                <Calendar className="w-5 h-5 text-primaryBlue" />
                <div className="flex flex-col">
                  <p className="font-semibold">Results Publication</p>
                  <p className="text-sm">June 5, 2026</p>
                </div>
              </div>
              <Link to="/admin/settings" className="w-full">
                <Buttons
                  text={"Manage Academic Calender"}
                  icon={<Settings className="w-4 h-4 text-white" />}
                  optionalClassName={`flex flex-row-reverse gap-4 text-white font-semibold hover:bg-primaryBlue2 bg-primaryBlue border border-gray-200 rounded-lg px-3 py-2 text-sm w-full`}
                  fullWidth={"w-full"}
                />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
