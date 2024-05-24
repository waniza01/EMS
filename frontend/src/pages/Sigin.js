import { useDispatch } from "react-redux";
import LoginForm from "../components/loginForm";
import { useNavigate } from "react-router-dom";
import { AuthActions } from "../store/AuthSlice";
import { API_HANDLER } from "../apis/ApiHandler";
import { ModalActions } from "../store/ModalSlice";

const Signin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch(AuthActions);
  const dispatchModal = useDispatch(ModalActions);

  const signInHandler = async (data) => {
    const resData = await API_HANDLER.LOGIN(data);

    if (resData.data) {
      dispatch(AuthActions.signIn(resData.data.user.role));
      localStorage.setItem("token", resData.data.token);
      navigate("/");
      dispatchModal(ModalActions.openSuccessfulModal());
      dispatchModal(
        ModalActions.setSuccessfulMessage({
          title: "Login SuccessFul",
          message: "you have Login Successfully",
        })
      );
    }

    if (resData.error) {
      dispatchModal(ModalActions.openErrorModal());
      dispatchModal(
        ModalActions.setErrorMessage(
          "Invalid Credential. Please Enter Valid Email And Password.."
        )
      );
    }
  };

  return <LoginForm signInHandler={signInHandler} />;
};

export default Signin;
