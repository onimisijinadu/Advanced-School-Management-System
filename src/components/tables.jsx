export const Tables = ({ children }) => {
  return (
    <>
      <div className=" w-full bg-cardBackground  flex flex-col gap-5 py-5 px-10 my-9 rounded-xl">
        {children}
      </div>
    </>
  );
};
export const TableCard = ({ children }) => {
  return (
    <>
      <div className="w-full card-grid overflow-x-auto">
        <table className="text-left  table-auto min-w-full">{children}</table>
      </div>
    </>
  );
};

export const TableTitle = ({ children, className }) => {
  return (
    <>
      <div className={`py-3 ${className}`}>{children}</div>
    </>
  );
};

export const TableHeader = ({ children }) => {
  return (
    <>
      <thead>{children}</thead>
    </>
  );
};
export const TableBody = ({ children }) => {
  return (
    <>
      <tbody>{children}</tbody>
    </>
  );
};
