import { useEffect, useContext } from "react";
import AppContext from "../../contexts/AppContext";
import "./Modal.css";

export const Modal = ({
  isOpen,
  modalClass,
  containerClass,
  closeButtonClass,
  children,
}) => {
  const { closeActiveModal } = useContext(AppContext);
  const onClose = closeActiveModal;

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${modalClass} ${isOpen && "modal_opened"}`}
      onClick={handleOverlay}
    >
      <div className={`modal__content ${containerClass}`}>
        {children}
        <button
          className={`modal__close ${closeButtonClass}`}
          type="button"
          onClick={onClose}
        />
      </div>
    </div>
  );
};
