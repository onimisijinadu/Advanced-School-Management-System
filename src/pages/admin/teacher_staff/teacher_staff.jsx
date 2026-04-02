import { useState } from 'react';

import {
  Award,
  BookOpen,
  CheckCircle,
  CheckCircle2,
  EllipsisVertical,
  Search,
  UserPlus,
  Users,
  XIcon,
} from 'lucide-react';

import { Buttons } from '../../../components/Button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
import {
  Teachers,
  TotalTeachers,
} from '../../../data/teachers';

export const TeacherStaff = () => {
  const { showToast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const [isOverlyOpen, setIsOverlyOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [menu, setMenu] = useState(false);

  const [newTeacher, setNewTeacher] = useState({
    teacherFullName: "",
    teacherEmail: "",
    teacherPhoneNumber: "",
    department: "Select department",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerpage = 5;

  const startIndex = (currentPage - 1) * itemsPerpage;

  const endIndex = itemsPerpage + startIndex;

  const [teacherData, setTeacherData] = useState(Teachers);

  // handle change in input fields

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      !newTeacher.teacherFullName ||
      !newTeacher.teacherEmail ||
      !newTeacher.teacherPhoneNumber ||
      !newTeacher.department
    ) {
      showToast(
        "Please fill all required fields",
        <XIcon className="w-5 h-5 text-white bg-black/90 rounded-full" />,
      );
      setIsLoading(false);
    } else if (editTeacher) {
      setTeacherData((prev) =>
        prev.map((teacher) =>
          teacher.teacher_id === editTeacher
            ? {
                ...teacher,
                name: newTeacher.teacherFullName,
                mail: newTeacher.teacherEmail,
                phone: newTeacher.teacherPhoneNumber,
                department: newTeacher.department,
              }
            : teacher,
        ),
      );

      setTimeout(() => {
        showToast(
          "Teacher Successfully Updated",
          <CheckCircle2 className="w-5 h-5 text-white bg-black/90 rounded-full" />,
        );
        setOpenModal((prev) => !prev);
        setIsOverlyOpen((prev) => !prev);
        setIsLoading(false);
        setNewTeacher({
          teacherFullName: "",
          teacherEmail: "",
          teacherPhoneNumber: "",
          department: "Select department",
        });
        setEditTeacher(null);
      }, 2000);
    } else {
      setTimeout(() => {
        showToast(
          "Teacher Successfully Added",
          <CheckCircle2 className="w-5 h-5 text-white bg-black/90 rounded-full" />,
        );
        setOpenModal((prev) => !prev);
        setIsOverlyOpen((prev) => !prev);
        setIsLoading(false);
        setNewTeacher({
          teacherFullName: "",
          teacherEmail: "",
          teacherPhoneNumber: "",
          department: "Select department",
        });
      }, 2000);
    }
  };
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // const FilteredTeachers = Teachers.filter((data)=> data)
  const FilteredTeachers = teacherData.filter((data) => {
    const search = searchTerm.toLowerCase();

    const result =
      data.teacher_id.toLowerCase().toString().includes(search) ||
      data.name.toLowerCase().includes(search) ||
      data.department.toLowerCase().includes(search) ||
      data.classes.toString().toLowerCase().includes(search) ||
      data.attendance.toLowerCase().includes(search) ||
      data.status.toLowerCase().includes(search);

    return result;
  });

  const showTeachers = FilteredTeachers.slice(startIndex, endIndex);

  const handleClick = () => {
    setOpenModal((prev) => !prev);
    setIsOverlyOpen((prev) => !prev);
  };

  const handleOverly = () => {
    setIsOverlyOpen((prev) => !prev);
    setOpenModal((prev) => !prev);
  };

  const handleMenu = (id) => {
    setMenu((prev) => (prev == id ? false : id));
  };

  const [editTeacher, setEditTeacher] = useState(null);

  // funtion to handle edditing of teachers details..
  const handleEdit = (data) => {
    setNewTeacher({
      teacherFullName: data.name,
      teacherEmail: data.mail,
      teacherPhoneNumber: data.phone,
      department: data.department,
    });
    // track which student we currently edditing
    setEditTeacher(data.teacher_id);
    setOpenModal((prev) => !prev);
    setIsOverlyOpen((prev) => !prev);
    setMenu((prev) => !prev);
  };

  // function to handle deleting of teachers..
  const handleDelete = (data) => {
    setTeacherData((prevData) =>
      prevData.filter((item) => item.teacher_id !== data),
    );
  };
  return (
    <>
      <div>
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center ">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-textColor3">
              Teacher & Staff Management
            </h1>
            <p className="text-textColor mb-6 text-sm sm:text-lg">
              Manage teaching staff, assignments, and performance.
            </p>
          </div>
          <Buttons
            text={"Add New Teacher"}
            fullWidth={"w-full sm:w-50"}
            optionalClassName={
              "flex flex-row-reverse w-full gap-2 py-2 px-3 bg-primaryBlue hover:bg-primaryBlue2 text-white rounded-lg font-semibold text-sm whitespace-nowrap mb-3 sm:mb-0"
            }
            icon={<UserPlus className="w-5 h-5" />}
            action={handleClick}
          />
        </div>
        {openModal && (
          <Modal
            className="w-full rounded-xl"
            overly={<Overly isOpen={isOverlyOpen} close={handleOverly} />}
          >
            <ModalForm
              action={handleSubmit}
              text={
                editTeacher
                  ? isLoading
                    ? "Saving..."
                    : "Save"
                  : isLoading
                    ? "Adding New Teacher..."
                    : "Add New Teacher"
              }
            >
              <FormHeader
                title={editTeacher ? "Edit Teacher Details" : "Add New Teacher"}
                subtitle={
                  editTeacher
                    ? `Modifying profile for ID: ${editTeacher}`
                    : "Enter teacher information to create a new staff member"
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
                  name="teacherFullName"
                  value={newTeacher.teacherFullName}
                  onChange={handleChange}
                  placeholder="Enter teacher name"
                  className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
                />
              </FormInputs>
              <FormInputs>
                <label htmlFor="email" className="font-medium text-textColor3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="teacherEmail"
                  value={newTeacher.teacherEmail}
                  onChange={handleChange}
                  placeholder="teacher@school.com"
                  className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
                />
              </FormInputs>
              <FormInputs>
                <label
                  htmlFor="phoneNumber"
                  className="font-medium text-textColor3"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="teacherPhoneNumber"
                  value={newTeacher.teacherPhoneNumber}
                  onChange={handleChange}
                  placeholder="+234 709 045 6712"
                  className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
                />
              </FormInputs>
              <FormInputs>
                <label
                  htmlFor="department"
                  className="font-medium text-textColor3"
                >
                  Department
                </label>
                <select
                  name="department"
                  value={newTeacher.department}
                  onChange={handleChange}
                  className={`${newTeacher.department === "Select department" ? "text-gray-400" : "text-black"} outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5 appearance-none `}
                >
                  <option disabled hidden value="Select department">
                    Select department
                  </option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="English">English</option>
                  <option value="History">History</option>
                  <option value="Computer Science">Computer Science</option>
                </select>
              </FormInputs>
            </ModalForm>
          </Modal>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          <Card>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Total Teachers</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    70
                  </p>
                </div>
                <Users className="w-12 h-12 bg-blue-100 text-bold text-blue-600 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Avg. Attendance</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    96.8%
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
                  <p className="text-textColor">Total Classes</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    156
                  </p>
                </div>
                <BookOpen className="w-12 h-12 bg-purple-100 text-bold text-purple-500 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Certifications</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    124
                  </p>
                </div>
                <Award className="w-12 h-12 bg-orange-100 text-bold text-orange-500 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Tables>
            <TableTitle className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 ">
              <p className="font-semibold text-xl shrink-0">All Students</p>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <div className="relative w-full sm:w-64 bg-gray-200 p-2 rounded-xl">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="search"
                    name="searchTerm"
                    onChange={handleOnChange}
                    value={searchTerm}
                    placeholder="Search Teacher...."
                    className="bg-transparent outline-none pl-9 text-sm w-full"
                  />
                </div>
              </div>
            </TableTitle>
            <TableCard>
              <TableHeader>
                <tr className="text-gray-800 border-b border-gray-200 hover:bg-gray-100 text-sm whitespace-nowrap">
                  <th className="p-3">Teacher ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Department</th>
                  <th className="p-3">Subject</th>
                  <th className="p-3">Classes</th>
                  <th className="p-3">Students</th>
                  <th className="p-3">Attendance</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </TableHeader>
              <TableBody>
                {showTeachers.map((data) => (
                  <tr
                    key={data.teacher_id}
                    className="text-gray-800 text-sm sm:text-md border-b border-gray-200 last:border-0 hover:bg-gray-100 whitespace-nowrap"
                  >
                    <td className="py-3 px-4 font-semibold">
                      {data.teacher_id}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium">{data.name}</div>
                      <div className="text-xs text-gray-600">{data.mail}</div>
                    </td>
                    <td className="py-3 px-4">{data.department}</td>
                    <td className="py-3 px-4  ">
                      <div className="flex flex-wrap whitespace-nowrap gap-1.5">
                        {data?.subject.slice(0, 2).map((item, index) => (
                          <p
                            key={index}
                            className={`${item > 1 ? item + "1" : item} text-semibold text-xs text-textColor3 bg-gray-100 rounded-full p-1`}
                          >
                            {item}
                          </p>
                        ))}
                        {data.subject && data.subject.length > 2 && (
                          <span className="text-[10px] font-bold text-textColor3 bg-gray-100  rounded-full px-1.5 py-0.5">
                            + {data.subject.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">{data.classes}</td>
                    <td className="py-3 px-4">{data.no_of_students}</td>
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
                    <td className="relative py-3 px-4 items-end">
                      <button
                        onClick={() => {
                          handleMenu(data.teacher_id);
                        }}
                        className="flex justify-center ml-2 items-center hover:bg-black/10 rounded-lg p-1"
                      >
                        <EllipsisVertical className=" w-4 h-4" />
                      </button>
                      {menu === data.teacher_id && (
                        <ul className="absolute right-10 top-0 bottom-90 transalte-x-2, -translate-x-2 min-h-full px-2 py-5 z-40 border border-white/30 font-medium cursor-pointer text-sm flex flex-col items-start justify-center gap-2 bg-white rounded-lg whitespace-nowrap shadow-lg">
                          <li
                            onClick={() => handleEdit(data)}
                            className="hover:bg-black/10 hover:text-blue-400 rounded px-2"
                          >
                            Edit teacher details
                          </li>
                          <li
                            onClick={() => handleDelete(data.teacher_id)}
                            className="hover:bg-black/10 hover:text-blue-400 rounded px-2"
                          >
                            Delete teacher
                          </li>
                        </ul>
                      )}
                    </td>
                  </tr>
                ))}
              </TableBody>
            </TableCard>
            {Teachers.length > 5 && (
              <div>
                <button
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className={`bg-primaryBlue hover:bg-primaryBlue2 text-white/90 font-medium py-1 w-20 rounded-xl ${currentPage === 1 ? "hidden" : "block"}`}
                >
                  prev
                </button>
                <button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className={`bg-primaryBlue hover:bg-primaryBlue2 text-white/90 font-medium py-1 w-20 rounded-xl ${endIndex > Teachers.length ? "hidden" : "block"}`}
                >
                  Next
                </button>
              </div>
            )}
          </Tables>
        </div>
        <div className="mb-5">
          <Card>
            <CardHeader>
              <CardTitle className={`font-semibold`}>
                Top Performing Teachers
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* filter the teacher with 97 and above attendance record, sort it from the lowest to the highest and map it on the Ui */}
              {Teachers.filter((data) => parseInt(data.attendance) >= 97)
                .sort((a, b) => parseInt(a.attendance) - parseInt(b.attendance))
                .map((data, index) => (
                  <div
                    key={data.teacher_id}
                    className="flex justify-between items-center my-2 bg-gray-100 p-2 rounded-xl"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex  justify-center items-center font-semibold text-blue-700 bg-blue-200 w-10 h-10 rounded-full">
                        #{index + 1}
                      </div>
                      <div className="flex flex-col ">
                        <p className="text-textColor3 font-semibold">
                          {data.name}
                        </p>
                        <p className="text-sm text-textColor2">
                          {data.department}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-lg font-semibold text-textColor2">
                        {data.attendance}
                      </p>
                      <p className="text-xs text-textColor">Attendance</p>
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>
        </div>
        <div className="my-7">
          <Card>
            <CardHeader>
              <CardTitle className={`font-semibold text-lg`}>
                Department Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              {TotalTeachers.map((data, index) => (
                <div
                  key={index}
                  className=" flex flex-col w-full gap-1.5 my-3 mx-2"
                >
                  <div className="flex justify-between items-center ">
                    <p>{data.subject}</p>
                    <p>{data.no_of_teacher} teachers</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${data.percentage}` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
