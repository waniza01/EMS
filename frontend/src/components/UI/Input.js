const Input = ({
  title,
  name,
  type = "text",
  customInputField,
  customStyles,
  onChange,
  value,
  Input = "input",
  error,
}) => {
  return (
    <div className="flex flex-col justify-start py-1 w-[80%] ">
      <label
        className={`text-xl font-semibold pb-1 ${customStyles?.titleTextColor}`}
      >
        {title}
      </label>
      <Input
        className={`p-1.5 outline-none  border-2 border-slate-600 rounded-md ${customStyles?.bgColor}`}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        {...customInputField}
      />

      {error && (
        <p className={`text-red-950 ${customStyles?.errorTextColor}`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
