import { useSelector } from "react-redux";
import ViewBookings from "./ViewBooking";
import Welcome from "../components/Welcome";

const Home = ({}) => {
  const isAuthenticate = useSelector((state) => state.auth.isLogin);

  return <>{isAuthenticate ? <ViewBookings /> : <Welcome />}</>;
};

export default Home;
