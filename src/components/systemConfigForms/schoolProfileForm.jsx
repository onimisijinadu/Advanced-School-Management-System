export const ProfileForm = () => {
  return (
    <div className="flex flex-col gap-3 p-3 bg-cardBackground border-bordercolor rounded-lg my-4">
      <div className="flex items-center gap-3 w-60 whitespace-nowrap my-3 mx-4.5">
        {/* school logo */}
        <div className="bg-white w-10 h-10 rounded-full border-2 border-bordercolor">
          {/* <img
            src={Boy2}
            alt="school logo"
            className=" object-contain rounded-full"
          /> */}
        </div>
        {/* school name */}
        <p className="text-textColor3 font-semibold text-sm sm:text-lg">
          School Information
        </p>
      </div>
      <form
        // onSubmit={action}
        className="flex flex-col text-sm py-4 px-6 gap-3 bg-white rounded-2xl w-full"
      >
        <div className="flex gap-3 flex-wrap lg:flex-nowrap w-full">
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="school_name"
              className="font-medium text-textColor3"
            >
              School Name
            </label>
            <input
              type="text"
              name="school_name"
              placeholder="Enter school Name"
              className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="school_code"
              className="font-medium text-textColor3"
            >
              School Code
            </label>
            <input
              type="text"
              name="school_code"
              placeholder="e.g EMS-2026"
              className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
          </div>
        </div>
        <div className="flex gap-3 flex-wrap lg:flex-nowrap w-full">
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="principal_name"
              className="font-medium text-textColor3"
            >
              Pricipal Name
            </label>
            <input
              type="text"
              name="principal_name"
              placeholder="Enter principal name"
              className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="contact_phone"
              className="font-medium text-textColor3"
            >
              Contact Phone
            </label>
            <input
              type="tel"
              name="contact_phone"
              placeholder="+234 707 673 0234"
              className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="school_address"
            className="font-medium text-textColor3"
          >
            School Address
          </label>
          <input
            type="text"
            name="school_address"
            placeholder="Enter your school address"
            className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
          />
        </div>
        <div className="flex gap-3 flex-wrap lg:flex-nowrap w-full">
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="official_email"
              className="font-medium text-textColor3"
            >
              Official Email
            </label>
            <input
              type="email"
              name="official_email"
              placeholder="contact@system.edu"
              className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="website" className="font-medium text-textColor3">
              Website
            </label>
            <input
              type="text"
              name="website"
              placeholder="www.schoolsystem.edu"
              className="outline-0 border border-gray-200 bg-gray-200 rounded-xl text-sm sm:text-md font-medium py-2 px-2.5"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full sm:w-50 bg-primaryBlue p-2 rounded-xl text-white/90 font-medium hover:bg-primaryBlue2 outline-0"
        >
          Save School Profile
        </button>
      </form>
    </div>
  );
};
