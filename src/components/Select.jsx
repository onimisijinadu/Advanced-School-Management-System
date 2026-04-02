import {
  Check,
  ChevronDown,
} from 'lucide-react';

export const SelectWrapper = ({ children }) => {
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="report_type" className="font-medium text">
          Report Type
        </label>
        <div className="relative w-70">
          <div className="w-full h-9 px-4 flex items-center border border-black/5 bg-black/5 rounded-lg text-black/50 font-medium text-sm">
            Select Report Type
          </div>
          <ChevronDown className="absolute right-2 top-1.5 text-black/40" />
          <div className="bg-white absolute top-9 z-40 w-full border border-black/5 rounded-lg shadow py-1 px-2.5 mt-1">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export const SelectOptions = ({ children, selected }) => {
  return (
    <>
      <p>
        {children}
        {selected ? <Check className="w-4 h-4 text-black/40" /> : ""}
      </p>
    </>
  );
};
