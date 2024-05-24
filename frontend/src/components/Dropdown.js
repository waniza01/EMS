import React from "react";

const Dropdown = ({ value, onChange, values, title, error }) => {
  return (
    <div className="flex flex-col justify-start py-1 w-[80%] ">
      <label className="text-xl font-semibold pb-1">{title}</label>
      <select
        className="block w-full p-1.5 outline-none  border-2 border-slate-600 rounded-md focus:outline-none"
        name={value}
        value={value}
        onChange={onChange}
      >
        <option value="">{title}</option>
        {values.map((value) => (
          <option key={value} value={value}>
            {value.toUpperCase()}
          </option>
        ))}
      </select>
      {error && <p className="text-red-950">{error}</p>}
    </div>
  );
};

export default Dropdown;
