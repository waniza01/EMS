const ManagementCard = ({ title, children }) => {
  return (
    <div className="p-4 px-8 flex flex-col">
      <h1 className="text-3xl text-white font-extrabold underline self-center">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default ManagementCard;
