import { useState } from 'react';

import {
  CheckCircle,
  CheckCircle2,
  Download,
  IdCard,
  QrCode,
  Search,
  Shield,
  XCircle,
} from 'lucide-react';

import React from '../../../assets/react.svg';
import { Buttons } from '../../../components/Button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/cards';
import { useToast } from '../../../context/useContext';
import { studentList } from '../../../data/data';
import { validationHistory } from '../../../data/history';

export const Security = () => {
  const { showToast } = useToast();

  const [idSearch, setIdSearch] = useState("");
  // const [ids, setIds] = useState(studentList);

  const handleChange = (e) => {
    setIdSearch(e.target.value);
  };

  const finalList = studentList.filter((student) => {
    const searchResult = idSearch.toLowerCase();

    const matchResult =
      student.name.toLowerCase().includes(searchResult) ||
      student.class.toLowerCase().includes(searchResult) ||
      student.dob.toLowerCase().includes(searchResult) ||
      student.studentId.toLowerCase().includes(searchResult);

    return matchResult;
  });

  const showId = finalList.length > 6 ? finalList.slice(0, 6) : finalList;

  const history =
    validationHistory > 5 ? validationHistory.slice(0, 5) : validationHistory;
  return (
    <>
      <div>
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center ">
          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-textColor3">
              Student ID & Security
            </h1>
            <p className="text-textColor w-full mb-6 text-sm sm:text-lg">
              Manage digital student IDs and identity verification.
            </p>
          </div>
          <Buttons
            text={"Generate Batch IDs"}
            fullWidth={"w-full sm:w-50"}
            optionalClassName={
              "flex flex-row-reverse w-full gap-2 py-2 px-3 bg-primaryBlue hover:bg-primaryBlue2 text-white rounded-lg font-semibold text-sm whitespace-nowrap mb-3 sm:mb-0"
            }
            icon={<QrCode className="w-5 h-5" />}
            action={() => {
              showToast(
                "Generating student IDs...",
                <CheckCircle2 className="w-5 h-5 text-white bg-black/90 rounded-full" />,
              );
            }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 my-4">
          <Card>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Total IDs Issued</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    1,247
                  </p>
                </div>
                <IdCard className="w-12 h-12 bg-blue-100 text-bold text-blue-600 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Active IDs</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    1,205
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
                  <p className="text-textColor">Inactive IDs</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    42
                  </p>
                </div>
                <XCircle className="w-12 h-12 bg-purple-100 text-bold text-purple-500 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Validations Today</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    892
                  </p>
                </div>
                <Shield className="w-12 h-12 bg-orange-100 text-bold text-orange-500 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Student ID cards */}
      <div className="my-4">
        <Card>
          <CardHeader>
            <CardTitle
              className={`flex justify-between items-center flex-wrap gap-2`}
            >
              <p className="text-lg font-semibold text-black/90">
                Student ID Cards
              </p>
              <div className="relative w-full sm:w-50">
                <Search className="absolute text-black/40 left-1 top-1.5 translate-y-1 translate-x-1 w-4 h-4" />
                <input
                  type="text"
                  value={idSearch}
                  onChange={handleChange}
                  placeholder="Search students..."
                  className="py-2 pl-7 w-full bg-black/10 text-sm rounded-xl outline-gray-50"
                />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className={`grid grid-cols-1 sm:grid-cols-2 gap-3`}>
            {showId.map((data) => (
              <div
                key={data.studentId}
                className="border border-gray-200 shadow p-2 rounded hover:shadow-xl"
              >
                <div className="relative max-w-full max-h-fit border border-black/70 rounded-lg shadow-sm">
                  <div className="flex items-center gap-4 p-2 bg-idHeader rounded-t-lg w-full">
                    <img
                      src={React}
                      alt="react logo"
                      className="w-11 h-11 rounded-full"
                    />
                    <div className="items-center">
                      <p className="font-bold text-xl text-idText">
                        School System
                      </p>
                      <p className="text-sm font-light text-idText">
                        Student ID Card
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-3 p-5 border-t-7 border-t-idborder">
                    {/* id details */}
                    <div className="flex gap-5  ">
                      {/* student date in and password */}
                      <div className="flex flex-col items-center">
                        <div className="max-w-25 max-h-50 border-2 border-idborder">
                          <img
                            src={data.pass_port}
                            alt={`${data.name} passport`}
                            className="w-full max-h-37"
                          />
                        </div>
                        {/* <div className="flex flex-col justify-center items-center">
                        <p className="font-semibold text-black/90">Year:</p>
                        <p className="text-xs sm:text-sm font-medium">
                          {data.dateIn}
                        </p>
                      </div> */}
                      </div>
                      {/* student details */}
                      <div className="text-black/95">
                        <p className="text-sm sm:text-lg font-semibold ">
                          {data.name}
                        </p>
                        {/* <p className="text-xs sm:text-sm">
                          Student ID: {data.studentId}
                        </p> */}
                        <p className="text-xs sm:text-sm">
                          Class: {data.class}{" "}
                        </p>
                        <p className="text-xs sm:text-sm"> DOB: {data.dob} </p>
                        <p className="text-xs sm:text-sm">
                          School Address: 123 Kano Nigeria
                        </p>
                      </div>
                    </div>
                    {/* QR CODE */}
                    <div className="bg-white p-1 max-w-fit rounded border border-gray-100 shadow-sm max-h-fit">
                      <QrCode className="w-15 h-15" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-5 p-5 mt-3.5 text-sm">
                    <div className="border-t border-t-black/70">
                      <p>Principal signature</p>
                    </div>
                    <div className="border-t border-t-black/70">
                      <p>Student signature</p>
                    </div>
                  </div>
                  {/* QR CODE - Pinned to bottom-right */}
                </div>
                <div className="flex gap-2 items-center justify-end m-2.5">
                  <div className="cursor-pointer hover:bg-black/10 p-1.5 rounded">
                    <Buttons
                      action={() => {
                        showToast(
                          `Downloading ${data.name} ID`,
                          <CheckCircle2 className="w-5 h-5 rounded-full text-white bg-black/90" />,
                        );
                      }}
                      icon={<Download className="w-5 h-5" />}
                    />
                  </div>
                  <div className="cursor-pointer hover:bg-black/10 p-1.5 rounded">
                    <Buttons
                      action={() => {
                        showToast(`Validating ${data.name} ID......`);
                      }}
                      icon={<Shield className="w-5 h-5" />}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      {/* list of security features */}
      <div className="my-4">
        <Card>
          <CardHeader>
            <CardTitle>
              <p className="text-lg font-semibold text-black/90">
                Security Features
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="my-3 bg-blue-100 rounded-lg px-3 py-4.5">
              <div className="flex gap-3 items-center">
                <div>
                  <QrCode className="text-blue-600" />
                </div>
                <div className="flex flex-col">
                  <p className="text-black/70 font-semibold ">
                    QR Code Validation
                  </p>
                  <p className="text-sm text-black/40">
                    Unique QR codes for instant identity verification.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-3 bg-green-100 rounded-lg px-3 py-4.5">
              <div className="flex gap-3 items-center">
                <Shield className="text-green-600" />
                <div className="flex flex-col">
                  <p className="text-black/70 font-semibold ">
                    Secure Database
                  </p>
                  <p className="text-sm text-black/40">
                    Encrypted storage of student information.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-3 bg-purple-100 rounded-lg px-3 py-4.5">
              <div className="flex gap-3 items-center">
                <CheckCircle className="text-purple-600" />
                <div className="flex flex-col">
                  <p className="text-black/70 font-semibold ">
                    Secure Database
                  </p>
                  <p className="text-sm text-black/40">
                    Encrypted storage of student information.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* recent validation history */}
      <div className="my-4">
        <Card>
          <CardHeader>
            <CardTitle>
              <p className="text-lg font-semibold text-black/90">
                Recent Validations
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {history.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center flex-wrap gap-5 my-3 bg-black/5 rounded-lg px-3 py-4.5"
              >
                <div className="flex gap-3 items-center">
                  <CheckCircle className="text-green-600" />
                  <div className="flex flex-col">
                    <p className="text-black/70 font-semibold ">{item.name}</p>
                    <p className="text-sm text-black/40">{item.location}</p>
                  </div>
                </div>
                <p className="text-xs text-black/50">{item.time}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
};
