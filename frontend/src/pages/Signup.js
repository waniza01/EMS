import { useDispatch } from "react-redux";
import { API_HANDLER } from "../apis/ApiHandler";
import SignupForm from "../components/SignupForm";
import { ModalActions } from "../store/ModalSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(ModalActions);

  const SignUpHandler = async (data) => {
    const resData = await API_HANDLER.SIGNUP(data);
    if (resData.error) {
      dispatch(ModalActions.openErrorModal());
      dispatch(
        ModalActions.setErrorMessage(
          resData.error?.response?.data?.message || resData.error?.message
        )
      );
      return;
    }
    dispatch(ModalActions.openSuccessfulModal());
    dispatch(
      ModalActions.setSuccessfulMessage({
        title: "Registered!!",
        message: "You have registered Successfully..",
      })
    );
    navigate("/signin");
  };
  return <SignupForm signUpHandler={SignUpHandler} />;
};

export default Signup;
