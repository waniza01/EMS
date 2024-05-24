import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const MainNavigation = ({ children }) => {
  const isAuthenticate = useSelector((state) => state.auth.isLogin);
  const cssNavBar = "text-xl text-stone-100 font-semibold hover:text-stone-300";
  const activeCss = "text-stone-300 underline";
  return (
    <header className="bg-red-900/95 rounded-b-lg flex justify-between items-center">
      <h1 className="bg-gradient-to-r from-red-600 via-stone-300 to-red-600 text-transparent bg-clip-text p-4 text-3xl font-bold  font-mono italic">
        Event Management System
      </h1>
      <nav>
        <ul className="flex gap-8 mr-4">
          <li className={cssNavBar}>
            <NavLink
              className={({ isActive }) => (isActive ? activeCss : undefined)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          {isAuthenticate ? (
            <>
              <li className={cssNavBar}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeCss : undefined
                  }
                  to="/food"
                >
                  Food
                </NavLink>
              </li>
              <li className={cssNavBar}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeCss : undefined
                  }
                  to="/venue"
                >
                  Venue
                </NavLink>
              </li>
              <li className={cssNavBar}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeCss : undefined
                  }
                  to="/equipment"
                >
                  Equipment
                </NavLink>
              </li>
              {/* <li className={cssNavBar}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeCss : undefined
                  }
                  to="/viewBookings"
                >
                  Bookings
                </NavLink>
              </li> */}
              <li className={cssNavBar}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeCss : undefined
                  }
                  to="/logout"
                >
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <li className={cssNavBar}>
              <NavLink
                className={({ isActive }) => (isActive ? activeCss : undefined)}
                to="/signin"
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
