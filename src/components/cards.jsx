// export const Cards = ({ children }) => {
//   return <div className="card-grid items-center mt-5">{children}</div>;
// };
export const Card = ({ children, className }) => (
  <div
    className={`bg-cardBackground rounded-xl border border-bordercolor shadow-sm overflow-hidden pt-4 ${className}`}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
export const CardTitle = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const CardContent = ({ children, className }) => (
  <div className={`p-4 pt-0 ${className}`}>{children}</div>
);
