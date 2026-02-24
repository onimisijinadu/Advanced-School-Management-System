import { useState } from 'react';

import {
  BookOpen,
  CheckCircle,
  Search,
  User,
  XCircle,
} from 'lucide-react';

import { Buttons } from '../../components/Button';
import { ValidationMessage } from '../../components/ValidationMessage';
import { studentList } from '../../data/data';

export const StudentValidation = () => {
  const [studentID, setStudentID] = useState("");

  const [found, setFound] = useState({
    status: "",
    data: null,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setStudentID(value.toUpperCase());
  };

  const studentFound = studentList.find((data) => data.studentId === studentID);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentFound) {
      console.log("VALID");
      setFound((prev) => ({ ...prev, status: "valid", data: studentFound }));
    } else {
      setFound((prev) => ({
        ...prev,
        status: "invalid",
        data: null,
      }));
      console.log("invalid");
    }
  };

  return (
    <>
      {/* header for student Validation */}
      <div className="my-4">
        <h1 className="text-3xl font-semibold">Student Validation</h1>
        <p className="text-gray-400 py-1">
          Verify student enrollment status by ID
        </p>
      </div>
      {/* Validation form and Status Message Conatiner */}
      <div className="flex  flex-col gap-3 bg-white p-4 border border-slate-300 rounded-xl">
        <p className="font-semibold text-lg text-gray-900">
          Validate Student ID
        </p>
        <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 justify-center">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="studentId" className="font-medium text-gray-900">
                Student ID
              </label>
              <input
                type="text"
                name="studentID"
                onChange={handleChange}
                placeholder="Enter student ID (e.g., STU001)"
                className="h-10 text-mg p-2 px-3.5 bg-gray-200 text-slate-900 font-light rounded-xl outline-0 placeholder:font-semibold placeholder:text-gray-400 "
              />
            </div>
            <div className="w-full sm:w-fit">
              <Buttons
                text="Validate"
                icon={<Search className="w-5 h-5" />}
                typeOf={"submit"}
                optionalClassName={
                  "flex flex-row-reverse gap-2 w-full outline-0  sm:mt-7 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-lg text-lg font-medium"
                }
              />
            </div>
          </div>
          <p className="text-gray-500">
            Enter the student ID and click validate to check enrollment status.
          </p>
        </form>
        {found.status === "valid" && (
          <ValidationMessage
            // optionalClassName={`${isValid ? "text-green-600" : "text-red-600"}`}
            optionalClassName={`text-green-600 bg-green-100 p-4 border border-green-300 rounded-xl`}
          >
            <div className="flex gap-3 p-2">
              <CheckCircle
                className={`bg-green-500 text-white w-17 h-17 p-4 rounded-full`}
              />
              <div className="flex gap-4 flex-col mx-2 w-full">
                <div className="flex flex-col gap-1 my-1.5">
                  <p className="text-xl text-green-900 font-bold">
                    Valid Student
                  </p>
                  <p className="text-md text-green-900">
                    This student is enrolled and active in the system
                  </p>
                </div>
                <article className="student-grid w-full items-center text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row  gap-3 text-gray-600 bg-white rounded-xl p-4 items-center w-full">
                    <User className="text-green-500" />
                    <div>
                      <p>Student Name</p>
                      <p className="font-semibold text-xl text-gray-900">
                        {found.data?.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-3 text-gray-600 bg-white rounded-xl p-4 items-center w-full">
                    <BookOpen className="text-green-500" />
                    <div>
                      <p>Class</p>
                      <p className="font-semibold text-xl text-gray-900">
                        {found.data?.class}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 text-gray-600 bg-white rounded-xl p-4 items-center w-full">
                    <CheckCircle className="text-green-500" />
                    <div>
                      <p>Status</p>
                      <p className="font-semibold text-gray-900 text-xl">
                        {found.data?.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 text-gray-600 bg-white rounded-xl p-4 items-center w-full">
                    <BookOpen className="text-green-500" />
                    <div>
                      <p>Enrollment Date</p>
                      <p className="font-semibold text-gray-900 text-xl">
                        {found.data?.dateIn}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </ValidationMessage>
        )}
        {found.status === "invalid" && (
          <ValidationMessage
            // optionalClassName={`${isValid ? "text-green-600" : "text-red-600"}`}
            optionalClassName={`text-red-600 bg-red-100 p-4 border border-red-300 rounded-xl`}
          >
            <div className="flex gap-3 p-2">
              <XCircle
                className={`bg-red-500 text-white w-17 h-17 p-4 rounded-full`}
              />
              <div className="flex gap-4 flex-col mx-2 w-full">
                <div className="flex flex-col gap-1 my-1.5">
                  <p className="text-xl text-red-900 font-bold">
                    Invalid Student
                  </p>
                  <p className="text-md text-red-900">
                    This student ID was not found in the system. Please check
                    the ID and try again.
                  </p>
                </div>
              </div>
            </div>
          </ValidationMessage>
        )}
      </div>

      {/* Sample for techer to test and know how to to expect if the validation is successful can be customized depending on the school  student Id format  */}
      <div className="flex flex-col p-5 w-full bg-white border border-slate-300 rounded-xl my-5">
        <p className="font-semibold text-lg mb-7">
          Sample Student IDs for Testing
        </p>
        <article className="student-grid ">
          <div className="flex flex-col gap-1 text-gray-600 bg-gray-100 rounded-xl p-4 w-full">
            <p className="font-semibold text-xl text-gray-900">STU001</p>
            <p>Emma Wilson</p>
            <p>Grade 10-A</p>
          </div>
          <div className="flex flex-col gap-1 text-gray-600 bg-gray-100 rounded-xl p-4 w-full">
            <p className="font-semibold text-xl text-gray-900">STU002</p>
            <p>James Brown</p>
            <p>Grade 10-A</p>
          </div>
          <div className="flex flex-col gap-1 text-gray-600 bg-gray-100 rounded-xl p-4 w-full">
            <p className="font-semibold text-xl text-gray-900">STU003</p>
            <p>Olivia Davis</p>
            <p>Grade 11-B</p>
          </div>
          <div className="flex flex-col gap-1 text-gray-600 bg-gray-100 rounded-xl p-4 w-full">
            <p className="font-semibold text-xl text-gray-900">STU004</p>
            <p>Noah Martinez</p>
            <p>Grade 12-A</p>
          </div>
        </article>
      </div>
      {/* Validation History both successful and failed Validation*/}
      <div className="flex flex-col p-5 w-full bg-white border border-slate-300 rounded-xl my-5">
        <p className="font-semibold text-lg mb-7">Recent Validations</p>
        <article className="flex flex-col w-full items-center gap-4">
          <div className="flex justify-between gap-3 text-gray-600 bg-gray-100 rounded-xl p-4 items-center w-full">
            <div className="flex gap-3">
              <CheckCircle className="text-green-500 bg-green-100 w-10 h-10 p-2 rounded-full" />
              <div>
                <p className="font-semibold text-xl text-gray-900">STU001</p>
                <p>Emma Wilson</p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-green-700 bg-green-100 rounded-xl text-center font-semibold">
                Valid
              </p>
              <small className="text-sm text-slate-400">2 mins ago</small>
            </div>
          </div>
          <div className="flex gap-3 justify-between text-gray-600 bg-gray-100 rounded-xl p-4 items-center w-full">
            <div className="flex gap-3">
              <CheckCircle className="text-green-500 bg-green-100 w-10 h-10 p-2 rounded-full" />
              <div>
                <p className="font-semibold text-xl text-gray-900">STU003</p>
                <p>Olivia Davis</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-green-700 bg-green-100 rounded-xl text-center font-semibold">
                Valid
              </p>
              <small className="text-sm text-slate-400">15 mins ago</small>
            </div>
          </div>
          <div className="flex justify-between gap-3 text-gray-600 bg-gray-100 rounded-xl p-4 items-center w-full">
            <div className="flex gap-3 items-center">
              <XCircle className="text-red-500 bg-red-100 w-10 h-10 p-2 rounded-full" />
              <div>
                <p className="font-semibold text-xl text-gray-900">STU293</p>
                <p>Unknown</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-red-700 bg-red-100 rounded-xl text-center font-semibold">
                Invalid
              </p>
              <small className="text-sm text-slate-400">1 hour ago</small>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
