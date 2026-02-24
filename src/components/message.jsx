export const Message = ({ text, optionalClassName }) => {
  return (
    <>
      <div
        className={`text-center p-3 font-semibold ${optionalClassName} w-fit fixed top-20 right-10 flex justify-center items-center  opacity-90 rounded-xl pointer-events-none transition-opacity duration-200`}
      >
        {text}
      </div>
    </>
  );
};
