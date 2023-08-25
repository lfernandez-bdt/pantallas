import * as React from "react"
import '@/styles/stylesComponents/Input.css'
import { Icon } from "./Icon"

function Input({ type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  icon,
  editIcon = false,
  displaylabel = true,
  errorMessage,
}) {
  
  return (
    <div className="inputWrapper">
      {
        displaylabel ?
          <label htmlFor={label}>{label}</label>

          : null
      }
      <div className="inputContainer">
        <Icon
          className="icon"
          dataTestId={`icon-${name}`}
          type={icon}
        />
        <input
          type={type}
          id={label}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
        />
        {
          editIcon ?
            <Icon
              className="icon"
              dataTestId={`icon-Edit`}
              type="edit"
            />
            : null
        }

      </div>

      {error && <p className="error">{errorMessage}</p>}
    </div>
  )
}

function InputSeach({
  value,
  name,
  placeholder,
  onChange,
}) {
  return (
      <div className="inputContainerSeach">
        <div className="containerIcon">
          <Icon
            className="icon"
            dataTestId={`icon-${name}`}
            type={"seach"}
          />
        </div>

        <input
          type={"text"}
          id={"seach"}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          disabled={true}
        />
        <div className="containerIcon">
          <Icon
            className="icon"
            dataTestId={`icon-${name}`}
            type={"seach"}
          />
        </div>
      </div>
  )
}

export {
  Input,
  InputSeach
}