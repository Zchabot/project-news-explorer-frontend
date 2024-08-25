import "./Input.css";

function Input({
  id,
  errors,
  labelText,
  inputName,
  type,
  placeholder,
  values,
  handleChange,
  minLength,
  maxLength,
}) {
  return (
    <label htmlFor={id} className="input__label">
      {labelText}
      <input
        type={type}
        className="input__element"
        id={id}
        placeholder={placeholder}
        value={`${values ? `${values}` : ""}`}
        name={inputName}
        onChange={handleChange}
        autoComplete="on"
        minLength={minLength || ""}
        maxLength={maxLength || ""}
        required
      ></input>
      <p className="input__error">{errors}</p>
    </label>
  );
}

export default Input;
