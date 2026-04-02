import { useState } from 'react';

import {
  Calendar,
  ChartColumnIncreasing,
  CheckCircle2,
  Download,
  FileText,
  Printer,
  Users,
} from 'lucide-react';

import { Buttons } from '../../../components/Button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/cards';
import { useToast } from '../../../context/useContext';

export const Reports = () => {
  const { showToast } = useToast();

  const [reportDetails, setReportDetails] = useState({
    class: "",
    report: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setReportDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleClick = (type) => {
    if (reportDetails.class !== "" && reportDetails.report !== "") {
      if (type === "generate") {
        showToast(
          "Report generated successfully!",
          <CheckCircle2 ClassName="w-5 h-5 rounded-full text-white bg-black/90" />,
        );
      }
      if (type === "download") {
        showToast(
          "Student list downloaded successfully.",
          <CheckCircle2 className="w-5 h-5 rounded-full text-white bg-black/90" />,
        );
      }
      if (type === "print") {
        showToast(
          "Preparing report for printing.....",
          <CheckCircle2 className="w-5  h-5 rounded-full text-white bg-black/90" />,
        );
      }
    } else {
      showToast("Please select both class and report type");
    }
  };
  return (
    <>
      <header className="mb-5">
        <h1 className="font-semibold text-2xl text-textColor3">Reports</h1>
        <p className="text-textColor2 texy-lg">
          Generate and download class reports
        </p>
      </header>
      <main className="w-full my-4">
        <section className="flex flex-col gap-3 p-5 text-semibold border border-slate-300 rounded-xl bg-cardBackground w-full my-3">
          <p className="font-medium mb-3 text-lg">Generate Report</p>
          <div className="flex  flex-wrap md:flex-nowrap gap-3.5 sm:gap-10  w-full ">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="select-class" className="font-medium">
                Select Class
              </label>
              <select
                name="class"
                id=""
                onChange={handleChange}
                className="p-2 outline-0 bg-gray-200 rounded-xl text-slate-500"
              >
                <option
                  value=""
                  className="p-2 px-3.5 outline-0 font-semibold text-gray-300"
                >
                  Choose a class
                </option>
                <option
                  value="Grade 10-A-Mathematics"
                  className="p-2 px-3.5 bg-gray-100 rounded-xl outline-0 text-gray-900"
                >
                  Grade 10-A-Mathematics
                </option>
                <option
                  value="Grade 11-B-Algebra"
                  className="p-2 px-3.5 bg-gray-100 rounded-xl outline-0 text-gray-900"
                >
                  Grade 11-B-Algebra
                </option>
                <option
                  value="Grade 12-A-Calculus"
                  className="p-2 px-3.5 bg-gray-100 rounded-xl outline-0 text-gray-900"
                >
                  Grade 12-A-Calculus
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="select-class" className="font-medium ">
                Report Type
              </label>
              <select
                name="report"
                id=""
                onChange={handleChange}
                className="p-2 outline-0 bg-gray-200 rounded-xl text-slate-500 w-full"
              >
                <option
                  value="Choose report type"
                  className="p-2 px-3.5 outline-0 font-semibold text-gray-300"
                >
                  Choose report type
                </option>
                <option
                  value="Attendance Report"
                  className="p-2 px-3.5 bg-gray-100 rounded-xl outline-0 text-gray-900"
                >
                  Attendance Report
                </option>
                <option
                  value="Academic Performance report"
                  className="p-2 px-3.5 bg-gray-100 rounded-xl outline-0 text-gray-900"
                >
                  Academic Performance report
                </option>
                <option
                  value="Student List"
                  className="p-2 px-3.5 bg-gray-100 rounded-xl outline-0 text-gray-900"
                >
                  Student List
                </option>
                <option
                  value="Grade Summary"
                  className="p-2 px-3.5 bg-gray-100 rounded-xl outline-0 text-gray-900"
                >
                  Grade Summary
                </option>
              </select>
            </div>
          </div>
          <div className="flex  flex-wrap items-center md:flex-nowrap gap-1.5 font-medium  w-full my-3">
            <Buttons
              text={"Generate Report"}
              fullWidth={`w-full whitespace-nowrap`}
              action={() => handleClick("generate")}
              optionalClassName={
                "flex justify-center font-medium  items-center flex-row-reverse gap-3 text-lg bg-blue-500 py-2 px-5 rounded-xl text-white w-full hover:bg-blue-700 whitespae-nowrap"
              }
              icon={<ChartColumnIncreasing className="w-5 h-5" />}
            />
            <Buttons
              text={"Download Student List"}
              fullWidth={`w-full whitespace-nowrap`}
              action={() => handleClick("download")}
              optionalClassName={
                "flex justify-center items-center flex-row-reverse gap-3 bg-white/50 py-2 px-5 text-lg font-medium rounded-xl text-gray-900 border border-gray-300 w-full hover:bg-gray-400"
              }
              icon={<Download className="w-5 h-5" />}
            />
            <Buttons
              text={"Print Report"}
              fullWidth={`w-full whitespace-nowrap`}
              action={() => handleClick("print")}
              optionalClassName={
                "flex justify-center items-center flex-row-reverse gap-3 bg-white/50 py-2 px-5 rounded-xl text-lg font-medium text-gray-900 border border-gray-300 w-full hover:bg-gray-400"
              }
              icon={<Printer className="w-5 h-5" />}
            />
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5 w-full">
          <Card className="hover:shadow-2xl">
            <CardContent>
              <div className="bg-cardBackground flex flex-col items-center gap-3.5 ">
                <Calendar className="w-15 h-15 p-3 bg-blue-100 text-blue-500 rounded-xl" />
                <p className="text-textColor3 font-medium text-xl">
                  Attendance Report
                </p>
                <Buttons
                  text={"Generate"}
                  fullWidth={`w-full`}
                  optionalClassName={`border border-slate-300 w-full self-stretch py-1 font-medium text-gray-900 px-6 rounded-lg hover:bg-gray-100`}
                />
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-2xl">
            <CardContent>
              <div className="bg-cardBackground flex flex-1 flex-col justify-center items-center gap-3.5">
                <ChartColumnIncreasing className="w-15 h-15 p-3 bg-blue-100 text-blue-500 rounded-xl" />
                <p className="text-textColor3 font-medium text-xl">
                  Attendance Report
                </p>
                <Buttons
                  text={"Generate"}
                  fullWidth={`w-full`}
                  optionalClassName={`border border-slate-300 w-full py-1 font-medium text-gray-900 px-6 rounded-lg hover:bg-gray-100`}
                />
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-2xl">
            <CardContent>
              <div className="bg-cardBackground flex flex-1 flex-col justify-center items-center gap-3.5">
                <Users className="w-15 h-15 p-3 bg-blue-100 text-blue-500 rounded-xl" />
                <p className="text-textColor3 font-medium text-xl">
                  Attendance Report
                </p>
                <Buttons
                  text={"Generate"}
                  fullWidth={`w-full`}
                  optionalClassName={`border border-slate-300 w-full py-1 font-medium text-gray-900 px-6 rounded-lg hover:bg-gray-100`}
                />
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-2xl">
            <CardContent>
              <div className="bg-cardBackground flex flex-1 flex-col justify-center items-center gap-3.5">
                <FileText className="w-15 h-15 p-3 bg-blue-100 text-blue-500 rounded-xl" />
                <p className="text-textColor3 font-medium text-xl">
                  Attendance Report
                </p>
                <Buttons
                  text={"Generate"}
                  fullWidth={`w-full`}
                  optionalClassName={`border border-slate-300 w-full py-1 font-medium text-gray-900 px-6 rounded-lg hover:bg-gray-100`}
                />
              </div>
            </CardContent>
          </Card>

          {/* <CardHeader>
            <CardTitle>Attendance Report</CardTitle>
          </CardHeader> */}
        </section>
        <section className="flex flex-col gap-5 p-5 text-semibold border border-bordercolor rounded-xl bg-cardBackground w-full my-5">
          <p className="font-medium text-lg mb-3">Recent Reports</p>
          <div className="flex justify-between items-center bg-gray-100 hover:bg-gray-200  rounded-lg p-3">
            <div className="flex gap-3">
              <FileText className="w-15 h-15 p-3 bg-blue-100 text-blue-500 rounded-xl" />
              <div>
                <strong className="text-gray-700 text-lg">
                  Grade 10-A Attendance Report
                </strong>
                <p className="text-gray-600">
                  Attendance . Feb 9, 2026 . 245 KB{" "}
                </p>
              </div>
            </div>
            <Buttons
              icon={
                <Download className="bg-white hover:bg-gray-300 rounded-lg w-10 h-10 p-2" />
              }
            />
          </div>
          <div className="flex justify-between items-center bg-gray-100 hover:bg-gray-200  rounded-lg p-3">
            <div className="flex gap-3">
              <FileText className="w-15 h-15 p-3 bg-blue-100 text-blue-500 rounded-xl" />
              <div>
                <strong className="text-gray-700 text-lg">
                  Grade 11-B Academic Performance
                </strong>
                <p className="text-gray-600">Academic . Feb 7, 2026 . 541 KB</p>
              </div>
            </div>
            <Buttons
              icon={
                <Download className="bg-white hover:bg-gray-300 rounded-lg w-10 h-10 p-2" />
              }
            />
          </div>
          <div className="flex justify-between items-center bg-gray-100 hover:bg-gray-200  rounded-lg p-3">
            <div className="flex gap-3">
              <FileText className="w-15 h-15 p-3 bg-blue-100 text-blue-500 rounded-xl" />
              <div>
                <strong className="text-gray-700 text-lg">
                  Grade 12-A Student List
                </strong>
                <p className="text-gray-600">
                  Student List . Feb 7, 2026 . 145 KB{" "}
                </p>
              </div>
            </div>
            <Buttons
              icon={
                <Download className="bg-white hover:bg-gray-300 rounded-lg w-10 h-10 p-2" />
              }
            />
          </div>
          <div className="flex justify-between items-center bg-gray-100 hover:bg-gray-200  rounded-lg p-3">
            <div className="flex gap-3">
              <FileText className="w-15 h-15 p-3 bg-blue-100 text-blue-500 rounded-xl" />
              <div>
                <strong className="text-gray-700 text-lg">
                  Grade 10-A Grade Summary
                </strong>
                <p className="text-gray-600">
                  Grade Summary . Feb 6, 2026 . 345 KB{" "}
                </p>
              </div>
            </div>
            <Buttons
              icon={
                <Download className="bg-white hover:bg-gray-300 rounded-lg w-10 h-10 p-2" />
              }
            />
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-8">
          <Card>
            <CardContent>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-textColor">Total Reports</p>
                  <p className="font-semibold text-2xl text-textColor3">4</p>
                </div>
                <FileText className="text-blue-400 w-9 h-9" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-textColor">This Week</p>
                  <p className="font-semibold text-2xl text-textColor3">4</p>
                </div>
                <Calendar className="text-green-400 w-9 h-9" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-textColor">Classes Covered</p>
                  <p className="font-semibold text-2xl text-textColor3">3</p>
                </div>
                <Users className="text-purple-400 w-9 h-9" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-textColor">Total Size</p>
                  <p className="font-semibold text-2xl text-textColor3">
                    1.2 MB
                  </p>
                </div>
                <ChartColumnIncreasing className="text-orange-400 w-9 h-9" />
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Card className="flex flex-col gap-5 p-5 text-semibold border border-bordercolor rounded-xl bg-cardBackground w-full mt-5">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl text-textColor3 font-medium">
            Available Report Templates
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5 w-full">
          <div className="bg-white flex flex-col gap-2 py-6 px-4 border border-gray-300 rounded-lg">
            <p className="text-gray-900 font-medium text-xl">
              Monthly Attendance
            </p>
            <p className="text-gray-600 ">
              Complete attendance overview for the selected month
            </p>
            <Buttons
              text={"Download Template"}
              icon={<Download className="w-5 h-5" />}
              optionalClassName={`flex-row-reverse text-lg  gap-4 items-right border border-slate-300 py-1 font-medium text-gray-900 px-4 rounded-lg hover:bg-slate-100`}
            />
          </div>
          <div className="bg-white flex flex-col gap-2 py-6 px-4 border border-gray-300 rounded-lg">
            <p className="text-gray-900 font-medium text-xl">
              Term Performance Report
            </p>
            <p className="text-gray-600 ">
              Academic performance summary for the term
            </p>
            <Buttons
              text={"Download Template"}
              icon={<Download className="w-5 h-5" />}
              optionalClassName={`flex-row-reverse text-lg  gap-4 items-right border border-slate-300 py-1 font-medium text-gray-900 px-4 rounded-lg hover:bg-slate-100`}
            />
          </div>
          <div className="bg-white flex flex-col gap-2 py-6 px-4 border border-gray-300 rounded-lg">
            <p className="text-gray-900 font-medium text-xl">
              Student Progress Report
            </p>
            <p className="text-gray-600 ">
              Individual student progresss and achievements
            </p>
            <Buttons
              text={"Download Template"}
              icon={<Download className="w-5 h-5" />}
              optionalClassName={`flex-row-reverse text-lg  gap-4 items-right border border-slate-300 py-1 font-medium text-gray-900 px-4 rounded-lg hover:bg-slate-100`}
            />
          </div>
          <div className="bg-white flex flex-col gap-2 py-6 px-4 border border-gray-300 rounded-lg">
            <p className="text-gray-900 font-medium text-xl">
              Class Summary Report
            </p>
            <p className="text-gray-600 ">
              Overall class statistics and trends
            </p>
            <Buttons
              text={"Download Template"}
              icon={<Download className="w-5 h-5" />}
              optionalClassName={`flex-row-reverse text-lg  gap-4 items-right border border-slate-300 py-1 font-medium text-gray-900 px-4 rounded-lg hover:bg-slate-100`}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};
