import { useState } from "react";
import noPhoto from "../../assets/noPhoto.jpg";

const FilePicker = ({ name, customStyles, title, file, error, onChange }) => {
  const Image = file && file.name && URL.createObjectURL(file);
  const [image, setImage] = useState(Image);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      onChange(event.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col justify-start  w-[80%] h-64 ">
      <label
        className={`text-xl font-semibold pb-1 ${customStyles?.titleTextColor}`}
      >
        {title}
      </label>
      <div className="w-full h-[65%] overflow-clip rounded-md ">
        <img
          alt="input preview"
          src={image || noPhoto}
          className="w-full h-[90%] object-cover rounded-md"
        />
      </div>
      <input
        className={`md:p-1.5 sm:p-1  outline-none  md:border-2  md:border-slate-600 rounded-md   ${customStyles?.bgColor}`}
        type="file"
        onChange={onImageChange}
        name={name}
      />
      {error && (
        <p className={`text-red-950 ${customStyles.errorTextColor}`}>{error}</p>
      )}
    </div>
  );
};

export default FilePicker;
