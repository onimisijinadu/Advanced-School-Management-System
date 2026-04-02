import { useState } from 'react';

import {
  CheckCircle2,
  Save,
  TrendingUp,
} from 'lucide-react';

import { Buttons } from '../../../components/Button';
import {
  Card,
  CardContent,
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
  gradeScale,
  studetGrade,
} from '../../../data/data';

export const AcademicRecords = () => {
  const { showToast } = useToast();

  const [studentData, setStudentData] = useState({
    studentClass: "",
    studentName: "",
    testScore: "",
    examScore: "",
  });

  const handleClick = () => {
    showToast(
      "Saved Successfully!",
      <CheckCircle2 className="w-5 h-5 text-white bg-black/90 rounded-full" />,
    );
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
          <p className="font-semibold text-2xl text-textColor3">
            Academic Records
          </p>
          <p className="text-lg text-textColor2">
            Enter scores and view student performance
          </p>
        </div>
        <div className="bg-cardBackground border border-bordercolor p-4 my-5 flex gap-3 flex-col rounded-xl">
          <p className="font-semibold text-lg text-black/60">
            Enter Student Scores
          </p>
          <article className="student-grid gap-x-12 gap-y-3">
            <div className="flex-col flex gap-1 w-full">
              <label
                htmlFor="studentClass"
                className="font-semibold text-md text-black/90"
              >
                Select Class
              </label>
              <select
                name="studentClass"
                id="studentClass"
                onChange={handleChange}
                className="bg-gray-100 border-none outline-0 p-1.5 px-4 text-black/50 font-semibold rounded-xl"
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
                className="font-semibold text-md text-black/90"
              >
                Select Student
              </label>
              <select
                name="studentName"
                id="studentName"
                onChange={handleChange}
                className="bg-gray-100 border-none outline-0 p-1.5 px-4 text-black/90 font-semibold rounded-xl"
              >
                <option value="Choose a class">Choose a student</option>
                <option value="Emma Wilson" className="text-black/80 bg-white">
                  Emma Wilson
                </option>
                <option value="James Brown" className="text-black/80 bg-white">
                  James Brown
                </option>
                <option value="Olivia Davis" className="text-black/80 bg-white">
                  Olivia Davis
                </option>
              </select>
            </div>
            <div className="flex-col flex gap-1 w-full">
              <label
                htmlFor="test-score"
                className="font-semibold text-md text-black/90"
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
                className="bg-gray-100 border-none outline-0 p-1.5 px-4 text-black/50 font-semibold rounded-xl"
              />
            </div>
            <div className="flex-col flex gap-1 w-full">
              <label
                htmlFor="test-score"
                className="font-semibold text-md text-black/90"
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
                className="bg-gray-100 border-none outline-0 p-1.5 px-4 text-black/50 font-semibold rounded-xl"
              />
            </div>
          </article>
          {showGrade && (
            <div className="p-4 flex justify-between bg-blue-50 rounded-xl text-black/50">
              <div className="flex flex-col gap-2">
                <p>Calculated Grade</p>
                <p className="font-semibold text-2xl text-black/90">
                  {studentGrade}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Average Score</p>
                <p className="font-semibold text-2xl text-black/90">
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
        </div>
        <div className="bg-cardBackground border border-bordercolor p-4 my-5 flex gap-3 flex-col rounded-xl">
          <p className="text-xl font-semibold text-textColor3 py-3">
            Grading Scale
          </p>
          <div className="grade-grid">
            {gradeScale.map((data) => (
              <div className="flex flex-col items-center gap-1 bg-slate-100 rounded-xl py-2">
                <p className="font-semibold text-black/90 text-lg">
                  {data.grade}
                </p>
                <p className="text-black/60">{data.percentage}</p>
              </div>
            ))}
          </div>
        </div>
        <Tables>
          <TableTitle
            className={`flex justify-between items-center text-lg font-semibold textColor3`}
          >
            <p>Student Performance Overview</p>

            <p className="flex items-center gap-2 text-textColor2">
              <TrendingUp className=" w-5 h-5" />
              Class Average: 90.6%
            </p>
          </TableTitle>
          <TableCard>
            <TableHeader>
              <tr className=" border-b border-bordercolor text-textColor whitespace-nowrap">
                <th className="py-3">Student ID</th>
                <th className="py-3 px-3">Name</th>
                <th
                  className="
                  py-3 px-3"
                >
                  Test Score
                </th>
                <th className="py-3 px-3">Exam Score</th>
                <th
                  className="
                  py-3"
                >
                  Total
                </th>
                <th className="py-3">Average</th>
                <th
                  className="
                  py-3 px-3"
                >
                  Grade
                </th>
              </tr>
            </TableHeader>
            <TableBody>
              {studetGrade.map((item) => (
                <tr
                  className=" border-b border-bordercolor whitespace-nowrap"
                  key={item.studentId}
                >
                  <td className="py-3 text-textColor3 font-semibold">
                    {item.studentId}
                  </td>
                  <td className="py-3 px-4 ">{item.name}</td>
                  <td className="py-3 px-4 ">{item.test}</td>
                  <td className="py-3 px-4">{item.exam}</td>
                  <td className="py-3 px-4">{item.total}</td>
                  <td className="py-3 px-4">{item.average}</td>
                  <td className="py-3 px-4">
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
            </TableBody>
          </TableCard>
        </Tables>
        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Card>
            <CardContent>
              <div className="flex flex-col items-center text-center gap-1 text-md text-textColor3 ">
                <p>Highest Score</p>
                <p className="font-semibold  text-2xl text-green-700">96.5%</p>
                <p>Olivia Davis</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex flex-col items-center text-center gap-1 text-md text-textColor3 ">
                <p>Class Average</p>
                <p className="font-semibold  text-2xl text-blue-700">90.6%</p>
                <p>Excellent Performance</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex flex-col items-center text-center gap-1 text-md text-textColor3 ">
                <p>Pass Rate</p>
                <p className="font-semibold  text-2xl text-purple-700">100%</p>
                <p>All student passed</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex flex-col items-center text-center gap-1 text-md text-textColor3 ">
                <p>A grade student</p>
                <p className="font-semibold text-2xl text-green-700">3</p>
                <p>75% of class</p>
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </>
  );
};
