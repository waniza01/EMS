const FormCard = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-red-200/30 flex flex-col justify-center items-center w-[40%] p-4 rounded-md shadow-red-600">
        {children}
      </div>
    </div>
  );
};

export default FormCard;
