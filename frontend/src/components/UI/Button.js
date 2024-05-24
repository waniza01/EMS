const Button = ({
  children,
  customStyles,
  title,
  onClick,
  type = "button",
  textonly,
}) => {
  const cssClass = textonly
    ? "hover:text-blue-300 text-xl  "
    : "w-[60%] bg-red-900 text-white text-xl p-3 font-medium hover:bg-red-800 ";
  return (
    <button
      className={`${cssClass} rounded-full text-center my-4  ${customStyles}`}
      onClick={onClick}
      type={type}
    >
      {title || children}
    </button>
  );
};

export default Button;
