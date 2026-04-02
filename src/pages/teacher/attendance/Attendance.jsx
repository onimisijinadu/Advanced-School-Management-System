import { useState } from "react";

import {
  Calendar,
  CheckCircle,
  CheckCircle2,
  Save,
  XCircle,
} from "lucide-react";

import { Buttons } from "../../../components/Button";
import { Card, CardContent } from "../../../components/cards";
import {
  TableBody,
  TableCard,
  TableHeader,
  Tables,
  TableTitle,
} from "../../../components/tables";
import { useToast } from "../../../context/useContext.jsx";
import { attendance, studentList } from "../../../data/data";

export const Attendance = () => {
  const { showToast } = useToast();

  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const getInantials = (text) => {
    const inatial = text
      .trim()
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

    return inatial;
  };
  const [isSelected, setIsSelected] = useState("");
  const [isAttendance, setIsAttendance] = useState({});

  const handleChange = (e) => {
    setIsSelected(e.target.value);
  };
  const handleClick = (id, status) => {
    setIsAttendance((prev) => ({
      ...prev,
      [id]: status,
    }));
  };

  const handleSave = () => {
    showToast(
      "Attendance saved successfully",
      <CheckCircle2 className="w-5 h-5 text-white bg-back/90 rounded-full" />,
    );
  };
  return (
    <>
      <header>
        <h1 className="font-semibold text-3xl text-textColor3">
          Attendance Management
        </h1>
        <p className="text-textColor2 text-lg">
          Mark and track student attendance
        </p>
      </header>
      <main>
        <section className="flex flex-col gap-4 text-lg bg-cardBackground py-4 px-7 mt-6 border border-bordercolor w-full rounded-xl">
          <p className="text-textColor2 text-lg">Select Class</p>
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="class">Class</label>
            <div className="flex flex-wrap sm:flex-nowrap gap-3">
              <select
                value={isSelected}
                name="class"
                id="student-class"
                onChange={handleChange}
                className="w-full bg-slate-100 px-3 py-2 outline-0 text-textColor2 border-none border-slate-200 rounded-xl hover:border-slate-200"
              >
                <option value="">Select a class</option>
                <option value="Grade 10-A-Mathematics">
                  Grade 10-A-Mathematics
                </option>
                <option value="Grade 11-B- Algebra">Grade 11-B- Algebra</option>
                <option value="Grade 12-A- Calculus">
                  Grade 12-A- Calculus
                </option>
              </select>
              <div className="flex min-w-fit gap-2 font-semibold text-slate-800 bg-blue-100 px-2  py-2 rounded-xl items-center justify-center">
                <Calendar className="text-blue-700" />
                <div>Today: {today}</div>
              </div>
            </div>
          </div>
        </section>
        {isSelected && (
          <section>
            <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
              <Card>
                <CardContent>
                  <div className="flex justify-between items-center min-w-fit ">
                    <div className="flex flex-col gap-2">
                      <p className="text-lg text-textColor2">Total Students</p>
                      <p className="font-bold text-4xl text-textColor2">8</p>
                    </div>
                    <CheckCircle className="bg-blue-200 text-blue-700 rounded-xl w-14 h-14 p-3" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex justify-between items-center min-w-fit">
                    <div className="flex flex-col gap-2">
                      <p className="text-lg text-textColor2">Present</p>
                      <p className="font-bold text-4xl text-textColor2">6</p>
                    </div>
                    <CheckCircle className="bg-green-200 text-green-700 rounded-xl w-14 h-14 p-3" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex justify-between items-center min-w-fit ">
                    <div className="flex flex-col gap-2">
                      <p className="text-lg text-textColor2">Absent</p>
                      <p className="font-bold text-4xl text-red-500">2</p>
                    </div>
                    <XCircle className="bg-red-200 text-red-700 rounded-xl w-14 h-14 p-3" />
                  </div>
                </CardContent>
              </Card>
            </article>
            <article className="flex flex-col bg-cardBackground p-5 gap-5 mb-5 py-5 rounded-xl border border-bordercolor">
              <div className="flex justify-between flex-wrap sm:flex-nowrap">
                <p className="font-semibold text-xl">Mark Attendance</p>
                <Buttons
                  text={"Save Attendance"}
                  action={handleSave}
                  optionalClassName={`bg-blue-500 text-white flex-row-reverse gap-2 py-1 px-3 border-green-100 rounded-lg font-semibold text-lg`}
                  icon={<Save className="w-4.5 h-4.5 font-bold" />}
                />
              </div>
              <div>
                {studentList.map((data) => (
                  <div key={data.studentId} className="cards-grid">
                    <div className="flex justify-between  items-center bg-gray-100 my-2 p-3.5 rounded-xl">
                      <div className="flex gap-4 ">
                        <span className="bg-blue-600 text-white font-semibold text-xl w-13 h-13 rounded-full flex justify-center items-center">
                          {/* <User /> */}
                          {getInantials(data.name)}
                        </span>
                        <div className="flex flex-col">
                          <p className="font-semibold text-slate-600 text-xl m-0">
                            {data.name}
                          </p>
                          <p className="text-slate-500 m-0">{data.studentId}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap sm:flex-nowrap gap-2">
                        <Buttons
                          text={"Present"}
                          action={() => handleClick(data.studentId, "Active")}
                          optionalClassName={`${
                            isAttendance[data.studentId] === "Active"
                              ? "bg-green-500"
                              : "bg-white text-slate-950 border border-slate-300"
                          } text-slate-100 flex-row-reverse gap-2 py-1 px-3 border-green-100 rounded-xl font-semibold text-lg`}
                          icon={
                            <CheckCircle className="w-4.5 h-4.5 font-bold" />
                          }
                        />
                        <Buttons
                          text={"Absent"}
                          action={() => handleClick(data.studentId, "Inactive")}
                          optionalClassName={` ${
                            isAttendance[data.studentId] === "Inactive"
                              ? "bg-red-500"
                              : "bg-white text-slate-950 border border-slate-300"
                          } text-slate-100 flex-row-reverse gap-2 py-1 px-3 border-green-100 rounded-xl font-semibold text-lg`}
                          icon={<XCircle className="w-4.5 h-4.5 font-bold" />}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <Tables>
              <TableTitle>
                <p className="text-lg font-semibold text-black/90">
                  Attendance Summary
                </p>
              </TableTitle>
              <TableCard>
                <TableHeader>
                  <tr className=" border-b border-slate-200">
                    <th className="p-3 text-textColor2">Date</th>
                    <th className="p-3 text-textColor2">Present</th>
                    <th className="p-3 text-textColor2">Absent</th>
                    <th className="p-3 text-textColor2">Percentage</th>
                  </tr>
                </TableHeader>
                <TableBody>
                  {attendance.map((item) => (
                    <tr className=" border-b border-slate-200 last:border-b-0">
                      <td className="py-3 text-textColor2 font-semibold">
                        {item.date}
                      </td>
                      <td className="py-3 pl-4 text-green-400">
                        {item.present}
                      </td>
                      <td className="py-3 pl-4 text-red-400">{item.absent}</td>
                      <td className="py-3 pl-4 font-semibold">
                        {item.percentage}
                      </td>
                    </tr>
                  ))}
                </TableBody>
              </TableCard>
            </Tables>
          </section>
        )}
      </main>
    </>
  );
};
