import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import ErrorModal from "../components/ErrorModal";
import { useSelector } from "react-redux";
import SuccessfullModal from "../components/SuccessfulModal";

const RootLayout = () => {
  const errorState = useSelector((state) => state.modal.errorModal);
  const successfulState = useSelector((state) => state.modal.successfulModal);
  return (
    <main className="h-screen overflow-hidden bg-red-200/15">
      {errorState && <ErrorModal open={errorState} />}
      {successfulState && <SuccessfullModal open={successfulState} />}
      <MainNavigation />

      <Outlet />
    </main>
  );
};

export default RootLayout;
