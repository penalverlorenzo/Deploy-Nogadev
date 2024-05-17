import { useState } from "react";
import { loadingNotify, notify, stopNotify } from "../utils/notify";
import { useNavigate } from "react-router-dom";

export const useForm = ({
  initialValues,
  onSubmit,
  redirectOnFinish = null,
}) => {
  const [formData, setFormData] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [enabledSubmit, setEnabledSubmit] = useState(true);
  // const [errors, setErrors] = useState(initialErrors)
  const navigate = useNavigate();
  const handleChange = ({ name, value }) => {
    // console.log({name, value});
    if ((!name || name === undefined) && (!value || value === undefined))
      return;
    setFormData((prevState) => {
      console.log({ prevState });
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnabledSubmit(false);
    // estado de carga true
    // validar errores
    // si los errores existen terminar el loading
    // ejecutar el onsubmit y retornar la respuesta
    // el loader se frena
    const id = loadingNotify("Sending mail");

    try {
      await onSubmit();
      notify("Submitted successfully!", "success");
      if (redirectOnFinish) {
        navigate(redirectOnFinish);
      }
      setFormData(initialValues);
    } catch (error) {
      notify("Error submitting form, please try again later", "error");
    } finally {
      setEnabledSubmit(true);
      stopNotify(id);
    }
  };

  return {
    formData,
    loading,
    setLoading,
    handleChange,
    handleSubmit,
    enabledSubmit,
  };
};
