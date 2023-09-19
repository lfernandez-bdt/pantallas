import * as React from "react"
import '@/styles/stylesComponents/FlexInput.css'
import { BiCheckSquare, BiPencil, BiSearch, BiSquare } from "react-icons/bi"

function Input({
  type = "text",
  label = '',
  value,
  name = label,
  placeholder,
  style = {},
  error,
  disabled = false,
  onChange = null,
  InputIcon = null,
  editIcon = false,
  displaylabel = true,
  errorMessage,
  readonly = false
}) {

  return (
    <div className="inputWrapper">
      {displaylabel && <label htmlFor={label}>{label}</label>}
      <div className="inputContainer">
        {InputIcon && <InputIcon />}
        <input
          type={type}
          value={value}
          name={name}
          style={style}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          readOnly={readonly}
        />
        {editIcon && <BiPencil />}
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
        <BiSearch className="icon" />
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
        <BiSearch className="icon" />
      </div>
    </div>
  )
}

const CheckInput = ({ label, checked = false }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    gap: '1rem',
  }}>
    <span>{label}</span>
    {
      checked
      ? <BiCheckSquare />
      : <BiSquare />
    }
  </div>
)

export {
  Input,
  InputSeach,
  CheckInput
}