/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { baseUrl } from "../config";
import { Layout } from "../layouts/Layout";

export const BlogView = () => {
  const [blog, setBlog] = useState({ title: '', description: '', image: '', createdAt: 'new Date()' });
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${baseUrl}/blogs/${id}`);
      const data = await res.json();
      if (data.status == 404) {
        return navigate('/')
      }
      setBlog(data)
    }
    fetchData()
  }, [])

  return (
    <Layout>
      <section className="mx-auto lg:py-20 py-8 sm:py-16 ">
        <article>
          <header className="">
            <h1
              className="mx-auto sm:px-6 max-w-3xl px-4 font-bold font-heading leading-tighter md:text-5xl text-3xl tracking-tighter mb-6"
            >
              {blog.title}
            </h1>
          </header>
          <img
            src={`${baseUrl}${blog.image}`}
            className="mx-auto bg-gray-400 dark:bg-slate-700 lg:max-w-[900px] max-w-full mb-6 sm:rounded-md"
            alt={blog.title}
            // style={{viewTransitionName: `image-${id}`}}
          />
          <div
            className="mx-auto sm:px-6 max-w-3xl px-6 mt-8 dark:prose-a:text-blue-400 dark:prose-headings:text-slate-300 dark:prose-invert lg:prose-xl prose prose-a:text-primary prose-headings:font-bold prose-headings:font-heading prose-headings:leading-tighter prose-headings:scroll-mt-[80px] prose-headings:tracking-tighter prose-img:rounded-md prose-img:shadow-lg prose-lg prose-md"
          >
            {blog?.description?.split('\n').map((paragraph, i) => <p key={i} className="text-pretty">{paragraph}</p>)}
          </div>
        </article>
      </section>

    </Layout>
  );
};
