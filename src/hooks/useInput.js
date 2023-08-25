import { useState } from 'react'

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return {
    value,
    error,
    onChange: handleChange,
    setError,
    errorMessage,
    setErrorMessage
  }
}

export default useInput