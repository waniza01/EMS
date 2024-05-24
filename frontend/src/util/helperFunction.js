import { redirect } from "react-router-dom";

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const isLoggedIn = () => {
  const isAuthenticate = getAuthToken();

  if (!isAuthenticate) {
    return redirect("/signin");
  }
  return null;
};
