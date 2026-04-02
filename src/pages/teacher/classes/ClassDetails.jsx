import {
  ArrowLeft,
  CheckCircle,
  Eye,
  LucideArrowUp,
} from 'lucide-react';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';

import { Buttons } from '../../../components/Button';
import { ClassCard } from '../../../components/ClassCard';
import {
  TableBody,
  TableCard,
  TableHeader,
  Tables,
  TableTitle,
} from '../../../components/tables';
import {
  ScheduleData,
  studentList,
} from '../../../data/data';

export const ClassDetails = () => {
  const { classId } = useParams();
  const navigate = useNavigate();

  const selectedClass = ScheduleData.find(
    (data) => data.id.toString() === classId,
  );
  return (
    <>
      <div className="min-h-screen min-w-7/12">
        <div className="overflow-hidden">
          <div
            className="flex gap-3 font-semibold text-textColor3 hover:bg-black/10 mb-2 rounded-lg w-max p-2.5 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5" />
            <p>Back to Classes</p>
          </div>
          {selectedClass && (
            <ClassCard
              header={selectedClass.class}
              desc={selectedClass.subject}
              Bookstyle={`p-5 w-16 h-16 rounded-xl ${
                selectedClass.class.includes("A")
                  ? "bg-blue-500 text-white"
                  : "bg-orange-500 text-white"
              } `}
              totalusers={selectedClass.totalStudents}
              scheduled={selectedClass.scheduleDateAndTime}
              room={selectedClass.location}
              articlestyle={
                "flex flex-wrap sm:flex-nowrap lg:flex-nowrap justify-between w-full bg-cardBackground border border-gray-300 p-5 rounded-lg gap-2"
              }
              cardheaderstyle={"flex flex-row-reverse gap-5 justify-end"}
              contentStyle={"flex flex-col justify-left"}
              detailstyle={
                "flex flex-wrap sm:flex-wrap lg:flex-nowrap ml-2 sm:ml-20 lg:ml-20 text-lg"
              }
              id={selectedClass.id}
              button={
                <Buttons
                  text="Mark Attendance"
                  icon={<CheckCircle className="w-5" />}
                  action={() => navigate("/teacher/Attendance")}
                  optionalClassName=" flex flex-row-reverse flex-1 text-lg gap-1 text-white rounded-lg py-1 px-2 text-center w-full py-2 bg-blue-500 hover:bg-blue-700 text-sm font-semibold px-4"
                />
              }
            />
          )}
          <Tables>
            <TableTitle>Student List</TableTitle>
            <TableCard>
              <TableHeader>
                <tr className=" border-b border-slate-200">
                  <th className="p-3 text-textColor3">Student ID</th>
                  <th className="p-3 text-textColor3">Name</th>
                  <th className="p-3 text-textColor3">Status</th>
                  <th className="p-3 text-textColor3 text-center">
                    Attendance
                  </th>
                  <th className="p-3 text-textColor3">Grade</th>
                  <th className="p-3 text-textColor3">Action</th>
                </tr>
              </TableHeader>
              <TableBody>
                {studentList.map((data) => (
                  <tr
                    className="border-b border-slate-200"
                    key={data.studentId}
                  >
                    <td className="py-3 m-2"> {data.studentId} </td>
                    <td className="py-3 px-4">{data.name}</td>
                    <td className="py-3 text-center mx-5">
                      <p
                        className={`text-center max-w-19 ${
                          data.status === "Active"
                            ? "bg-green-200 rounded-xl text-center text-green-700 font-semibold"
                            : "bg-red-300 rounded-xl text-center text-red-700 font-semibold"
                        }`}
                      >
                        {data.status}
                      </p>
                    </td>
                    <td className="py-3 text-center">{data.attendance}</td>
                    <td className="py-3">{data.grade}</td>
                    <td>
                      <Buttons
                        text="View Profile"
                        icon={<Eye className="w-4" />}
                        action={() => navigate(data.studentId)}
                        optionalClassName=" flex flex-row-reverse flex-1 items-center justify-center text-center py-1 font-semibold text-black border border-slate-500 rounded-lg bg-white my-3 gap-1 hover:bg-slate-200 text-sm px-3"
                      />
                    </td>
                  </tr>
                ))}
              </TableBody>
            </TableCard>
          </Tables>
          <footer className="my-5 gap-3 card-grid">
            <div className="flex flex-col items-center bg-cardBackground border border-bordercolor rounded-lg p-5 gap-2 w-full ">
              <p className="text-textColor3">Average Attendance</p>
              <h3 className="font-semibold text-2xl">92.5%</h3>
              <p className="text-green-600 flex items-center gap-1">
                <LucideArrowUp className={`w-2.5 h-4 text-green-600`} />
                2.3% from last month
              </p>
            </div>
            <div className="flex flex-col items-center bg-cardBackground  border border-bordercolor rounded-lg p-5 gap-2 w-full ">
              <p className="text-textColor3">Average Grade</p>
              <h3 className="font-semibold text-2xl">A-</h3>
              <p className="text-green-600 flex items-center gap-1">
                <LucideArrowUp className={`w-2.5 h-4 text-green-600`} />
                Improved
              </p>
            </div>
            <div className="flex flex-col items-center bg-cardBackground  border border-bordercolor rounded-lg p-5 gap-2 w-full ">
              <p className="text-textColor3">Active Students</p>
              <h3 className="font-semibold text-2xl">32</h3>
              <p>All enrolled</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
