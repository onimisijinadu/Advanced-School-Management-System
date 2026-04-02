import { Buttons } from "./Button";

export const DashboardCard = ({
  title,
  icons: Icon,
  actionText,
  onActionClick,
  children,
  fullWidth,
  btnId,
  btnIcon: BtnIcon,
}) => {
  return (
    <article className="flex flex-col bg-white gap-5 rounded-xl border border-gray-300 p-5 my-6 h-max">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">{title}</h2>
        {Icon && <Icon className="text-gray-500 w-5 h-5" />}
        {actionText && (
          <Buttons
            text={actionText}
            action={onActionClick}
            optionalClassName={`flex justify-center text-lg bg-trasparent items-center gap-2 p-2 rounded-xl hover:bg-gray-100 cursor-pointer font-semibold text-gray-900 transition-colors`}
            icon={BtnIcon && <BtnIcon className="text-gray-500 w-5 h-5" />}
            fullWidth={fullWidth}
            id={btnId}
          />
          // <div
          //   onClick={onActionClick}
          //   className=""
          // >
          //   <p>{actionText}</p>
          //   {/* You can pass an icon here or hardcode the Arrow icon */}
          // </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-3">{children}</div>
    </article>
  );
};
