import { Calendar } from 'lucide-react';

export const AcademicForms = () => {
  return (
    <>
      <div className="flex flex-col gap-3 p-3 bg-cardBackground border-bordercolor rounded-lg my-4">
        <div className="flex items-center gap-3 w-60 whitespace-nowrap my-3 mx-4.5">
          {/* school logo */}
          <Calendar className="text-primaryBlue" />
          {/* school name */}
          <p className="text-textColor3 font-semibold text-sm sm:text-lg">
            Academic Calendar
          </p>
        </div>
        {/* academic durations */}
        <form
          // onSubmit={action}
          className="flex flex-col text-sm py-4 px-6 gap-3 bg-white rounded-2xl w-full"
        >
          <div className="flex gap-3 flex-wrap lg:flex-nowrap w-full">
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="academic_year"
                className="font-medium text-textColor3"
              >
                Academic Year
              </label>
              <input
                type="text"
                name="academic_year"
                placeholder="2022-2024"
                className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="current_term"
                className="font-medium text-textColor3"
              >
                Current Term
              </label>
              <div className=" bg-gray-200 w-full sm:w-40 p-2 rounded-xl font-semibold mb-2.5 sm:mb-0 flex items-center text-sm">
                <select
                  name="current_term"
                  id="current_term"
                  // value={filter}
                  // onChange={handleFilter}
                  className="cursor-pointer px-1 w-full bg-transparent text-black/95 outline-none appearance-none"
                >
                  <option value="Term 1">Term 1</option>
                  <option value="Term 2">Term 2</option>
                  <option value="Term 3">Term 3</option>
                </select>
              </div>
            </div>
          </div>
          {/*Term 1  */}
          <div className="flex flex-col gap-3">
            <p className="font-medium text-textColor3">Term Dates</p>
            <div className="flex flex-col gap-3 w-full p-3 bg-cardBackground border border-bordercolor rounded-lg">
              <p className="font-medium text-textColor3">Term 1</p>
              <div className="flex gap-3 flex-wrap lg:flex-nowrap w-full">
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="term_one_start" className=" text-textColor3">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="term_one_start"
                    className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md  py-2 px-2.5"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="term_one_end" className=" text-textColor3">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="term_one_end"
                    className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md  py-2 px-2.5"
                  />
                </div>
              </div>
            </div>
          </div>
          {/*Term 2  */}
          <div className="flex flex-col gap-3 w-full p-3 bg-cardBackground border border-bordercolor rounded-lg">
            <p className="font-medium text-textColor3">Term 2</p>
            <div className="flex gap-3 flex-wrap lg:flex-nowrap w-full">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="term_two_start" className=" text-textColor3">
                  Start Date
                </label>
                <input
                  type="date"
                  name="term_two_start"
                  className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md  py-2 px-2.5"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="term_two_end" className=" text-textColor3">
                  End Date
                </label>
                <input
                  type="date"
                  name="term_two_end"
                  className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md  py-2 px-2.5"
                />
              </div>
            </div>
          </div>
          {/*Term 3  */}
          <div className="flex flex-col gap-3 w-full p-3 bg-cardBackground border border-bordercolor rounded-lg">
            <p className="font-medium text-textColor3">Term 3</p>
            <div className="flex flex-wrap lg:flex-nowrap gap-3  w-full ">
              <div className="flex gap-3 flex-wrap lg:flex-nowrap w-full">
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="term_three_start"
                    className=" text-textColor3"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="term_three_start"
                    className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md  py-2 px-2.5"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="term_three_end" className=" text-textColor3">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="term_three_end"
                    className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md  py-2 px-2.5"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-50 bg-primaryBlue p-2 rounded-xl text-white/90 font-medium hover:bg-primaryBlue2 outline-0"
          >
            Save Academic Calendar
          </button>
        </form>
        {/* Grading system */}
      </div>
      <div className="flex flex-col gap-3 p-3 bg-cardBackground border-bordercolor rounded-lg my-4">
        <form
          // onSubmit={action}

          className="flex flex-col text-sm py-4 px-6 gap-3 bg-white rounded-2xl w-full"
        >
          <p className="font-semibold text-textColor3 text-sm sm:text-lg">
            Grading System
          </p>
          <div className=" flex gap-2  bg-black/5 rounded-lg py-2 px-1.5 max-w-full">
            <label
              htmlFor="excellent"
              className="text-primaryBlue font-bold text-lg py-2 px-4 bg-blue-200 rounded-lg"
            >
              <p>A</p>
            </label>
            <input
              type="number"
              name="min_score"
              placeholder="0"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
            <input
              type="number"
              name="max_score"
              placeholder="0"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
            <input
              type="text"
              name="remark"
              placeholder="good"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
          </div>
          <div className=" flex gap-2  bg-black/5 rounded-lg py-2 px-1.5 max-w-full">
            <label
              htmlFor="very_good"
              className="text-primaryBlue font-bold text-lg py-2 px-4 bg-blue-200 rounded-lg"
            >
              <p>B</p>
            </label>
            <input
              type="number"
              name="min_score"
              placeholder="0"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
            <input
              type="number"
              name="max_score"
              placeholder="0"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
            <input
              type="text"
              name="remark"
              placeholder="good"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
          </div>
          <div className=" flex gap-2  bg-black/5 rounded-lg py-2 px-1.5 max-w-full">
            <label
              htmlFor="good"
              className="text-primaryBlue font-bold text-lg py-2 px-4 bg-blue-200 rounded-lg"
            >
              <p>C</p>
            </label>
            <input
              type="number"
              name="min_score"
              placeholder="0"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
            <input
              type="number"
              name="max_score"
              placeholder="0"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
            <input
              type="text"
              name="remark"
              placeholder="good"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
          </div>
          <div className=" flex gap-2  bg-black/5 rounded-lg py-2 px-1.5 max-w-full">
            <label
              htmlFor="satisfactory"
              className="text-primaryBlue font-bold text-lg py-2 px-4 bg-blue-200 rounded-lg"
            >
              <p>D</p>
            </label>
            <input
              type="number"
              name="min_score"
              placeholder="0"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
            <input
              type="number"
              name="max_score"
              placeholder="0"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
            <input
              type="text"
              name="remark"
              placeholder="good"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
          </div>
          <div className=" flex gap-2  bg-black/5 rounded-lg py-2 px-1.5 max-w-full">
            <label
              htmlFor="fair"
              className="text-primaryBlue font-bold text-lg py-2 px-4 bg-blue-200 rounded-lg"
            >
              <p>E</p>
            </label>
            <input
              type="number"
              name="min_score"
              placeholder="0"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
            <input
              type="number"
              name="max_score"
              placeholder="0"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
            <input
              type="text"
              name="remark"
              placeholder="good"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
          </div>
          <div className=" flex gap-2  bg-black/5 rounded-lg py-2 px-1.5 max-w-full">
            <label
              htmlFor="fail"
              className="text-primaryBlue font-bold text-lg py-2 px-4 bg-blue-200 rounded-lg"
            >
              <p>F</p>
            </label>
            <input
              type="number"
              name="min_score"
              placeholder="0"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
            <input
              type="number"
              name="max_score"
              placeholder="0"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
            <input
              type="text"
              name="remark"
              placeholder="good"
              className="w-full outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
          </div>

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
