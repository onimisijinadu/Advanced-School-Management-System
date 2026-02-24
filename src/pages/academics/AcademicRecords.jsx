import { useState } from 'react';

import {
  Save,
  TrendingUp,
} from 'lucide-react';

import { Buttons } from '../../components/Button';
import { Message } from '../../components/message';
import { Tables } from '../../components/tables';
import {
  gradeScale,
  studetGrade,
} from '../../data/data';

export const AcademicRecords = () => {
  const [studentData, setStudentData] = useState({
    studentClass: "",
    studentName: "",
    testScore: "",
    examScore: "",
  });

  const [message, setMessage] = useState(false);

  const handleClick = () => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  };
  const showGrade =
    studentData.studentClass !== "" &&
    studentData.studentName !== "" &&
    studentData.testScore !== "" &&
    studentData.examScore !== "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const test = Number(studentData.testScore);
  const exam = Number(studentData.examScore);

  const total = test + exam;
  // const average = total / 2;
  const percentage = (total / 100) * 100;

  let studentGrade = "";
  if (percentage >= 70) {
    studentGrade = "A";
  } else if (percentage >= 60) {
    studentGrade = "B";
  } else if (percentage >= 50) {
    studentGrade = "C";
  } else if (percentage >= 45) {
    studentGrade = "D";
  } else if (percentage >= 40) {
    studentGrade = "E";
  } else {
    studentGrade = "F";
  }

  return (
    <>
      <div className="min-w-fit">
        <div>
          <p className="font-semibold text-2xl text-slate-900">
            Academic Records
          </p>
          <p className="text-lg text-slate-500">
            Enter scores and view student performance
          </p>
        </div>
        <div className="bg-white border border-slate-300 p-4 my-5 flex gap-3 flex-col rounded-xl">
          <p className="font-semibold text-lg text-slate-700">
            Enter Student Scores
          </p>
          <article className="student-grid gap-x-12 gap-y-3">
            <div className="flex-col flex gap-1 w-full">
              <label
                htmlFor="studentClass"
                className="font-semibold text-md text-slate-900"
              >
                Select Class
              </label>
              <select
                name="studentClass"
                id="studentClass"
                onChange={handleChange}
                className="bg-gray-100 border-none outline-0 p-1.5 px-4 text-slate-500 font-semibold rounded-xl"
              >
                <option
                  value="Choose a class "
                  className="border-none rounded-lg"
                >
                  Choose a class
                </option>
                <option
                  value="Grade 10-A-Mathematics"
                  className="text-slate-800 bg-white border-none rounded-lg"
                >
                  Grade 10-A-Mathematics
                </option>
                <option
                  value="Grade 11-B- Algebra"
                  className="text-slate-800 bg-white border-none rounded-lg"
                >
                  Grade 11-B- Algebra
                </option>
                <option
                  value="Grade 12-A- Calculus"
                  className="text-slate-800 bg-white border-none rounded-lg"
                >
                  Grade 12-A- Calculus
                </option>
              </select>
            </div>
            <div className="flex-col flex gap-1 w-full">
              <label
                htmlFor="student"
                className="font-semibold text-md text-slate-900"
              >
                Select Student
              </label>
              <select
                name="studentName"
                id="studentName"
                onChange={handleChange}
                className="bg-gray-100 border-none outline-0 p-1.5 px-4 text-slate-500 font-semibold rounded-xl"
              >
                <option value="Choose a class">Choose a student</option>
                <option value="Emma Wilson" className="text-slate-800 bg-white">
                  Emma Wilson
                </option>
                <option value="James Brown" className="text-slate-800 bg-white">
                  James Brown
                </option>
                <option
                  value="Olivia Davis"
                  className="text-slate-800 bg-white"
                >
                  Olivia Davis
                </option>
              </select>
            </div>
            <div className="flex-col flex gap-1 w-full">
              <label
                htmlFor="test-score"
                className="font-semibold text-md text-slate-900"
              >
                Test Score (out of 30)
              </label>
              <input
                type="number"
                name="testScore"
                id="testScore"
                placeholder="Enter test score"
                value={studentData.testScore}
                onChange={handleChange}
                className="bg-gray-100 border-none outline-0 p-1.5 px-4 text-slate-500 font-semibold rounded-xl"
              />
            </div>
            <div className="flex-col flex gap-1 w-full">
              <label
                htmlFor="test-score"
                className="font-semibold text-md text-slate-900"
              >
                Exam Score (out of 70)
              </label>
              <input
                type="number"
                name="examScore"
                id="examScore"
                value={studentData.examScore}
                placeholder="Enter exam score"
                onChange={handleChange}
                className="bg-gray-100 border-none outline-0 p-1.5 px-4 text-slate-500 font-semibold rounded-xl"
              />
            </div>
          </article>
          {showGrade && (
            <div className="p-4 flex justify-between bg-blue-50 rounded-xl text-slate-500">
              <div className="flex flex-col gap-2">
                <p>Calculated Grade</p>
                <p className="font-semibold text-2xl text-slate-900">
                  {studentGrade}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Average Score</p>
                <p className="font-semibold text-2xl text-slate-900">
                  {percentage.toFixed(1)}%
                </p>
              </div>
            </div>
          )}
          <Buttons
            text={"Save Score"}
            action={handleClick}
            optionalClassName={`bg-blue-500 flex flex-row-reverse text-white py-1 px-3 text-lg font-semibold gap-3  rounded-lg my-3 hover:bg-blue-700 cursor-pointer`}
            icon={<Save className="w-4 h-4" />}
          />
          {message && (
            <Message
              text={"Saved successfully!"}
              optionalClassName={`text-green-700 bg-green-100`}
            />
          )}
        </div>
        <div className="bg-white border border-slate-300 p-4 my-5 flex gap-3 flex-col rounded-xl">
          <p className="text-xl font-semibold text-slate-900 py-3">
            Grading Scale
          </p>
          <div className="grade-grid">
            {gradeScale.map((data) => (
              <div className="flex flex-col items-center gap-1 bg-slate-100 rounded-xl py-2">
                <p className="font-semibold text-slate-900 text-lg">
                  {data.grade}
                </p>
                <p className="text-slate-600">{data.percentage}</p>
              </div>
            ))}
          </div>
        </div>
        <Tables
          desc={"Student Performance Overview"}
          desc_2={
            <>
              <p className=" flex items-center gap-2 text-lg text-slate-400 ">
                <TrendingUp className="text-slate-400 w-5 h-5" />
                Class Average: 90.6%
              </p>
            </>
          }
          tableHeads={
            <>
              <tr className=" border-b border-slate-200">
                <th className="p-3 text-slate-700">Student ID</th>
                <th className="p-3 text-slate-700">Name</th>
                <th className="p-3 text-slate-700">Test Score</th>
                <th className="p-3 text-slate-700">Exam Score</th>
                <th className="p-3 text-slate-700">Total</th>
                <th className="p-3 text-slate-700">Average</th>
                <th className="p-3 text-slate-700">Grade</th>
              </tr>
            </>
          }
          tableBody={studetGrade.map((item) => (
            <tr className=" border-b border-slate-200" key={item.studentId}>
              <td className="py-3 text-slate-700 font-semibold">
                {item.studentId}
              </td>
              <td className="py-3 pl-4 ">{item.name}</td>
              <td className="py-3 pl-4 ">{item.test}</td>
              <td className="py-3 pl-4">{item.exam}</td>
              <td className="py-3 pl-4">{item.total}</td>
              <td className="py-3 pl-4">{item.average}</td>
              <td className="py-3 pl-4">
                <p
                  className={` ${
                    item.grade.includes("A")
                      ? "bg-green-100 text-green-600"
                      : item.grade.includes("B")
                        ? "bg-blue-100 text-blue-600"
                        : item.grade.includes("C")
                          ? "bg-purple-100 text-purple-600"
                          : item.grade.includes("D")
                            ? "bg-yellow-100 text-yellow-600"
                            : item.grade.includes("E")
                              ? "bg-orange-100 text-orange-600"
                              : item.grade.includes("F")
                                ? "bg-red-100 text-red-600"
                                : ""
                  } py-1 px-2 w-fit rounded-full font-semibold`}
                >
                  {item.grade}
                </p>
              </td>
            </tr>
          ))}
        />
        <article className="card-grid">
          <div className="flex flex-col items-center text-center gap-1 text-md text-slate-700 p-5 border bg-white border-slate-300 rounded-xl">
            <p>Highest Score</p>
            <p className="font-semibold  text-2xl text-green-700">96.5%</p>
            <p>Olivia Davis</p>
          </div>
          <div className="flex flex-col items-center text-center gap-1 text-md text-slate-700 p-5 border bg-white border-slate-300 rounded-xl">
            <p>Class Average</p>
            <p className="font-semibold  text-2xl text-blue-700">90.6%</p>
            <p>Excellent Performance</p>
          </div>
          <div className="flex flex-col items-center text-center gap-1 text-md text-slate-700 p-5 border bg-white border-slate-300 rounded-xl">
            <p>Pass Rate</p>
            <p className="font-semibold  text-2xl text-purple-700">100%</p>
            <p>All student passed</p>
          </div>
          <div className="flex flex-col items-center text-center gap-1 text-md text-slate-700 p-5 border bg-white border-slate-300 rounded-xl">
            <p>A grade student</p>
            <p className="font-semibold text-2xl text-green-700">3</p>
            <p>75% of class</p>
          </div>
        </article>
      </div>
    </>
  );
};
