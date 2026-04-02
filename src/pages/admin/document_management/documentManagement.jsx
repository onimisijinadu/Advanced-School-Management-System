import {
  useEffect,
  useState,
} from 'react';

import {
  ArrowUpFromLine,
  Download,
  File,
  FileText,
  FolderOpen,
  Lock,
  Search,
  Trash2,
  Upload,
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
import { useToast } from '../../../context/useContext';
import { DocumentHistory } from '../../../data/history';

export const DocumentManagement = () => {
  const { showToast } = useToast();

  const [modal, setModal] = useState(false);

  const [overlyOpen, setOverlyOpen] = useState(false);

  const [recentUploads, setRecentUploads] = useState(DocumentHistory);

  const [file, setFile] = useState(null);
  const [docs, setDocs] = useState({});

  const [result, setResult] = useState("");

  const handleSearch = (e) => {
    setResult(e.target.value);
  };

  const Documents = recentUploads.filter((data) => {
    const searchResult = result.toLowerCase();

    const matchSearch =
      data.name.toLowerCase().includes(searchResult) ||
      data.uploader.toLowerCase().includes(searchResult) ||
      data.department.toLowerCase().includes(searchResult);

    return matchSearch;
  });

  const handleFileChange = (e) => {
    const SelectedDocs = e.target.files[0];
    setFile(SelectedDocs);
  };

  useEffect(() => {
    if (!file) return;

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setDocs({
        fileName: file.name,
        fileSize: (file.size / (1024 * 1024)).toFixed(2) + " MB",
        fileUrl: fileUrl,
      });
    }

    return () => {
      if (file) {
        URL.revokeObjectURL(file.fileUrl);
      }
    };
  }, [file]);

  const handleClickOpenModal = () => {
    setModal((prev) => !prev);
    setOverlyOpen((prev) => !prev);
  };

  const handleSubmit = () => {
    showToast(
      "Document uploaded successfully!",
      <CheckCircle2 className="w-5 h-5 text-white bg-black/90 rounded-full" />,
    );
  };

  const handleDelete = (data) => {
    setRecentUploads((prevUpload) =>
      prevUpload.filter((item) => item.id !== data),
    );
    // showToast(
    //   `${data.name} deleted successfully!`,
    //   <CheckCircle2 className="w-5 h-5 text-white bg-black/90 rounded-full" />,
    // );
  };

  const showRecent = Documents.slice(0, 5);
  return (
    <>
      <div>
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center ">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-textColor3">
              Document Management
            </h1>
            <p className="text-textColor mb-6 text-sm sm:text-lg">
              Secure paperless document storage and management.
            </p>
          </div>
          <Buttons
            text={"Upload Document"}
            fullWidth={"w-full sm:w-50"}
            optionalClassName={
              "flex flex-row-reverse w-full gap-2 py-2 px-3 bg-primaryBlue hover:bg-primaryBlue2 text-white rounded-lg font-semibold text-sm whitespace-nowrap mb-3 sm:mb-0"
            }
            icon={<Upload className="w-5 h-5" />}
            action={handleClickOpenModal}
          />
        </div>
        {modal && (
          <Modal
            className="w-full rounded-xl"
            overly={
              <Overly isOpen={overlyOpen} close={() => setOverlyOpen(false)} />
            }
          >
            <ModalForm action={handleSubmit} text="Upload Document">
              <FormHeader
                title="Upload Document"
                subtitle="Select a file to upload"
                icon={
                  <XIcon
                    className="w-4 h-4 text-textColor3"
                    onClick={handleClickOpenModal}
                  />
                }
              />
              <FormInputs>
                <p>Upload File</p>
                <div className="flex gap-1 items-center flex-col border-3  py-4 px-1 border-dashed rounded-xl border-broken border-gray-300">
                  <ArrowUpFromLine className="text-gray-300 text-md text-center whitespace-pre-wrap" />
                  <p className="text-gray-300 text-md text-center whitespace-pre-wrap">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-gray-300 text-md text-center">
                    PDF, DOCX, PPTX, MP4, or other file types (Max 20MB)
                  </p>

                  <label
                    htmlFor="file_upload"
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
                      id="file_upload"
                      name="file_upload"
                      className="hidden"
                      hidden
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </FormInputs>
            </ModalForm>
          </Modal>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 my-4">
          <Card>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Total Documents</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    1,570
                  </p>
                </div>
                <File className="w-12 h-12 bg-blue-100 text-bold text-blue-600 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Storage Used</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    4.7 GB
                  </p>
                  <p className="text-xs text-black/70">of 50 GB</p>
                </div>
                <FolderOpen className="w-12 h-12 bg-green-100 text-bold text-green-600 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center gap-2">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Uploaded Today</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    12
                  </p>
                </div>
                <Upload className="w-12 h-12 bg-purple-100 text-bold text-purple-500 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-textColor">Secured Files</p>
                  <p className="text-lg sm:text-2xl font-semibold text-textColor2">
                    892
                  </p>
                </div>
                <Lock className="w-12 h-12 bg-orange-100 text-bold text-orange-500 p-2.5 rounded-xl " />
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Document Categories */}
        <div className="my-4">
          <Card>
            <CardHeader>
              <CardTitle className={`font-semibold text-lg`}>
                Document Categories
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pb-7">
              <div className="flex flex-col justify-between items-start rounded-lg border border-gray-200 hover:border-blue-300 py-5 px-7 shadow">
                <div className="flex justify-center items-center w-14 h-14 bg-blue-100 text-bold text-blue-600 p-2.5 rounded-xl mb-2.5">
                  <FolderOpen className="w-8 h-8 " />
                </div>
                <p className="text-black/90 font-semibold text-lg">
                  Student Records
                </p>
                <p className="text-sm text-textColor">1,247 files</p>
              </div>
              <div className="flex flex-col justify-between items-start rounded-lg border border-gray-200 hover:border-blue-300  py-5 px-7  shadow">
                <div className="flex justify-center items-center w-14 h-14 bg-green-100 text-bold text-green-600 p-2.5 rounded-xl mb-2.5">
                  <FolderOpen className="w-8 h-8 " />
                </div>
                <p className="text-black/90 font-semibold text-lg">
                  Staff Documents
                </p>
                <p className="text-sm text-textColor">79 files</p>
              </div>
              <div className="flex flex-col justify-between items-start rounded-lg border border-gray-200 hover:border-blue-300  py-5 px-7  shadow">
                <div className="flex justify-center items-center w-14 h-14 bg-purple-100 text-bold text-purple-600 p-2.5 rounded-xl mb-2.5">
                  <FolderOpen className="w-8 h-8 " />
                </div>
                <p className="text-black/90 font-semibold text-lg">
                  Academic Reports
                </p>
                <p className="text-sm text-textColor">156 files</p>
              </div>
              <div className="flex flex-col justify-between items-start rounded-lg border border-gray-200 hover:border-blue-300  py-5 px-7 shadow">
                <div className="flex justify-center items-center w-14 h-14 bg-orange-100 text-bold text-orange-600 p-2.5 rounded-xl mb-2.5">
                  <FolderOpen className="w-8 h-8 " />
                </div>
                <p className="text-black/90 font-semibold text-lg">
                  Administrative Files
                </p>
                <p className="text-sm text-textColor">89 files</p>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* recent document history */}
        <div className="my-4">
          <Card>
            <CardHeader>
              <CardTitle
                className={`flex justify-between items-center flex-wrap gap-2`}
              >
                <p className="text-lg font-semibold text-black/90">
                  Recent Documents
                </p>
                <div className="relative w-full sm:w-50">
                  <Search className="absolute text-black/40 left-1 top-1.5 translate-y-1 translate-x-1 w-4 h-4" />
                  <input
                    type="text"
                    name="searchTerm"
                    value={result}
                    onChange={handleSearch}
                    placeholder="Search documents..."
                    className="py-2 pl-7 w-full bg-black/10 text-sm rounded-xl outline-gray-50"
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {showRecent.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center flex-wrap  sm:flex-nowrap gap-5 my-3 bg-black/5 hover:bg-black/20 rounded-lg px-3 py-4.5"
                >
                  <div className="flex gap-2 justify-center items-center">
                    {item.name.includes("xlsx") ||
                    item.name.includes("docx") ? (
                      <div className="w-9 h-9 bg-white border border-black/20 rounded-lg flex justify-center items-center">
                        <File
                          className={` ${item.name.includes("docx") ? "text-blue-400" : "text-black/50"}`}
                        />
                      </div>
                    ) : (
                      <div className="w-9 h-9 bg-white border border-black/20 rounded-lg flex justify-center items-center">
                        <FileText className="text-red-500" />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <p className="text-black/90 font-semibold ">
                        {item.name}
                      </p>
                      <p className="text-sm text-black/50">
                        {item.size} • Uploaded by {item.uploader}.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <div className="flex flex-col items-center justify-center">
                      <p className="py-1 px-2  text-blue-600 bg-blue-100 text-xs font-semibold rounded-full">
                        {item.department}
                      </p>
                      <p className="text-black/20 text-xs">{item.date}</p>
                    </div>
                    <div className="flex gap-3 justify-center items-center">
                      <Buttons
                        icon={<Download className="text-black/70 w-5 h-5 " />}
                        optionalClassName={`p-2 hover:bg-black/10 rounded-lg`}
                        action={() => {
                          showToast(`${item.name} downloading.....`);
                        }}
                      />
                      <Buttons
                        icon={<Trash2 className="text-red-500 w-5 h-5" />}
                        optionalClassName={`p-2 hover:bg-black/10 rounded-lg`}
                        action={() => handleDelete(item.id)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        {/* access permissions */}
        <div className="my-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <p className="text-lg font-semibold text-black/90">
                  Acess Permissions
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center flex-wrap gap-5 my-3 bg-black/5 rounded-lg px-3 py-4.5">
                <div className="flex gap-3 justify-center items-center">
                  <div className="flex flex-col">
                    <p className="text-black/70 font-semibold ">Teachers</p>
                    <p className="text-sm text-black/40">
                      Can upload and view documents.
                    </p>
                  </div>
                </div>

                <Lock className="text-black/40 w-6 h-6 " />
              </div>
              <div className="flex justify-between items-center flex-wrap gap-5 my-3 bg-black/5 rounded-lg px-3 py-4.5">
                <div className="flex gap-3 justify-center items-center">
                  <div className="flex flex-col">
                    <p className="text-black/70 font-semibold ">
                      Administrative Staff
                    </p>
                    <p className="text-sm text-black/40">
                      Full access to all documents.
                    </p>
                  </div>
                </div>

                <Lock className="text-black/40 w-6 h-6 " />
              </div>
              {/* <div className="flex justify-center sm:justify-between items-center flex-wrap gap-5 my-3 bg-black/5 rounded-lg px-3 py-4.5">
                <div className="flex gap-3 justify-center items-center">
                  <div className="flex flex-col">
                    <p className="text-black/70 font-semibold ">Students</p>
                    <p className="text-sm text-text-black/40">
                      View-only access to shared materials.
                    </p>
                  </div>
                </div>

                <Lock className="text-black/40 w-6 h-6 " />
              </div> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
