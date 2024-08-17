import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import "./Form.css";

function Form({
  formName,
  title,
  onFormSubmit,
  isValid,
  loadingButtonText,
  buttonText,
  alternateLinkText,
  alternateLinkModal,
  children,
}) {
  const { setActiveModal, isLoading, formError } = useContext(AppContext);

  const openLinkModal = (evt) => {
    evt.preventDefault();
    setActiveModal(alternateLinkModal);
  };

  return (
    <>
      <h2 className="form__title">{title}</h2>
      <form
        action=""
        autoComplete="on"
        className="form__element"
        onSubmit={onFormSubmit}
      >
        {children}
        <button className="form__submit" type="submit" disabled={!isValid}>
          {`${isLoading === true ? `${loadingButtonText}` : `${buttonText}`}`}
        </button>
        <button className="form__alternate">
          or{" "}
          <span onClick={openLinkModal} className="form__alternate-span">
            {alternateLinkText}
          </span>
        </button>
        <p className="form__error">{formError[formName]}</p>
      </form>
    </>
  );
}

export default Form;
