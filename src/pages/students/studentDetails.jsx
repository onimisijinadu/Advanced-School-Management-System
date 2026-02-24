import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Mail,
  MapPin,
  Phone,
  Ribbon,
  User,
} from 'lucide-react';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';

import { Tables } from '../../components/tables';
import {
  academicPerformance,
  attendance,
  studentList,
} from '../../data/data';

export const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedStudent = studentList.find(
    (student) => student.studentId === id,
  );
  //   if (!selectedStudent) {
  //     return <p>Class not found</p>;
  //   }
  return (
    <>
      <div>
        <div>
          <div
            className="flex gap-1 hover:bg-gray-300  rounded-lg cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4" />
            <p className="font-semibold text-slate-900">Back</p>
          </div>

          {selectedStudent && (
            <div className="my-2 flex flex-wrap sm:flex-nowrap gap-5 border border-slate-300 bg-white p-5 rounded-lg w-full">
              <div className="h-max">
                <User className="w-33 h-33 text-white bg-purple-500 rounded-lg p-7" />
              </div>
              <div className="flex flex-col gap-2  w-fit">
                <p className="font-semibold text-3xl">{selectedStudent.name}</p>
                <p className=" text-xl text-slate-500">
                  Student ID: {selectedStudent.studentId}
                </p>
                <p className="bg-green-200 text-green-700 font-semibold w-fit px-2 rounded-xl">
                  {selectedStudent.status}
                </p>
                <div className="flex flex-wrap sm:flex-nowrap gap-2 justify-start">
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-1.5 items-center  text-sm">
                      <Mail className="w-4" /> {selectedStudent.mail}
                    </p>
                    <p className="flex gap-1.5 items-center  text-sm">
                      <BookOpen className="w-4" /> {selectedStudent.grade}
                    </p>
                    <p className="flex gap-1.5 lg:items-center text-sm">
                      <MapPin className="w-4" /> {selectedStudent.address}
                    </p>
                  </div>
                  <div className="flex flex-col  gap-2">
                    <p className="flex gap-1.5 lg:items-center text-sm">
                      <Phone className="w-4" /> {selectedStudent.phone}
                    </p>
                    <p className="flex gap-1.5 lg:items-center  text-sm">
                      <Calendar className="w-4" /> {selectedStudent.dob}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div className="flex gap-4 my-5 card-grid ">
            <div className="bg-white flex flex-col gap-2 border border-slate-300 rounded-lg p-2 py-4 items-center">
              <Ribbon className="text-blue-400 w-15 h-12" />
              <p>Overall Grade</p>
              <p className="font-semibold text-2xl">A</p>
              <p>90.0% Average</p>
            </div>
            <div className="bg-white flex flex-col gap-2 pt-4 border border-slate-300 rounded-lg p-2 items-center">
              <Calendar className="text-green-400 w-15 h-12" />
              <p>Attendance Rate</p>
              <p className="font-semibold text-2xl">95%</p>
              <p className="text-green-400">Excellent</p>
            </div>
            <div className="bg-white flex flex-col gap-2 pt-4 border border-slate-300 rounded-lg p-2 items-center">
              <BookOpen className="text-purple-400 w-15 h-12" />
              <p>Overall Grade</p>
              <p className="font-semibold text-2xl">8</p>
              <p>90.0% Average</p>
            </div>
          </div>
          <Tables
            desc={"Academic Performance"}
            tableHeads={
              <>
                <tr className=" border-b border-slate-200">
                  <th className="p-3 text-slate-700">Subject</th>
                  <th className="p-3 text-slate-700">Term</th>
                  <th className="p-3 text-slate-700">Score</th>
                  <th className="p-3 text-slate-700">Grade</th>
                  <th className="p-3 text-slate-700">Teacher</th>
                </tr>
              </>
            }
            tableBody={academicPerformance.map((data) => (
              <tr className=" border-b border-slate-200">
                <td className="py-3 text-slate-700 font-semibold">
                  {data.subject}
                </td>
                <td className="py-3 mx-4">{data.term}</td>
                <td className="py-3 m-2">{data.score}</td>
                <td
                  className={`${
                    data.grade.includes("A")
                      ? "text-green-400 font-semibold"
                      : "text-blue-400 font-semibold"
                  }`}
                >
                  {data.grade}
                </td>
                <td className="py-3 m-2">{data.teacher}</td>
              </tr>
            ))}
          />

          <Tables
            desc={"Attendance Summary"}
            tableHeads={
              <>
                <tr className=" border-b border-slate-200">
                  <th className="p-3 text-slate-700">Month</th>
                  <th className="p-3 text-slate-700">Present</th>
                  <th className="p-3 text-slate-700">Absent</th>
                  <th className="p-3 text-slate-700">Percentage</th>
                </tr>
              </>
            }
            tableBody={attendance.map((data) => (
              <tr className=" border-b border-slate-200">
                <td className="py-3 text-slate-700 font-semibold">
                  {data.month}
                </td>
                <td className="py-3 pl-4 text-green-400">{data.present}</td>
                <td className="py-3 pl-4 text-red-400">{data.absent}</td>
                <td className="py-3 pl-4 font-semibold">{data.percentage}</td>
              </tr>
            ))}
          />
        </div>
        <footer className="bg-white flex flex-col gap-5 border border-slate-300 rounded-xl mt-3 py-4 px-4">
          <p className="font-semibold text-slate-700 text-xl">
            Parent/Guardian Information
          </p>
          <div className="flex flex-wrap sm:flex-nowrap lg:flex-nowrap gap-3 items-left text-left w-full pb-3">
            <div className="w-full">
              <p>Parent Name</p>
              <p className="font-semibold">Robert Wilson</p>
            </div>
            <div className="w-full">
              <p>Contact Number</p>
              <p className="font-semibold">+234 7009234552</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
