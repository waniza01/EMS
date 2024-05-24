import FilePicker from "./UI/FilePicker";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { useState } from "react";
import { validateIsEmpty } from "../util/Validation";
import { useSelector } from "react-redux";

const FoodEquipForm = ({ title, item, submitHandler }) => {
  const [data, setData] = useState(item);
  const [errors, setErrors] = useState({ name: "", cost: "", image: "" });

  const role = useSelector((state) => state.auth.role);

  const changeHandler = (value, identifier) => {
    setData((prevState) => {
      return {
        ...prevState,
        [identifier]: value,
      };
    });

    setErrors((prevState) => {
      return {
        ...prevState,
        [identifier]: "",
      };
    });
  };

  const validateInputAndSubmitHandler = (event) => {
    event.preventDefault();
    const nameError = validateIsEmpty(data?.name, "Name");
    const costError = validateIsEmpty(data?.cost, "Cost");
    const imageError = !data?.image && validateIsEmpty(data?.image, "Image");
    if (nameError) {
      setErrors((prevState) => {
        return {
          ...prevState,
          name: nameError,
        };
      });

      return;
    }
    if (costError) {
      setErrors((prevState) => {
        return {
          ...prevState,
          cost: costError,
        };
      });

      return;
    }

    if (imageError) {
      setErrors((prevState) => {
        return {
          ...prevState,
          image: imageError,
        };
      });

      return;
    }

    submitHandler(data);
  };
  return (
    <form
      className="flex flex-col w-[20%] justify-center items-center"
      onSubmit={validateInputAndSubmitHandler}
    >
      <Input type="hidden" name="id" value={data?.id} />
      <Input
        title="ID"
        name="id"
        customStyles={{
          titleTextColor: "text-red-200",
        }}
        customInputField={{ disabled: true }}
        value={data?.id || ""}
      />

      <Input
        title={`${title} Name`}
        name="name"
        customStyles={{
          titleTextColor: "text-red-200",
          errorTextColor: "text-white",
        }}
        value={data?.name || ""}
        onChange={(e) => changeHandler(e.target.value, "name")}
        error={errors.name}
      />

      <Input
        title={`${title} Cost`}
        type="number"
        customStyles={{
          titleTextColor: "text-red-200",
          errorTextColor: "text-white",
        }}
        value={data?.cost || ""}
        name="cost"
        onChange={(e) => changeHandler(e.target.value, "cost")}
        error={errors.cost}
      />

      <FilePicker
        name="image"
        title={`${title} Image`}
        customStyles={{
          titleTextColor: "text-red-200",
          bgColor: "bg-white",
          errorTextColor: "text-white",
        }}
        file={data?.image}
        onChange={(value) => changeHandler(value, "image")}
        error={errors.image}
      />

      {role === "admin" && (
        <Button type="submit" title="Submit" customStyles="my-0 " />
      )}
    </form>
  );
};

export default FoodEquipForm;
