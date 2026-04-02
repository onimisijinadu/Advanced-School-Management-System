import { useState } from 'react';

import {
  Archive,
  CheckCircle,
  CheckCircle2,
  EllipsisVertical,
  Filter,
  Search,
  TrendingUp,
  UserPlus,
  XCircle,
  XIcon,
} from 'lucide-react';

import { Buttons } from '../../../components/Button';
import {
  Card,
  CardContent,
} from '../../../components/cards';
import {
  FormHeader,
  FormInputs,
  Modal,
  ModalForm,
} from '../../../components/Modal';
import { Overly } from '../../../components/overly';
import {
  TableBody,
  TableCard,
  TableHeader,
  Tables,
  TableTitle,
} from '../../../components/tables';
import { useToast } from '../../../context/useContext';
import { studentList } from '../../../data/data';

export const StudentManagement = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();

  const [studentSearch, setStudentSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [openModal, setOpenModal] = useState(false);

  const [isOverlyOpen, setIsOverlyOpen] = useState(false);

  // const [academicSection, setAcademicSection] = useState("Select section");
  // const [studentGrade, setStudentGrade] = useState("Select grade");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [menu, setMenu] = useState(false);

  const [newStudent, setNewStudent] = useState({
    studentFullName: "",
    studentGrade: "Select grade",
    academicSection: "Select section",
    email: "",
    studentPhoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // submit form to register new student...
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    if (
      !newStudent.studentFullName ||
      !newStudent.studentGrade ||
      !newStudent.academicSection ||
      !newStudent.email ||
      !newStudent.studentPhoneNumber
    ) {
      showToast(
        "Please fill all required field",
        <XIcon className="w-5 h-5 rounded-full text-white bg-black/90" />,
      );
      setIsLoading(false);
    } else if (editingStudent) {
      setTable((prev) =>
        prev.map((student) =>
          student.studentId === editingStudent
            ? {
                ...student,
                name: newStudent.studentFullName,
                grade: newStudent.studentGrade,
                class: newStudent.academicSection,
                mail: newStudent.email,
                phone: newStudent.studentPhoneNumber,
              }
            : student,
        ),
      );
      setTimeout(() => {
        showToast(
          "Student Updated Successfully",
          <CheckCircle2 className="w-5 h-5 rounded-full text-white bg-black/90" />,
        );
        setIsLoading(false);
        setOpenModal(false);
        setIsOverlyOpen(false);
        setNewStudent({
          studentFullName: "",
          studentGrade: "Select grade",
          academicSection: "Select section",
          email: "",
          studentPhoneNumber: "",
        });
        setEditingStudent(null);
      }, 2000);
    } else {
      setTimeout(() => {
        showToast(
          "Student Registered Successfully",
          <CheckCircle2 className="w-5 h-5 rounded-full text-white bg-black/90" />,
        );
        console.log(newStudent);
        setNewStudent({
          studentFullName: "",
          studentGrade: "Select grade",
          academicSection: "Select section",
          email: "",
          studentPhoneNumber: "",
        });
        setOpenModal(false);
        setIsOverlyOpen(false);
        setIsLoading(false);
      }, 3000);
    }
  };

  const handleMenu = (id) => {
    setMenu((prev) => (prev === id ? false : id));
  };
  const handleClick = () => {
    setOpenModal((prev) => !prev);
    setIsOverlyOpen((prev) => !prev);
  };

  const handleOverly = () => {
    setIsOverlyOpen(false);
    setOpenModal(false);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  // Handle search input change
  const handleOnChange = (e) => {
    const data = e.target;
    setStudentSearch(data.value);
  };

  const handleDelete = (idToDelete) => {
    setTable((prevTable) =>
      prevTable.filter((data) => data.studentId !== idToDelete),
    );
    console.log("working");
  };
  const [table, setTable] = useState(studentList);

  // Filter the student list based on the search term
  const Students = table.filter((student) => {
    const searchTerm = studentSearch.toLowerCase();

    const matchSearch =
      student.studentId.toString().toLowerCase().includes(searchTerm) ||
      student.name.toLowerCase().includes(searchTerm) ||
      student.grade.toLowerCase().includes(searchTerm) ||
      student.section.toLowerCase().includes(searchTerm) ||
      student.rollNo.toLowerCase().includes(searchTerm) ||
      student.attendance.toLowerCase().includes(searchTerm) ||
      student.status.toLowerCase().includes(searchTerm) ||
      student.mail.toLowerCase().includes(searchTerm);

    const matchFilter = filter === "all" || student.class === filter;

    return matchSearch && matchFilter;
  });

  //
  const handlePromotion = () => {
    showToast(
      "Selected Student Promoted to the next grade",
      <CheckCircle2 className="w-5 h-5 rounded-full bg-black/90 text-white " />,
    );
  };

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const showTables = Students.slice(startIndex, endIndex);

  // state for edditing students..
  const [editingStudent, setEditingStudent] = useState(null);

  const handleEdit = (data) => {
    setNewStudent({
      studentFullName: data.name,
      studentGrade: data.grade,
      academicSection: data.class,
      email: data.mail,
      studentPhoneNumber: data.phone,
    });

    // track which student we currently edditing
    setEditingStudent(data.studentId);

    setOpenModal((prev) => !prev);
    setIsOverlyOpen((prev) => !prev);
    setMenu((prev) => !prev);
  };

  return (
    <>
      <div>
        {/* // header */}
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center ">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-textColor3">
              Student Management
            </h1>
            <p className="text-textColor mb-6 text-lg sm:text-xl">
              Manage student enrollement, profile, and academic status.
            </p>
          </div>
          <Buttons
            text={"Register New Student"}
            optionalClassName={
              "flex flex-row- w-full gap-2 py-2 px-3 bg-primaryBlue hover:bg-primaryBlue2 text-white rounded-lg font-semibold text-sm whitespace-nowrap mb-3 sm:mb-0"
            }
            icon={<UserPlus className="w-5 h-5" />}
            action={handleClick}
            fullWidth={"w-full sm:w-50"}
            // id={}
          />
        </div>
        {/* modal */}
        {openModal && (
          <Modal
            className="w-full rounded-xl"
            overly={<Overly isOpen={isOverlyOpen} close={handleOverly} />}
          >
            <ModalForm
              action={handleSubmit}
              text={
                editingStudent
                  ? isLoading
                    ? "Saving Edit....."
                    : "Save Edit"
                  : isLoading
                    ? "Registering Student....."
                    : "Register Student"
              }
            >
              <FormHeader
                title={
                  editingStudent
                    ? "Edit Student Details"
                    : "Register New Student"
                }
                subtitle={
                  editingStudent
                    ? `Modifying profile for ID: ${editingStudent}`
                    : "Enter student information to create a new enrollment"
                }
                icon={
                  <XIcon
                    className="w-4 h-4 text-textColor3"
                    onClick={handleClick}
                  />
                }
              />
              <FormInputs>
                <label
                  htmlFor="full_Name"
                  className="font-medium text-textColor3"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="studentFullName"
                  value={newStudent.studentFullName}
                  onChange={handleChange}
                  placeholder="Enter student name"
                  className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
                />
              </FormInputs>
              <div className=" flex justify-center items-center w-full gap-2">
                <FormInputs>
                  <label
                    htmlFor="grade"
                    className="font-medium text-textColor3"
                  >
                    Grade
                  </label>
                  <select
                    name="studentGrade"
                    value={newStudent.studentGrade}
                    onChange={handleChange}
                    className={`${newStudent.studentGrade === "Select grade" ? "text-gray-400" : "text-black"} outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5 appearance-none`}
                  >
                    <option disabled hidden value="Select grade">
                      Select grade
                    </option>
                    <option value="grade 10-A">Grade 10-A</option>
                    <option value="grade 10-B">Grade 10-B</option>
                    <option value="grade 11-A">Grade 11-A</option>
                    <option value="grade 12-A">Grade 12-A</option>
                  </select>
                </FormInputs>
                <FormInputs>
                  <label
                    htmlFor="section"
                    className="font-medium text-textColor3"
                  >
                    Section
                  </label>
                  <select
                    name="academicSection"
                    value={newStudent.academicSection}
                    onChange={handleChange}
                    className={`${newStudent.academicSection === "Select section" ? "text-gray-400" : "text-black"} outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5 appearance-none`}
                  >
                    <option disabled hidden value="Select section">
                      Select section
                    </option>
                    <option value="section A">Section A</option>
                    <option value="section B">Section B</option>
                    <option value="section C">Section C</option>
                    <option value="section D">Section D</option>
                  </select>
                </FormInputs>
              </div>

              <FormInputs>
                <label htmlFor="email" className="font-medium text-textColor3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={newStudent.email}
                  onChange={handleChange}
                  placeholder="student@school.com"
                  className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
                />
              </FormInputs>
              <FormInputs>
                <label
                  htmlFor="phone_number"
                  className="font-medium text-textColor3"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="studentPhoneNumber"
                  value={newStudent.studentPhoneNumber}
                  onChange={handleChange}
                  placeholder="+234 709 045 6712"
                  className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
                />
              </FormInputs>
            </ModalForm>
          </Modal>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          <Card>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Total Students</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    1,247
                  </p>
                </div>
                <CheckCircle className="w-12 h-12 bg-blue-100 text-bold text-blue-600 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Pending Approval</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    8
                  </p>
                </div>
                <XCircle className="w-12 h-12 bg-orange-100 text-bold text-orange-400 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center gap-2">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">New This Month</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    12
                  </p>
                </div>
                <TrendingUp className="w-12 h-12 bg-green-100 text-bold text-green-500 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Archived</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    34
                  </p>
                </div>
                <Archive className="w-12 h-12 bg-slate-100 text-bold text-slate-500 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Student TABLE */}
        <div>
          <Tables>
            <TableTitle className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 ">
              <p className="font-semibold text-xl shrink-0">All Students</p>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <div className="relative w-full sm:w-50 bg-gray-200 p-2 rounded-xl">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="search"
                    name="searchTerm"
                    onChange={handleOnChange}
                    value={studentSearch}
                    placeholder="Search Students...."
                    className="bg-transparent outline-none pl-9 text-sm w-full"
                  />
                </div>

                <div className="relative w-full sm:w-40 bg-gray-200 p-2 rounded-xl font-semibold flex items-center">
                  <Filter className="w-5 h-5 absolute text-gray-400 left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    name="filter"
                    id="filter"
                    value={filter}
                    onChange={handleFilter}
                    className="w-full pl-8 pr-2 bg-transparent text-black/80 outline-none appearance-none"
                  >
                    <option disabled hidden value="all">
                      All Grades
                    </option>
                    <option value="Grade 10-A">Grades 10-A</option>
                    <option value="Grade 10-B">Grades 10-B</option>
                    <option value="Grade 11-A">Grades 11-A</option>
                    <option value="Grade 11-B">Grades 11-B</option>
                    <option value="Grade 12-A">Grades 12-A</option>
                    <option value="Grade 12-B">Grades 12-B</option>
                  </select>
                </div>

                <div className="w-full sm:w-30">
                  <Buttons
                    text={"Promote"}
                    fullWidth={"w-full"}
                    action={handlePromotion}
                    optionalClassName="flex flex-row-reverse items-center justify-center bg-white text-base gap-2 text-black/80 font-semibold border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 w-full whitespace-nowrap"
                    icon={<TrendingUp className="w-5 h-5" />}
                  />
                </div>
              </div>
            </TableTitle>
            <TableCard>
              <TableHeader>
                <tr className="text-gray-800 border-b border-gray-200 hover:bg-gray-100">
                  <th className="p-3">Student ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Grade</th>
                  <th className="p-3">Section</th>
                  <th className="p-3">Roll No.</th>
                  <th className="p-3">Attendance</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </TableHeader>
              <TableBody>
                {showTables.map((data) => (
                  <tr
                    key={data.studentId}
                    className="text-gray-800 text-sm sm:text-md border-b border-gray-200 last:border-0 hover:bg-gray-100 "
                  >
                    <td className="py-3 px-4 font-semibold">
                      {data.studentId}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium">{data.name}</div>
                      <div className="text-xs text-gray-600">{data.mail}</div>
                    </td>
                    <td className="py-3 px-4">{data.class}</td>
                    <td className="py-3 px-4">{data.section}</td>
                    <td className="py-3 px-4">{data.rollNo}</td>
                    <td className={`py-3 px-4 items-center`}>
                      <p
                        className={`w-fit px-2 ${data.attendance >= "90" ? "text-green-500 bg-green-200 rounded-2xl" : data.attendance >= "80" ? "text-orange-500 bg-orange-200 rounded-2xl" : data.attendance >= "70" ? "text-purple-500 bg-purple-200 rounded-2xl" : data.attendance <= "69" ? "text-red-500 bg-red-200 rounded-2xl" : "text-gray-500 bg-gray-200 rounded-2xl"}`}
                      >
                        {data.attendance}
                      </p>
                    </td>
                    <td className="py-3 px-4">
                      <p
                        className={`w-fit px-2 ${data.status === "Active" ? "text-green-500 bg-green-200 rounded-2xl" : data.status === "Inactive" ? "text-gray-500 bg-gray-200 rounded-2xl" : "text-orange-500 bg-orange-200 rounded-2xl"}`}
                      >
                        {data.status}
                      </p>
                    </td>
                    <td className="py-3 px-4 items-end relative">
                      <button
                        onClick={() => {
                          handleMenu(data.studentId);
                        }}
                        className="flex justify-center ml-2 items-center hover:bg-black/10 rounded-lg p-1"
                      >
                        <EllipsisVertical className=" w-4 h-4" />
                      </button>
                      {menu === data.studentId && (
                        <ul className="absolute right-10 top-0 bottom-90 transalte-x-2, -translate-x-2 min-h-full gap-0.5 px-2 py-5 z-40 border border-white/30 font-medium cursor-pointer text-sm flex flex-col items-start justify-center bg-white rounded-lg whitespace-nowrap shadow-lg">
                          <li
                            onClick={() => handleEdit(data)}
                            className="hover:bg-black/10 hover:text-blue-400 rounded px-2"
                          >
                            Edit Student
                          </li>
                          <li
                            onClick={() => {
                              showToast(
                                `${data.name} promoted to next grade`,
                                <CheckCircle2 className="w-5 h-5 rounded-full text-white bg-black/90" />,
                              );
                              setMenu((prev) => !prev);
                            }}
                            className="hover:bg-black/10 hover:text-blue-400 rounded px-2"
                          >
                            Promote Student
                          </li>
                          <li
                            onClick={() => handleDelete(data.studentId)}
                            className="hover:bg-black/10 hover:text-blue-400 rounded px-2"
                          >
                            Delete student
                          </li>
                        </ul>
                      )}
                    </td>
                  </tr>
                ))}
              </TableBody>
            </TableCard>
            {Students.length > 5 && (
              <div>
                <button
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className={`bg-primaryBlue hover:bg-primaryBlue2 text-white/90 font-medium py-1 w-20 rounded-xl ${currentPage === 1 ? "hidden" : "block"}`}
                >
                  prev
                </button>
                <button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className={`bg-primaryBlue hover:bg-primaryBlue2 text-white/90 font-medium py-1 w-20 rounded-xl ${endIndex > Students.length ? "hidden" : "block"}`}
                >
                  Next
                </button>
              </div>
            )}
          </Tables>
        </div>
      </div>
    </>
  );
};
