export const Buttons = ({
  text,
  action,
  optionalClassName,
  icon,
  typeOf,
  fullWidth,
  id,
}) => {
  return (
    <>
      <div className={`text-xl ${fullWidth}`}>
        <button
          onClick={action}
          className={`flex outline-0 justify-center items-center cursor-pointer ${optionalClassName}`}
          type={typeOf}
          id={id}
        >
          {text} {icon}
        </button>
      </div>
    </>
  );
};
