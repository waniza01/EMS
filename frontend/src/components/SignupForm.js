import { useState } from "react";
import Dropdown from "./Dropdown";
import FormCard from "./Layout/FormCard";
import Button from "./UI/Button";
import Heading from "./UI/Heading";
import Input from "./UI/Input";
import {
  matchedPassword,
  validateEmail,
  validateIsEmpty,
  validateMobile,
} from "../util/Validation";
import { Link } from "react-router-dom";

const SignupForm = ({ signUpHandler }) => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    name: "",
    gender: "",
    address: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const ChangeHandler = (event, identifer) => {
    setData((prevData) => {
      return {
        ...prevData,
        [identifer]: event.target.value,
      };
    });

    setErrors((prevError) => {
      return {
        ...prevError,
        [identifer]: "",
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const nameError = validateIsEmpty(data.name, "Name");
    const addressError = validateIsEmpty(data.address, "Address");
    const mobileError =
      validateIsEmpty(data.mobile, "Mobile No") || validateMobile(data.mobile);
    const genderError = validateIsEmpty(data.gender, "Gender");
    const passwordError = validateIsEmpty(data.password, "Password");
    const confirmPasswordError =
      validateIsEmpty(data.confirmPassword, "Confirm Password") ||
      matchedPassword(data.password, data.confirmPassword);

    const emailError =
      validateIsEmpty(data.email, "email") || validateEmail(data.email);

    if (
      nameError ||
      addressError ||
      mobileError ||
      genderError ||
      passwordError ||
      confirmPasswordError ||
      emailError
    ) {
      setErrors((prevError) => {
        return {
          ...prevError,
          name: nameError,
          address: addressError,
          mobile: mobileError,
          gender: genderError,
          password: passwordError,
          confirmPassword: confirmPasswordError,
          email: emailError,
        };
      });

      return;
    }
    signUpHandler(data);
  };

  const resetHandler = () => {
    setData({
      name: "",
      gender: "",
      address: "",
      mobile: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <FormCard>
      <form
        className="w-[100%] flex flex-col justify-center items-center  "
        onSubmit={submitHandler}
      >
        <Heading title="Resigration" />
        <div className="w-[100%] grid grid-cols-2 place-items-center p-2">
          <Input
            title="Name"
            onChange={(e) => ChangeHandler(e, "name")}
            value={data.name}
            error={errors.name}
          />

          <Input
            title="Email"
            type="email"
            value={data.email}
            onChange={(e) => ChangeHandler(e, "email")}
            error={errors.email}
          />

          <Dropdown
            value={data.gender}
            values={["male", "female", "others"]}
            title="Gender"
            onChange={(e) => ChangeHandler(e, "gender")}
            error={errors.gender}
          />

          <Input
            title="Password"
            type="password"
            onChange={(e) => ChangeHandler(e, "password")}
            value={data.password}
            error={errors.password}
          />

          <Input
            input="textarea"
            title="Address"
            onChange={(e) => ChangeHandler(e, "address")}
            value={data.address}
            error={errors.address}
          />

          <Input
            title="ConfirmPassword"
            type="password"
            onChange={(e) => ChangeHandler(e, "confirmPassword")}
            value={data.confirmPassword}
            error={errors.confirmPassword}
          />

          <Input
            title="Mobile"
            type="number"
            value={data.mobile}
            onChange={(e) => ChangeHandler(e, "mobile")}
            error={errors.mobile}
          />
        </div>
        <div className="w-[50%] flex gap-2">
          <Button title="Submit" type="submit" />
          <Button title="Cancel" type="reset" onClick={resetHandler} textonly />
        </div>

        <p>
          Have an account?
          <Link to="/signin">
            <span className=" hover:text-blue-900 cursor-pointer ">
              Sign In
            </span>
          </Link>
        </p>
      </form>
    </FormCard>
  );
};

export default SignupForm;
