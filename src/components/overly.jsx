export const Overly = ({ isOpen, close }) => {
  return (
    <div
      onClick={close}
      className={`${isOpen ? "block" : "hidden"} inset-0 z-20 absolute w-full h-full bg-black/10`}
    ></div>
  );
};
