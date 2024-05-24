import { useState } from "react";
import FormCard from "./Layout/FormCard";
import Button from "./UI/Button";
import Heading from "./UI/Heading";
import Input from "./UI/Input";
import { validateEmail, validateIsEmpty } from "../util/Validation";
import { Link } from "react-router-dom";

const LoginForm = ({ signInHandler }) => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();

    const emailError =
      validateIsEmpty(data.email, "email") || validateEmail(data.email);
    const passwordError = validateIsEmpty(data.password, "password");

    if (emailError || passwordError) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          email: emailError,
          password: passwordError,
        };
      });
      return;
    }

    signInHandler(data);
  };

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

  return (
    <FormCard>
      <form
        className="w-[100%] flex flex-col justify-center items-center"
        onSubmit={submitHandler}
      >
        <Heading title="Login" />

        <Input
          title="Email"
          type="email"
          error={errors?.email}
          value={data.email}
          onChange={(event) => ChangeHandler(event, "email")}
        />
        <Input
          title="Password"
          type="password"
          error={errors?.password}
          value={data.password}
          onChange={(event) => ChangeHandler(event, "password")}
        />

        <p className=" w-[80%] text-right hover:text-blue-900 cursor-pointer ">
          forget password?
        </p>

        <Button title="Log In" type="submit" />

        <p>
          Don't have an account?
          <Link to="/signup">
            <span className=" hover:text-blue-900 cursor-pointer ">
              Sign Up
            </span>
          </Link>
        </p>
      </form>
    </FormCard>
  );
};

export default LoginForm;
