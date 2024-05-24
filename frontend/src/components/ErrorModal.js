import { useDispatch, useSelector } from "react-redux";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import { ModalActions } from "../store/ModalSlice";

const ErrorModal = ({ open }) => {
  const message = useSelector((state) => state.modal.errorMessage);

  const dispatch = useDispatch(ModalActions);

  const closeModalHandler = () => {
    dispatch(ModalActions.closeErrorModal());
  };
  return (
    <Modal open={open}>
      <div className="w-full text-left flex flex-col">
        <h1 className="text-2xl font-bold bg-red-900/80 p-2">ERROR</h1>
        <p className="p-2">{message}</p>
        <Button
          textonly
          customStyles="hover:text-red-800 self-end m-4"
          onClick={closeModalHandler}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default ErrorModal;
