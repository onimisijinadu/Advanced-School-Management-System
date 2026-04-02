export const Modal = ({ children, overly }) => {
  return (
    <>
      {overly}
      <div className="flex justify-center items-center fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-screen sm:w-fit h-fit bg-background shadow-2xs rounded-2xl">
        {children}
      </div>
    </>
  );
};

export const ModalForm = ({ children, text, action }) => {
  return (
    <>
      <form
        onSubmit={action}
        className="flex flex-col py-4 px-6 gap-3 bg-white rounded-2xl w-full"
      >
        {children}
        <button
          type="submit"
          className="bg-primaryBlue p-2 rounded-xl text-white/90 font-medium hover:bg-primaryBlue2 outline-0"
        >
          {text}
        </button>
      </form>
    </>
  );
};

export const FormHeader = ({ title, subtitle, icon }) => {
  return (
    <div className="mb-3 flex justify-between items-center gap-15">
      <div>
        <p className="font-semibold text-lg text-textColor3">
          {/* {Register New Student} */}
          {title}
        </p>
        <p className="text-sm text-textColor2">
          {subtitle}
          {/* Enter student information t create a new enrollment */}
        </p>
      </div>
      <div>{icon}</div>
    </div>
  );
};

export const FormInputs = ({ children }) => {
  return <div className="flex flex-col gap-2 w-full">{children}</div>;
};
