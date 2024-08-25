import { Modal } from "../Modal/Modal";
import Form from "../Form/Form";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  loadingButtonText,
  title,
  isOpen,
  onFormSubmit,
  isValid,
  alternateLinkText,
  alternateLinkModal,
  formName,
}) {
  return (
    <Modal
      isOpen={isOpen}
      containerClass="modal__content_type_form-modal"
      modalClass="modal_type_form-modal"
      closeButtonClass="modal__close_type_form-modal"
    >
      <Form
        title={title}
        onFormSubmit={onFormSubmit}
        isValid={isValid}
        loadingButtonText={loadingButtonText}
        buttonText={buttonText}
        alternateLinkText={alternateLinkText}
        alternateLinkModal={alternateLinkModal}
        formName={formName}
      >
        {children}
      </Form>
    </Modal>
  );
}

export default ModalWithForm;
