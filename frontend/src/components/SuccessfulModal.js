import { useDispatch, useSelector } from "react-redux";
import Modal from "./UI/Modal";
import { ModalActions } from "../store/ModalSlice";

const SuccessfullModal = ({ open }) => {
  const dispatch = useDispatch(ModalActions);
  setTimeout(() => {
    dispatch(ModalActions.closeSuccessModal());
  }, 800);
  const data = useSelector((state) => state.modal.successfulMessage);

  return (
    <Modal open={open}>
      <div className="w-full text-left flex flex-col">
        <h1 className="text-2xl font-bold bg-green-900/80 p-2">{data.title}</h1>
        <p className="p-2 pb-8">{data.message}</p>
      </div>
    </Modal>
  );
};

export default SuccessfullModal;
