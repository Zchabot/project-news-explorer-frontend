import { Modal } from "../Modal/Modal";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import "./RegisteredModal.css";

function RegisteredModal({ isOpen }) {
  const { setActiveModal } = useContext(AppContext);

  const onClick = () => {
    setActiveModal("sign-in");
  };

  return (
    <Modal isOpen={isOpen} containerClass="registered__content">
      <p className="registered__message">
        Registration successfully completed!
      </p>
      <button type="button" onClick={onClick} className="registered__sign-in">
        Sign in
      </button>
    </Modal>
  );
}

export default RegisteredModal;
