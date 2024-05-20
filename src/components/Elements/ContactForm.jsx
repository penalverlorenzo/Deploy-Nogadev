import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { baseUrl } from "../../config";
import { ApiServices } from '../../services/Api.service';

// import { notify} from '../../utils/notify';
import { useForm } from "../../hooks/UseForm";

const service = new ApiServices(baseUrl, '/contacts');

export const ContactForm = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    country: "",
    message: "",
    // region: "",
  };
  const onSubmit = async () => {
    try {
      let response = await service.create(formData);
      if (response.statusCode === 409) {
        const id = response.message.split('ID: ')[1]
        response = await service.update(id, formData);
      }
  
      return response;
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      throw error;
    }
  };
  const {
    formData,
    // loading,
    // setLoading,
    handleChange,
    handleSubmit,
    enabledSubmit
  } = useForm({initialValues, onSubmit, redirectOnFinish: '/thanks'})


  

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6 mt-12" id="contact">
      <ToastContainer />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Form</h2>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row w-full md:gap-5 md:items-center">
          <input
            type="text"
            className="w-full inputForm"
            placeholder="First name"
            name="firstname"
            value={formData.firstname}
            onChange={({ target: {name, value} }) => handleChange({name, value})}
            required
          />
          <input
            type="text"
            className="w-full inputForm"
            placeholder="Last name"
            name="lastname"
            value={formData.lastname}
            onChange={({ target: {name, value} }) => handleChange({name, value})}
            required
          />
        </div>
        <input
          type="email"
          className="inputForm"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={({ target: {name, value} }) => handleChange({name, value})}
          required
        />
        <input
          type="text"
          className="inputForm"
          placeholder="Company"
          name="company"
          value={formData.company}
          onChange={({ target: {name, value} }) => handleChange({name, value})}
        />
        <input
          type="text"
          className="inputForm"
          placeholder="Country/Region"
          name="country"
          value={formData.country}
          onChange={({ target: {name, value} }) => handleChange({name, value})}
        />
        <textarea
          name="message"
          className="inputForm"
          placeholder="Message"
          value={formData.message}
          onChange={({ target: {name, value} }) => handleChange({name, value})}
          required
        ></textarea>

        <button
          type="submit"
          className="mx-auto min-w-40 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md my-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 disabled:opacity-40"
          disabled={!enabledSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
