const Input = ({
  min,
  max,
  type,
  name,
  icon,
  label,
  value,
  accept,
  onClick,
  readOnly,
  infoText,
  register,
  onChange,
  isDisable,
  className,
  iconClass,
  errorClass,
  inputClass,
  placeholder,
  errorMessage,
}) => {
  return (
    <>
      <div className="inputContainer">
        {label && (
          <label
            style={{
              color: errorMessage ? "#ff5050" : " #252733",
            }}
          >
            {label}
          </label>
        )}
        <div style={{ position: "relative" }}>
          <input
            className={inputClass}
            type={type || "text"}
            placeholder={placeholder || ""}
            name={name || ""}
            min={min && min}
            max={max && max}
            value={value && value}
            onChange={onChange && onChange}
            readOnly={readOnly || false}
            accept={accept && accept}
            disabled={isDisable || false}
            {...(register && register(name))}
            // style={{
            //   border: errorMessage ? "2px solid #ff5050" : "2px solid #D5D5D5",
            //   color: "#000",
            // }}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
