import { useEffect, useState } from "react"

export const useForm = ({
  initialValues, // Objeto con los valores iniciales del formulario.
  onSubmit, // Función que se ejecuta al enviar el formulario.
  callbackValidation, // Función que valida los datos del formulario.
  initialErrors = {}, // Objeto con los errores iniciales del formulario.
  onUpdate = null, // Función que se ejecuta al actualizar el formulario.
}) => {
  const [formData, setFormData] = useState(initialValues)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(initialErrors)

  const handleChange = ({ name, value }) => {
    if ((!name || name === undefined) && (!value || value === undefined)) return
    const keys = name.split('.')
    setFormData(prevState => {
      const newState = { ...prevState }
      let currentLevel = newState
      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          currentLevel[key] = value
        } else {
          currentLevel[key] = { ...currentLevel[key] }
          currentLevel = currentLevel[key]
        }
      })
      return newState
    })
  }
  /** Valida los datos del formulario.
   *
   * @returns {boolean} Retorna false si los datos son válidos, de lo contrario retorna el objeto errores.
  */
  const validateFormData = () => {
    const validationErrors = callbackValidation(formData)
    if (Object.keys(validationErrors).length > 0) {
      return validationErrors
    } else {
      return false
    }
  }
  const handleErrors = (errors) => {
    setErrors(errors)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    const validationErrors = validateFormData()
    if (validationErrors) {
      setLoading(false)
      setErrors(validationErrors)
      throw validationErrors
    } else {
      setErrors({})
    }
    try {
      const response = await onSubmit(formData)
      return response
    } catch (error) {
      const responseErrors = handleRequestErrors(error)
      setErrors(responseErrors)
      throw responseErrors
    } finally {
      setLoading(false)
    }
  }
  const resetFormData = () => {
    setFormData(initialValues)
  }
  useEffect(() => {
    if (onUpdate && typeof onUpdate === 'function') {
      console.log(initialValues, 'initialValues')
      onUpdate(formData)
    }
  }, [formData])
  return {
    formData,
    loading,
    setLoading,
    errors,
    handleErrors,
    handleChange,
    handleSubmit,
    resetFormData
  }
}