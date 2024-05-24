import { useDispatch } from "react-redux";
import { AuthActions } from "../store/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = () => {
  const dispatch = useDispatch(AuthActions);
  const navigate = useNavigate();
  localStorage.removeItem("token");

  useEffect(() => {
    dispatch(AuthActions.logout());
    navigate("/signin");
  }, [dispatch, navigate]);

  return;
};

export default Logout;
