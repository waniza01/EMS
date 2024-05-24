import { Link } from "react-router-dom";
import Button from "./UI/Button";
import homeImage from "../assets/home.jpg";

const Welcome = ({}) => {
  return (
    <div className=" flex justify-center items-center h-[100%] gap-12">
      <div className=" w-[30%] flex flex-col justify-center items-center gap-2">
        <h1 className="font-bold md:text-5xl sm:4xl">WELCOME !!!</h1>
        <h3 className="font-semibold md:text-2xl">Event Management</h3>
        <p className="md:font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ultricies gravida metus, sit amet feugiat ante fringilla in. Fusce vel
          quam augue. Pellentesque quis tortor ultricies, eleifend quam id,
          rutrum lacus. Sed nec sollicitudin quam. Nullam maximus ex et est
          sodales ullamcorper. Quisque facilisis est vitae tincidunt consequat.
        </p>
        <div className="w-[100%] text-center">
          <Link to="/signin">
            <Button>Sign In</Button>
          </Link>
        </div>
      </div>

      <div className="rounded-full md:w-[30%] sm:w-[40%] overflow-hidden">
        <img src={homeImage} alt="some event pic" />
      </div>
    </div>
  );
};

export default Welcome;
