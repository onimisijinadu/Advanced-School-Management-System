import { Teachers } from '../../data/teachers';

export const ClassConfig = () => {
  return (
    <>
      <div className="flex flex-col gap-3 p-3 bg-cardBackground border-bordercolor rounded-lg my-4">
        <p className="font-semibold text-sm sm:text-lg text-textColor3 px-4.5">
          Class Configuration
        </p>
        <form
          // onSubmit={action}

          className="flex flex-col text-sm py-4 px-6 gap-3 bg-white rounded-2xl w-full"
        >
          <article className="flex flex-wrap sm:flex-nowrap justify-between items-center py-2 px-2 gap-3 bg-black/5 rounded-xl shadow max-w-full">
            <p className="font-semibold whitespace-nowrap text-textColor3 text-lg sm:text-lg">
              Grade 6
            </p>
            <div className="flex flex-wrap sm:flex-nowrap gap-2 items-center max-w-full">
              {/* sections */}
              <div className=" flex flex-col gap-1.5">
                <label
                  htmlFor="sections"
                  className="text-textColor3 font-bold text-sm"
                >
                  Sections
                </label>
                <input
                  type="number"
                  name="sections"
                  placeholder="0"
                  className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
                />
              </div>
              {/* student per sections */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="student_per_sections"
                  className="text-textColor3 font-bold text-sm"
                >
                  Student/Section
                </label>
                <input
                  type="number"
                  name="student_per_sections"
                  placeholder="0"
                  className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="assign_teacher"
                  className="font-medium text-textColor3 text-sm"
                >
                  Class Teacher
                </label>

                <select
                  name="assign_teacher"
                  id="assign_teacher"
                  // value={filter}
                  // onChange={handleFilter}
                  className=" border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5 outline-none appearance-none"
                >
                  {Teachers.map((data) => (
                    <>
                      <option value={data.name}>{data.name}</option>
                    </>
                  ))}
                </select>
              </div>
            </div>
          </article>
          <article className="flex flex-wrap sm:flex-nowrap justify-between items-center py-2 px-2 gap-3 bg-black/5 rounded-xl shadow  max-w-full">
            <p className="font-semibold whitespace-nowrap text-textColor3 text-lg sm:text-lg">
              Grade 7
            </p>
            <div className="flex flex-wrap sm:flex-nowrap gap-2 items-center max-w-full">
              {/* sections */}
              <div className=" flex flex-col gap-1.5">
                <label
                  htmlFor="sections"
                  className="text-textColor3 font-bold text-sm"
                >
                  Sections
                </label>
                <input
                  type="number"
                  name="sections"
                  placeholder="0"
                  className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
                />
              </div>
              {/* student per sections */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="student_per_sections"
                  className="text-textColor3 font-bold text-sm"
                >
                  Student/Section
                </label>
                <input
                  type="number"
                  name="student_per_sections"
                  placeholder="0"
                  className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="assign_teacher"
                  className="font-medium text-textColor3 text-sm"
                >
                  Class Teacher
                </label>

                <select
                  name="assign_teacher"
                  id="assign_teacher"
                  // value={filter}
                  // onChange={handleFilter}
                  className=" border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5 outline-none appearance-none"
                >
                  {Teachers.map((data) => (
                    <>
                      <option value={data.name}>{data.name}</option>
                    </>
                  ))}
                </select>
              </div>
            </div>
          </article>
          <article className="flex flex-wrap sm:flex-nowrap justify-between items-center py-2 px-2 gap-3 bg-black/5 rounded-xl shadow max-w-full">
            <p className="font-semibold whitespace-nowrap text-textColor3 text-lg sm:text-lg">
              Grade 9
            </p>
            <div className="flex flex-wrap sm:flex-nowrap gap-2 items-center max-w-full">
              {/* sections */}
              <div className=" flex flex-col gap-1.5">
                <label
                  htmlFor="sections"
                  className="text-textColor3 font-bold text-sm"
                >
                  Sections
                </label>
                <input
                  type="number"
                  name="sections"
                  placeholder="0"
                  className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
                />
              </div>
              {/* student per sections */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="student_per_sections"
                  className="text-textColor3 font-bold text-sm"
                >
                  Student/Section
                </label>
                <input
                  type="number"
                  name="student_per_sections"
                  placeholder="0"
                  className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="assign_teacher"
                  className="font-medium text-textColor3 text-sm"
                >
                  Class Teacher
                </label>

                <select
                  name="assign_teacher"
                  id="assign_teacher"
                  // value={filter}
                  // onChange={handleFilter}
                  className=" border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5 outline-none appearance-none"
                >
                  {Teachers.map((data) => (
                    <>
                      <option value={data.name}>{data.name}</option>
                    </>
                  ))}
                </select>
              </div>
            </div>
          </article>
          <article className="flex flex-wrap sm:flex-nowrap justify-between items-center py-2 px-2 gap-3 bg-black/5 rounded-xl shadow  max-w-full">
            <p className="font-semibold whitespace-nowrap text-textColor3 text-lg sm:text-lg">
              Grade 10
            </p>
            <div className="flex flex-wrap sm:flex-nowrap gap-2 items-center max-w-full">
              {/* sections */}
              <div className=" flex flex-col gap-1.5">
                <label
                  htmlFor="sections"
                  className="text-textColor3 font-bold text-sm"
                >
                  Sections
                </label>
                <input
                  type="number"
                  name="sections"
                  placeholder="0"
                  className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
                />
              </div>
              {/* student per sections */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="student_per_sections"
                  className="text-textColor3 font-bold text-sm"
                >
                  Student/Section
                </label>
                <input
                  type="number"
                  name="student_per_sections"
                  placeholder="0"
                  className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="assign_teacher"
                  className="font-medium text-textColor3 text-sm"
                >
                  Class Teacher
                </label>

                <select
                  name="assign_teacher"
                  id="assign_teacher"
                  // value={filter}
                  // onChange={handleFilter}
                  className=" border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5 outline-none appearance-none"
                >
                  {Teachers.map((data) => (
                    <>
                      <option value={data.name}>{data.name}</option>
                    </>
                  ))}
                </select>
              </div>
            </div>
          </article>
          <button
            type="submit"
            className="w-full sm:w-50 bg-primaryBlue p-2 rounded-xl text-white/90 font-medium hover:bg-primaryBlue2 outline-0"
          >
            Save Grading System
          </button>
        </form>
      </div>
    </>
  );
};
