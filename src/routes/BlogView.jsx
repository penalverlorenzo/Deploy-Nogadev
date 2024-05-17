/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { baseUrl } from "../config";
import { Layout } from "../layouts/Layout";
import { UsePageMetadata } from "../hooks/UsePageMetadata";
import { BlogSkeleton } from "../components/blog/BlogSkeleton";
import { ErrorBlogs } from "../components/blog/ErrorBlogs";

export const BlogView = () => {
  const [blog, setBlog] = useState({ title: '', description: '', image: '', createdAt: 'new Date()' });
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();

  UsePageMetadata(`${blog.title} - Nogadev`, blog.description.slice(0, 40));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}/blogs/${id}`);
        if (res.ok) {
          const data = await res.json();
          setBlog(data)
          setIsLoadingData(false);
        }
      } catch (error) {
        setError(true);
      }
    }
    fetchData()
  }, []);

  if (error) {
    return(<Layout> <ErrorBlogs/></Layout>)
  }
  
  return (
    <Layout>

      <section className="mx-auto lg:py-20 py-8 sm:py-16 ">
        {isLoadingData ? <BlogSkeleton/> :<article>
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
        </article>}
      </section>

    </Layout>
  );
};
