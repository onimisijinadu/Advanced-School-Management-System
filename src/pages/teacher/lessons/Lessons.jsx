import {
  useEffect,
  useState,
} from 'react';

import {
  ArrowUpFromLine,
  BookOpen,
  Calendar,
  CheckCircle2,
  DownloadIcon,
  FileText,
  Trash2Icon,
  UploadIcon,
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
import { materialsUpload } from '../../../data/data';

export const Lessons = () => {
  const { showToast } = useToast();

  const [file, setFile] = useState(null);

  const [filteredMaterials, setFilteredMaterials] = useState(materialsUpload);
  const [docs, setDocs] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMaterials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [materials, setMaterials] = useState({
    studentClass: "",
    lessonTitle: "",
    Desc: "",
    file: "",
  });

  const handleClick = () => {
    if (
      materials.studentClass !== "" &&
      materials.lessonTitle !== ""
      // &&
      // docs !== ""
    ) {
      showToast(
        "Material uploaded successfully!",
        <CheckCircle2 className="w-5 h-5 text-white bg-black/90 rounded-full" />,
      );
    } else {
      showToast("Please provide required documents");
    }
  };

  const handleFileChange = (e) => {
    const fileSelected = e.target.files[0];
    if (fileSelected) {
      setFile(fileSelected);
    }
  };

  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);

    setDocs({ uri: url, fileName: file.name });
    return () => {
      if (file) {
        URL.revokeObjectURL(url);
      }
    };
  }, [file]);

  const handleDownload = () => {
    showToast(
      "Download started!",
      <CheckCircle2 className="w-5 h-5 text-white bg-black/90 rounded-full" />,
    );
  };

  const handleDelete = (dataToDelete) => {
    setFilteredMaterials((prev) =>
      prev.filter((item) => item.FileName !== dataToDelete),
    );
    showToast(
      "Material deleted successfully!",
      <CheckCircle2 className="w-5 h-5 text-white bg-black/90 rounded-full" />,
    );
  };

  return (
    <>
      <div>
        <div className="mb-5">
          <p className="font-semibold text-textColor3 text-3xl">
            Lesson & Content Management
          </p>
          <p className="text-textColor2 text-md">
            Upload and manage lesson materials for your classes
          </p>
        </div>
        <div className="border border-bordercolor rounded-xl p-4.5 flex flex-col gap-3.5 bg-cardBackground">
          <p className="text-slate-700 font-bold text-lg">
            Upload Lesson Material
          </p>
          <div className="flex flex-col gap-4.5">
            <div className="student-grid">
              <div className="flex flex-col gap-2">
                <label htmlFor="assigned-classes" className="font-semibold">
                  Assign to Class *
                </label>
                <select
                  name="studentClass"
                  id="studentClass"
                  required
                  onChange={handleChange}
                  className="p-2 px-3.5 bg-gray-100 rounded-xl outline-0 font-semibold text-gray-400"
                >
                  <option
                    value=" Select a class"
                    className="p-2 px-3.5 outline-0 font-semibold text-gray-400"
                  >
                    Select a class
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
              <div className="flex flex-col gap-2">
                <label htmlFor="lesson-title" className="font-semibold">
                  Lesson Title *
                </label>
                <input
                  type="text"
                  placeholder="Enter lesson title"
                  onChange={handleChange}
                  name="lessonTitle"
                  required
                  className="p-2 px-3.5 bg-gray-100 rounded-xl outline-0 placeholder:font-semibold placeholder:text-gray-400 "
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-1.5 h-3">
              <label
                htmlFor="description"
                className="font-semibold text-gray-850"
              >
                Description (Optional)
              </label>
              <textarea
                name="description"
                id="description"
                // rows="1"
                maxLength={"300"}
                placeholder="Enter lesson description or notes"
                className="resize-none w-full h-19 p-2 px-3.5 bg-gray-100 rounded-xl outline-0 placeholder:text-gray-500"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <p>Upload File</p>
              <div className="flex gap-1 items-center flex-col border-3  py-4 px-1 border-dashed rounded-xl border-broken border-gray-300">
                <ArrowUpFromLine className="text-gray-300 text-md text-center whitespace-pre-wrap" />
                <p className="text-gray-300 text-md text-center whitespace-pre-wrap">
                  Click to upload or drag and drop
                </p>
                <p className="text-gray-300 text-md text-center">
                  PDF, DOCX, PPTX, MP4, or other file types (Max 100MB)
                </p>

                <label
                  htmlFor="file_input"
                  className="py-2 px-4 w-60 my-4 bg-gray-200 rounded-xl font-medium placeholder:font-bold"
                >
                  <span className="font-semibold">Choose File</span>
                  <span
                    id="file_name"
                    className="font-medium ml-2 text-sm text-gray-500"
                  >
                    {file ? docs.fileName : "No file chosen"}
                  </span>
                  <input
                    type="file"
                    id="file_input"
                    name="file_input"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
            <Buttons
              text={"Upload Material"}
              action={handleClick}
              optionalClassName={`flex flex-row-reverse items-center bg-blue-500 hover:bg-blue-700 py-2.5 px-4 text-white rounded-xl gap-2 font-semibold text-lg`}
              icon={<UploadIcon className="w-5 h-5 font-bold" />}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-3">
          <Card>
            <CardContent>
              <div className="flex items-center justify-between gap-4  ">
                <div>
                  <p className="text-textColor">Total Materials</p>
                  <p className="font-semibold text-2xl text-textColor3">5</p>
                </div>
                <FileText className="text-blue-400 w-9 h-9" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex items-center justify-between gap-4  ">
                <div>
                  <p className="text-textColor">This Week</p>
                  <p className="font-semibold text-2xl text-textColor3">3</p>
                </div>
                <Calendar className="text-green-400 w-9 h-9" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex items-center justify-between gap-4  ">
                <div>
                  <p className="text-textColor">Total Size</p>
                  <p className="font-semibold text-2xl text-textColor3">
                    56 MB
                  </p>
                </div>
                <UploadIcon className="text-purple-400 w-9 h-9" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex items-center justify-between gap-4  ">
                <div>
                  <p className="text-textColor">Total Materials</p>
                  <p className="font-semibold text-2xl text-textColor3">5</p>
                </div>
                <BookOpen className="text-orange-400 w-9 h-9" />
              </div>
            </CardContent>
          </Card>
        </div>
        <Tables>
          <TableTitle className={`font-semibold`}>
            Uploaded Materials
          </TableTitle>
          <TableCard>
            <TableHeader>
              <tr className="border-b border-slate-200 whitespace-nowrap">
                <th className="p-3 text-textColor3">Title</th>
                <th className="p-3 text-textColor3">File Name</th>
                <th className="p-3 text-textColor3">Class</th>
                <th className="p-3 text-textColor3">Type</th>
                <th className="p-3 text-textColor3">Size</th>
                <th className="p-3 text-textColor3">Upload Date</th>
                <th className="p-3 text-textColor3">Actions</th>
              </tr>
            </TableHeader>
            <TableBody>
              {filteredMaterials.map((item) => (
                <tr
                  className=" border-b border-slate-200 whitespace-nowrap"
                  key={item.FileName}
                >
                  <td className="py-3 text-textColor3 font-semibold">
                    {item.Title}
                  </td>
                  <td className="py-3 pl-4 ">{item.FileName}</td>
                  <td className="py-3 pl-4 ">{item.Class}</td>
                  <td className="py-3 pl-4">
                    <p
                      className={` py-1 px-2 w-fit rounded-xl font-semibold ${
                        item.types.includes("PDF")
                          ? "bg-green-100 text-green-600"
                          : item.types.includes("DOCX")
                            ? "bg-blue-100 text-blue-600"
                            : item.types.includes("PPTX")
                              ? "bg-purple-100 text-purple-600"
                              : item.types.includes("MP4")
                                ? "bg-yellow-100 text-yellow-600"
                                : ""
                      } `}
                    >
                      {item.types}
                    </p>
                  </td>
                  <td className="py-3 pl-4">{item.Size}</td>
                  <td className="py-3 pl-4">{item.UploadDate}</td>
                  <td className="py-3 pl-4">
                    <Buttons
                      optionalClassName={``}
                      icon={
                        <>
                          <div className="flex gap-3 items-center">
                            <DownloadIcon
                              onClick={handleDownload}
                              className="bg-white border border-slate-300 rounded-lg p-2 w-9 h-9"
                            />
                            <Trash2Icon
                              onClick={() => handleDelete(item.FileName)}
                              className="text-red-500 bg-white border border-slate-300 rounded-lg p-2 w-9 h-9"
                            />
                          </div>
                        </>
                      }
                    />
                  </td>
                </tr>
              ))}
            </TableBody>
          </TableCard>
        </Tables>
      </div>
    </>
  );
};
