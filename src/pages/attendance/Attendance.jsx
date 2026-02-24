import { useState } from 'react';

import {
  Calendar,
  CheckCircle,
  Save,
  XCircle,
} from 'lucide-react';

import { Buttons } from '../../components/Button';
import { Tables } from '../../components/tables';
import {
  attendance,
  studentList,
} from '../../data/data';

export const Attendance = () => {
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
  return (
    <>
      <header>
        <h1 className="font-semibold text-3xl text-gray-800">
          Attendance Management
        </h1>
        <p className="text-slate-400 text-lg">
          Mark and track student attendance
        </p>
      </header>
      <main>
        <section className="flex flex-col gap-4 text-lg bg-white py-4 px-7 mt-6 border border-slate-300 w-full rounded-xl">
          <p className="text-slate-800 font-semibold text-lg">Select Class</p>
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="class">Class</label>
            <div className="flex flex-wrap sm:flex-nowrap gap-3">
              <select
                value={isSelected}
                name="class"
                id="student-class"
                onChange={handleChange}
                className="w-full bg-slate-100 px-3 py-2 outline-0 text-slate-700 border-none border-slate-200 rounded-xl hover:border-slate-200"
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
            <article className="card-grid gap-5 my-5">
              <div className="flex justify-between items-center bg-white p-6 min-w-fit rounded-xl border border-slate-300">
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-slate-700">Total Students</p>
                  <p className="font-bold text-4xl text-gray-800">8</p>
                </div>
                <CheckCircle className="bg-blue-200 text-blue-700 rounded-xl w-14 h-14 p-3" />
              </div>
              <div className="flex justify-between items-center bg-white p-6 min-w-fit rounded-xl border border-slate-300">
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-slate-700">Present</p>
                  <p className="font-bold text-4xl text-gray-800">6</p>
                </div>
                <CheckCircle className="bg-green-200 text-green-700 rounded-xl w-14 h-14 p-3" />
              </div>
              <div className="flex justify-between items-center bg-white p-6 min-w-fit rounded-xl border border-slate-300">
                <div className="flex flex-col gap-2">
                  <p className="text-lg text-slate-700">Absent</p>
                  <p className="font-bold text-4xl text-red-500">2</p>
                </div>
                <XCircle className="bg-red-200 text-red-700 rounded-xl w-14 h-14 p-3" />
              </div>
            </article>
            <article className="flex flex-col bg-white p-5 gap-5 mb-5 py-5 rounded-xl border border-slate-300">
              <div className="flex justify-between flex-wrap sm:flex-nowrap">
                <p className="font-semibold text-xl">Mark Attendance</p>
                <Buttons
                  text={"Save Attendance"}
                  action={() => handleClick(data.studentId, "Inactive")}
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
            <Tables
              desc={"Attendance Summary"}
              tableHeads={
                <>
                  <tr className=" border-b border-slate-200">
                    <th className="p-3 text-slate-700">Date</th>
                    <th className="p-3 text-slate-700">Present</th>
                    <th className="p-3 text-slate-700">Absent</th>
                    <th className="p-3 text-slate-700">Percentage</th>
                  </tr>
                </>
              }
              tableBody={attendance.map((item) => (
                <tr className=" border-b border-slate-200">
                  <td className="py-3 text-slate-700 font-semibold">
                    {item.date}
                  </td>
                  <td className="py-3 pl-4 text-green-400">{item.present}</td>
                  <td className="py-3 pl-4 text-red-400">{item.absent}</td>
                  <td className="py-3 pl-4 font-semibold">{item.percentage}</td>
                </tr>
              ))}
            />
            {/* <div className=" w-full bg-white  flex flex-col gap-5 py-5 px-10 my-9 rounded-xl">
              <p className="font-semibold text-xl"></p>
              <div className="w-full card-grid overflow-x-auto">
                <table className="text-left  table-auto min-w-full">
                  <thead>
                    <tr className=" border-b border-slate-200"></tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div> */}
          </section>
        )}
      </main>
    </>
  );
};
