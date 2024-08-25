import { useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../utils/hooks/useFormAndValidation";
import Input from "../Input/Input";
import AppContext from "../../contexts/AppContext";

function RegisterModal({ isOpen, handleRegistration }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const { setSubmitSuccess, submitSuccess } = useContext(AppContext);

  const formName = "sign-up";

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    handleRegistration(values, formName);
  };

  useEffect(() => {
    if (submitSuccess === true) {
      setSubmitSuccess(false);
      resetForm();
    }
  }, [submitSuccess]);

  return (
    <ModalWithForm
      buttonText="Sign Up"
      loadingButtonText="Signing Up..."
      title="Sign Up"
      isOpen={isOpen}
      onFormSubmit={onFormSubmit}
      isValid={isValid}
      alternateLinkText="Sign in"
      alternateLinkModal="sign-in"
      formName={formName}
    >
      <Input
        id="sign-up-email"
        errors={errors.email}
        labelText="Email"
        inputName="email"
        type="email"
        placeholder="Enter email"
        values={values.email}
        handleChange={handleChange}
      />
      <Input
        id="sign-up-password"
        errors={errors.password}
        labelText="Password"
        inputName="password"
        type="password"
        placeholder="Enter password"
        values={values.password}
        handleChange={handleChange}
      />
      <Input
        id="sign-up-username"
        errors={errors.name}
        labelText="Username"
        inputName="name"
        type="text"
        placeholder="Enter your username"
        values={values.name}
        handleChange={handleChange}
      />
    </ModalWithForm>
  );
}

export default RegisterModal;
