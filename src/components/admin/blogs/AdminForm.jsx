/* eslint-disable react/prop-types */
export const AdminForm = ({ onChange, cancelForm, formData, baseUrl, setBlogs }) => {
  const postBlog = async (dataForm) => {
    try {
      const res = await fetch(`${baseUrl}/blogs`, {
        method: 'POST',
        body: dataForm,
      });
      const data = await res.json()
      if (res.ok) {
        alert('Creado exitosamente');
        setBlogs(prevData => [...prevData, data])
        cancelForm();
      } else {
        alert('Hubo un error');
      }
    } catch (error) {
      alert('Hubo un error');
    }
  };
  const updateBlog = async (dataForm) => {
    try {
      const res = await fetch(`${baseUrl}/blogs/${formData?.id}`, {
        method: 'PATCH',
        body: dataForm,
      });

      if (res.ok) {
        alert('Editado exitosamente');
        cancelForm();
      } else {
        alert('Hubo un error');
      }
    } catch (error) {
      alert('Hubo un error');
    }
  };
  const onSubmit = async () => {
    const dataForm = new FormData();
    formData.title && dataForm.append('title', formData.title);
    formData.description && dataForm.append('description', formData.description);
    formData.image && dataForm.append('image', formData.image);
    if (formData.id) {
      await updateBlog(dataForm);
    }else{
      await postBlog(dataForm)
    }
  }
  
  return (
    <section className="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl">

      <form id="form" className="flex flex-col w-2xl gap-2">
        <label className="flex flex-col">
          <h3>Title:</h3>
          <input
            type="text"
            name="title"
            placeholder="Inserte aquí el título del blog..."
            required
            className="input bg-transparent focus:outline-none"
            onChange={onChange}
            value={formData?.title}
            />
        </label>
        <hr />
        <label className="flex flex-col">
          <h3>Description:</h3>
          <textarea
            value={formData?.description}
            name="description"
            required
            className="input bg-transparent resize-none w-full min-h-56 focus:outline-none border-b-gray-700 border-b"
            placeholder="Escribe aquí el contenido del blog..."
            onChange={onChange}
          />
        </label>
        <label className="flex flex-col">
          <h3>Image:</h3>
          <input type="file" required name="image" className="input" onChange={onChange} />
        </label>
        <div className="flex gap-4">

        <button id="submitBtn" type="button" onClick={onSubmit} className="border border-gray-400 py-2 px-4 rounded-lg mt-5">Submit</button>
        <button id="submitBtn" type="button" onClick={cancelForm} className="border border-gray-400 py-2 px-4 rounded-lg mt-5">Cancel</button>
        </div>
      </form>
    </section>
  );
}

