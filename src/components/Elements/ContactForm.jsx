import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import { notify, loadingNotify } from '../../utils/notify';

import { baseUrl } from "../../config";

export const ContactForm = () => {
  const navigate = useNavigate()
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    country: "",
    message: "",
    // region: "",
  };

  const [formData, setFormData] = useState(initialState);
  // const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log({ formData });
  };

  const postData = async () => {
    try {
      const res = await fetch(`${baseUrl}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log({ res, data });
      return data;
    } catch (error) {
      notify('Error submitting form, please try again later', 'error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    loadingNotify('Sending mail');

    const data = await postData();

    if (data.status === 'error') {
      notify('Error submitting form, please try again later', 'error');
    } else {
      notify('Submitted successfully!', 'success');
      navigate('/thanks')
    }
    setFormData(initialState);
  };

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
            onChange={({ target }) => handleChange(target.name, target.value)}
            required
          />
          <input
            type="text"
            className="w-full inputForm"
            placeholder="Last name"
            name="lastname"
            value={formData.lastname}
            onChange={({ target }) => handleChange(target.name, target.value)}
            required
          />
        </div>
        <input
          type="email"
          className="inputForm"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={({ target }) => handleChange(target.name, target.value)}
          required
        />
        <input
          type="text"
          className="inputForm"
          placeholder="Company"
          name="company"
          value={formData.company}
          onChange={({ target }) => handleChange(target.name, target.value)}
        />
        <input
          type="text"
          className="inputForm"
          placeholder="Country/Region"
          name="country"
          value={formData.country}
          onChange={({ target }) => handleChange(target.name, target.value)}
        />
        <textarea
          name="message"
          className="inputForm"
          placeholder="Message"
          value={formData.message}
          onChange={({ target }) => handleChange(target.name, target.value)}
          required
        ></textarea>

        <button
          type="submit"
          className="mx-auto min-w-40 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md my-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
