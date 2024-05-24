import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open }) => {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.closeModal();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className="w-[30%]  rounded-xl">
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
