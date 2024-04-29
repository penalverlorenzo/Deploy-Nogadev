import { useEffect, useState } from "react";

import { baseUrl } from "../config/index"

import { BlogsTable } from "../components/admin/blogs/BlogsTable";
import { AdminForm } from "../components/admin/blogs/AdminForm";
import { AdminLayout } from "../layouts/AdminLayout";

export const AdminView = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "", image: null });
  const [seeForm, setSeeForm] = useState(false);

  const cancelForm = () => {
    setFormData({ title: "", description: "", image: null });
    setSeeForm(false)
  }

  const editForm = (payload) => {
    setSeeForm(true);
    setFormData(payload);
  }

  const newForm = () => {
    setFormData({ title: "", description: "", image: null });
    setSeeForm(true);
  }
  const deleteBlog = async (id) => {
    const res = await fetch(`${baseUrl}/blogs/${id}`, { method: 'DELETE' });
    console.log({ res });
    if (res.ok) {
      alert('eliminado correctamente')
    } else {
      alert('error al eliminar')
    }
  }
  const formHandler = (e) => {
    const { name, value, files } = e.target;

    switch (name) {
      case 'title':
      case 'description':
        setFormData(prevData => ({ ...prevData, [name]: value }));
        break;
      case 'image':
        if (files.length > 0) {
          setFormData(prevData => ({ ...prevData, [name]: files[0] }));
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await (await fetch(`${baseUrl}/blogs`)).json()
        setBlogs(res);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <AdminLayout>
      <BlogsTable blogs={blogs} editForm={editForm} deleteBlog={deleteBlog} />
      <button className="flex border border-black rounded-lg px-4 py-2 mx-auto my-6" onClick={newForm}>Create new blog</button>
      {seeForm && <AdminForm onChange={formHandler} formData={formData} cancelForm={cancelForm} baseUrl={baseUrl} setBlogs={setBlogs} />}
    </AdminLayout>
  );
};
