import { useState } from "react"
import { loadingNotify, notify, stopNotify } from "../utils/notify"

export const useForm = ({
  initialValues,
  onSubmit
}) => {
  const [formData, setFormData] = useState(initialValues)
  const [loading, setLoading] = useState(false)
  // const [errors, setErrors] = useState(initialErrors)

  const handleChange = ({ name, value }) => {
    // console.log({name, value});
    if ((!name || name === undefined) && (!value || value === undefined)) return
    setFormData(prevState => {
      console.log({prevState});
      return {...prevState, [name]: value}
    });
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // estado de carga true
    // validar errores
    // si los errores existen terminar el loading
    // ejecutar el onsubmit y retornar la respuesta
    // el loader se frena
    const id = loadingNotify('Sending mail');
    const data = await onSubmit();

    stopNotify(id);

    if (data?.status === 'error') {
      notify('Error submitting form, please try again later', 'error');
    } else {
      notify('Submitted successfully!', 'success');
      // navigate('/thanks');
    }
    setFormData(initialValues);
  };
  
  return {
    formData,
    loading,
    setLoading,
    handleChange,
    handleSubmit
  }
}