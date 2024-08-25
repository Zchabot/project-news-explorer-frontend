import { useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../utils/hooks/useFormAndValidation";
import Input from "../Input/Input";
import AppContext from "../../contexts/AppContext";

function LoginModal({ isOpen, handleLogin }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const { setSubmitSuccess, submitSuccess } = useContext(AppContext);

  const formName = "sign-in";

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(values, formName);
  };

  useEffect(() => {
    if (submitSuccess === true) {
      setSubmitSuccess(false);
      resetForm();
    }
  }, [submitSuccess]);

  return (
    <ModalWithForm
      buttonText="Sign In"
      loadingButtonText="Signing In..."
      isOpen={isOpen}
      title="Sign In"
      onFormSubmit={onFormSubmit}
      isValid={isValid}
      alternateLinkText="Sign up"
      alternateLinkModal="sign-up"
      formName={formName}
    >
      <Input
        id="sign-in-email"
        errors={errors.email}
        labelText="Email"
        inputName="email"
        type="email"
        placeholder="Enter email"
        values={values.email}
        handleChange={handleChange}
      />
      <Input
        id="sign-in-password"
        errors={errors.password}
        labelText="Password"
        inputName="password"
        type="password"
        placeholder="Enter password"
        values={values.password}
        handleChange={handleChange}
      />
    </ModalWithForm>
  );
}

export default LoginModal;
