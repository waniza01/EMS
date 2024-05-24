import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Signin from "../pages/Sigin";
import Signup from "../pages/Signup";
import Food from "../pages/Food";
import Venue from "../pages/Venue";
import Equipment from "../pages/Equipment";
import Logout from "../pages/Logout";
import ViewBookings from "../pages/ViewBooking";
import { isLoggedIn } from "../util/helperFunction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
      {
        path: "/",
        loader: isLoggedIn,
        children: [
          { path: "food", element: <Food /> },
          { path: "venue", element: <Venue /> },
          { path: "equipment", element: <Equipment /> },
          { path: "logout", element: <Logout /> },
          { path: "viewBookings", element: <ViewBookings /> },
        ],
      },
    ],
  },
]);
