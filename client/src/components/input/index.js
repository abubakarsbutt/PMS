import style from "./input.module.scss";

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
  disabled,
  className,
  iconClass,
  errorClass,
  inputClass,
  placeholder,
  errorMessage,
  containerClass,
}) => {
  return (
    <>
      <div className={`${style.inputContainer} ${containerClass}`}>
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
            {...(min && { min })}
            {...(max && { max })}
            {...(type && { type })}
            {...(name && { name })}
            {...(value && { value })}
            {...(accept && { accept })}
            {...(onChange && { onChange })}
            {...(readOnly && { readOnly })}
            {...(disabled && { disabled })}
            {...(register && register(name))}
            {...(placeholder && { placeholder })}
            // style={{
            //   border: errorMessage ? "2px solid #ff5050" : "2px solid #D5D5D5",
            //   color: "#000",
            // }}
          />
          {icon && (
            <img
              className={`${style.icon} ${iconClass}`}
              style={{ cursor: "pointer" }}
              src={icon}
              alt=""
              width={28}
              height={28}
              onClick={onClick}
            />
          )}
        </div>
        {errorMessage ? (
          <span className={`${style.errorMessage} ${errorClass}`}>
            {errorMessage}
          </span>
        ) : (
          <span className={style.message}>{infoText}</span>
        )}
      </div>
    </>
  );
};

export default Input;
