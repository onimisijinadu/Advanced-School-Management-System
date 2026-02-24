export const ValidationMessage = ({ children, optionalClassName }) => {
  return (
    <>
      <div className={optionalClassName}>{children}</div>
    </>
  );
};
