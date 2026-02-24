export const Tables = ({ desc, desc_2, tableHeads, tableBody }) => {
  return (
    <>
      <div className=" w-full bg-white  flex flex-col gap-5 py-5 px-10 my-9 rounded-xl">
        <div className="flex flex-wrap sm:flex-nowrap gap-3 justify-between items-center">
          <p className="font-semibold text-xl">{desc}</p>
          {desc_2}
        </div>
        <div className="w-full card-grid overflow-x-auto">
          <table className="text-left  table-auto min-w-full">
            <thead>
              {tableHeads}
              {/* <tr className=" border-b border-slate-200">{tableHeads} </tr>
              <tr className=" border-b border-slate-200">{tableHeads} </tr> */}
            </thead>
            <tbody>{tableBody}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};
