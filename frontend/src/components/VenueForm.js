import FilePicker from "./UI/FilePicker";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { useState } from "react";
import { validateContact, validateIsEmpty } from "../util/Validation";
import { useSelector } from "react-redux";

const VenueForm = ({ title, item, submitHandler }) => {
  const [data, setData] = useState(item);
  const [errors, setErrors] = useState({
    name: "",
    place: "",
    cost: "",
    contact: "",
    image: "",
  });

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
    const placeError = validateIsEmpty(data?.place, "Place");
    const contactError =
      validateIsEmpty(data?.contact, "Contact") ||
      validateContact(data?.contact);
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
    if (placeError) {
      setErrors((prevState) => {
        return {
          ...prevState,
          place: placeError,
        };
      });

      return;
    }
    if (contactError) {
      setErrors((prevState) => {
        return {
          ...prevState,
          contact: contactError,
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
      className="grid  grid-cols-2 md:w-[40%] justify-center items-center md:h-96 sm:max-h-max"
      onSubmit={validateInputAndSubmitHandler}
    >
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
        title={`${title} Place`}
        name="place"
        customStyles={{
          titleTextColor: "text-red-200",
          errorTextColor: "text-white",
        }}
        value={data?.place || ""}
        onChange={(e) => changeHandler(e.target.value, "place")}
        error={errors.place}
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
        title={`${title} Contact`}
        name="contact"
        customStyles={{
          titleTextColor: "text-red-200",
          errorTextColor: "text-white",
        }}
        type="number"
        value={data?.contact || ""}
        onChange={(e) => changeHandler(e.target.value, "contact")}
        error={errors.contact}
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

      <Input type="hidden" name="id" value={data?.id} className="hidden" />

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
      <div className="col-span-1" />
      {role === "admin" && (
        <Button
          type="submit"
          title="Submit"
          customStyles="my-0 col-span-full justify-self-center"
        />
      )}
    </form>
  );
};

export default VenueForm;
