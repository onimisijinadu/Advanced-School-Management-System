import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  Download,
  FileText,
} from 'lucide-react';

import { Buttons } from '../../../components/Button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/cards';
import { useToast } from '../../../context/useContext';

export const ReportsAnalytics = () => {
  const { showToast } = useToast();
  return (
    <>
      <div>
        {/* heading */}
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center ">
          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-textColor3">
              Report & Analytics
            </h1>
            <p className="text-textColor w-full mb-6 text-sm sm:text-lg">
              Generate and download comprehensive school reports.
            </p>
          </div>
          <div className="relative bg-gray-200 w-full sm:w-40 p-2 rounded-xl font-semibold mb-2.5 sm:mb-0 flex items-center text-sm">
            <Calendar className="absolute w-5 h-5 text-black/60 " />
            <select
              name="filter"
              id="filter"
              // value={filter}
              // onChange={handleFilter}
              className="cursor-pointer w-full pl-6 bg-transparent text-black/80 outline-none appearance-none flex justify-center items-center"
            >
              <option value="This Week">This Week</option>
              <option value="This Week">This Month</option>
              <option value="This Week">This Term</option>
              <option value="Last Week">This Year</option>
            </select>
          </div>
        </div>
        {/* quick preveiew Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          <Card>
            <CardContent>
              <div className="flex justify-between items-center gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-textColor">Reports Generated</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    142
                  </p>
                  <p className="text-sm whitespace-nowrap">This Month</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-bold text-blue-600 p-2.5 rounded-xl ">
                  <FileText className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-textColor">PDF Downloads</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    89
                  </p>
                  <p className="text-sm whitespace-nowrap">This month</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-bold text-orange-400 p-2.5 rounded-xl ">
                  <Download className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-textColor">Excel Exports</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    53
                  </p>
                  <p className="text-sm">This month</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-bold text-green-500 p-2.5 rounded-xl ">
                  <Download className="w-5 h-5  " />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-textColor">Scheduled Reports</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    12
                  </p>
                  <p className="text-sm whitespace-nowrap">Auto generated</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-bold text-purple-500 p-2.5 rounded-xl  ">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Student performace report */}
        <div className="my-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <p className="font-semibold text-black/95">
                  Student Performance Reports
                </p>
                <p className="text-sm text-black/60">
                  Academic performance and progress reports
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2  gap-2 pb-7">
              <div className="flex gap-2 rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex flex-col gap-2">
                  <p className="text-black/90 font-semibold">
                    Grade-wise Performance Report
                  </p>
                  <div className="flex gap-2 items-center">
                    <Buttons
                      text={"PDF"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                    <Buttons
                      text={"Excel"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex flex-col gap-2">
                  <p className="text-black/90 font-semibold ">
                    Subject-wise Analysis
                  </p>
                  <div className="flex gap-2 items-center">
                    <Buttons
                      text={"PDF"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                    <Buttons
                      text={"Excel"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex flex-col gap-2">
                  <p className="text-black/90 font-semibold ">
                    Student Progress Card
                  </p>
                  <div className="flex gap-2 items-center">
                    <Buttons
                      text={"PDF"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                    <Buttons
                      text={"Excel"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex flex-col gap-2">
                  <p className="text-black/90 font-semibold ">
                    Top Performers Report
                  </p>
                  <div className="flex gap-2 items-center">
                    <Buttons
                      text={"PDF"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                    <Buttons
                      text={"Excel"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Attendance Reports */}
        <div className="my-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <p className="font-semibold text-black/95">
                  Attendance Reports
                </p>
                <p className="text-sm text-black/60">
                  Student and staff attendance analytics
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-7">
              <div className="flex gap-2 rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex flex-col gap-2">
                  <p className="text-black/90 font-semibold">
                    Monthly Attendance Summary
                  </p>
                  <div className="flex gap-2 items-center">
                    <Buttons
                      text={"PDF"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                    <Buttons
                      text={"Excel"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex flex-col gap-2">
                  <p className="text-black/90 font-semibold ">
                    Class-wise Attendance
                  </p>
                  <div className="flex gap-2 items-center">
                    <Buttons
                      text={"PDF"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                    <Buttons
                      text={"Excel"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex flex-col gap-2">
                  <p className="text-black/90 font-semibold ">
                    Teacher Attendance Report
                  </p>
                  <div className="flex gap-2 items-center">
                    <Buttons
                      text={"PDF"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                    <Buttons
                      text={"Excel"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex flex-col gap-2">
                  <p className="text-black/90 font-semibold ">
                    Absenteeism Analysis
                  </p>
                  <div className="flex gap-2 items-center">
                    <Buttons
                      text={"PDF"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                    <Buttons
                      text={"Excel"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Staff Activity Reports */}
        <div className="my-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <p className="font-semibold text-black/95">
                  Staff Activity Reports
                </p>
                <p className="text-sm text-black/60">
                  Teaching staff performance and activities
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-7">
              <div className="flex gap-2 rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex flex-col gap-2">
                  <p className="text-black/90 font-semibold">
                    Teacher Performance Report
                  </p>
                  <div className="flex gap-2 items-center">
                    <Buttons
                      text={"PDF"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                    <Buttons
                      text={"Excel"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex flex-col gap-2">
                  <p className="text-black/90 font-semibold ">
                    Lesson Completion Status
                  </p>
                  <div className="flex gap-2 items-center">
                    <Buttons
                      text={"PDF"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                    <Buttons
                      text={"Excel"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex flex-col gap-2">
                  <p className="text-black/90 font-semibold ">
                    Staff Workload Analysis
                  </p>
                  <div className="flex gap-2 items-center">
                    <Buttons
                      text={"PDF"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                    <Buttons
                      text={"Excel"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex flex-col gap-2">
                  <p className="text-black/90 font-semibold ">
                    Professional Development Tracking
                  </p>
                  <div className="flex gap-2 items-center">
                    <Buttons
                      text={"PDF"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                    <Buttons
                      text={"Excel"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Administrative Reports */}
        <div className="my-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <p className="font-semibold text-black/95">
                  Administrative Reports
                </p>
                <p className="text-sm text-black/60">
                  School operations and management reports
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-7">
              <div className="flex gap-2 rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex flex-col gap-2">
                  <p className="text-black/90 font-semibold">
                    Enrollment Statistics
                  </p>
                  <div className="flex gap-2 items-center">
                    <Buttons
                      text={"PDF"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                    <Buttons
                      text={"Excel"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex flex-col gap-2">
                  <p className="text-black/90 font-semibold ">
                    Facility Utilization Report
                  </p>
                  <div className="flex gap-2 items-center">
                    <Buttons
                      text={"PDF"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                    <Buttons
                      text={"Excel"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex flex-col gap-2">
                  <p className="text-black/90 font-semibold ">
                    Budget and Expense Report
                  </p>
                  <div className="flex gap-2 items-center">
                    <Buttons
                      text={"PDF"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                    <Buttons
                      text={"Excel"}
                      icon={<Download className="w-4 h-4" />}
                      // action={}
                      optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <FileText className="w-5 h-5 text-blue-600 mt-1" />
                <div className="flex flex-col gap-2">
                  <p className="text-black/90 font-semibold ">
                    Compliance and Safety Report
                  </p>
                  <Buttons
                    text={"PDF"}
                    icon={<Download className="w-4 h-4" />}
                    // action={}
                    optionalClassName={`flex flex-row-reverse gap-2 items-center bg-white border border-gray-200 rounded py-1 px-2 hover:bg-black/5 font-semibold text-sm text-black/95`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Report Builder */}
        <Card>
          <CardHeader>
            <CardTitle className={`px-3 mb-5`}>
              <p className="font-semibold text-black/95 text-lg">
                Custom Report Builder
              </p>
              <p className="text-sm text-black/70 mb-2">
                Create custom reports with specific parameters
              </p>
            </CardTitle>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                <div className="flex flex-col gap-2 text-sm w-full">
                  <label htmlFor="report_type" className="font-medium text">
                    Report Type
                  </label>
                  <div className="relative">
                    <ChevronDown className="w-4 h-4 absolute right-2 top-2.5 text-black/50" />
                    <select
                      name="reportType"
                      id="report_type"
                      // value={filter}
                      // onChange={handleFilter}
                      className="cursor-pointer w-full pl-6 bg-black/5 rounded-lg p-2 text-black/80 outline-none appearance-none flex justify-center items-center"
                    >
                      <option hidden defaultValue="Select-report-type">
                        Select report type
                      </option>
                      <option value="Performance">Performance</option>
                      <option value="Attendance">Attendance</option>
                      <option value="Staff Activity">Staff Activity</option>
                      <option value="Administrative">Administrative</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm w-full">
                  <label htmlFor="grade_level" className="font-medium text">
                    Grade Level
                  </label>
                  <div className="relative">
                    <ChevronDown className="w-4 h-4 absolute right-2 top-2.5 text-black/50" />
                    <select
                      name="gradeLevel"
                      id="grade_level"
                      // value={filter}
                      // onChange={handleFilter}
                      className="cursor-pointer w-full pl-6 bg-black/5 rounded-lg p-2 text-black/80 outline-none appearance-none flex justify-center items-center"
                    >
                      <option hidden defaultValue="Select-grade-level">
                        Select grade level
                      </option>
                      <option value="grade 10">Grade 10</option>
                      <option value="grade 11">Grade 11</option>
                      <option value="grade 12">Grade 12</option>
                      <option value="grade 13">Grade 13</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm w-full">
                  <label htmlFor="time_period" className="font-medium text">
                    Time Period
                  </label>
                  <div className="relative">
                    <ChevronDown className="w-4 h-4 absolute right-2 top-2.5 text-black/50" />
                    <select
                      name="timePeriod"
                      id="time_period"
                      // value={filter}
                      // onChange={handleFilter}
                      className="cursor-pointer w-full pl-6 bg-black/5 rounded-lg p-2 text-black/80 outline-none appearance-none flex justify-center items-center"
                    >
                      <option hidden defaultValue="Select-period">
                        Select period
                      </option>
                      <option value="this-week">This Week</option>
                      <option value="this-week">This Month</option>
                      <option value="this-term">This Term</option>
                      <option value="this-year">This Year</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap w-full gap-3 items-center my-4">
                <Buttons
                  text={"Generate Report"}
                  fullWidth={"w-full sm:w-40"}
                  action={() => {
                    showToast(
                      "Generating custom report....",
                      <CheckCircle2 className="w-5 h-5 bg-black/90 text-white rounded-full" />,
                    );
                  }}
                  icon={<FileText className="text-white w-4 h-4" />}
                  optionalClassName={`flex flex-row-reverse text-white text-sm font-semibold border border-blue-200 rounded-lg gap-2 py-2 px-3.5 bg-blue-600 hover:bg-blue-400`}
                />
                {/* <Buttons
                  text={"Advanced Filters"}
                  fullWidth={"w-full sm:w-40"}
                  icon={<Filter className="text-black/95 w-4 h-4" />}
                  optionalClassName={`flex flex-row-reverse text-black/95 border border-black/50 rounded-lg text-sm font-semibold gap-2 py-2 px-3.5 bg-white hover:bg-black/10`}
                /> */}
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};
