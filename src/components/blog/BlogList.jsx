/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import { baseUrl } from "../../config"

import { Blog } from "./BlogItem"
import { BlogItemSkeleton } from "./BlogItemSkeleton";
import { ErrorBlogs } from "./ErrorBlogs";
// import { getAllBlogs } from "../../utils/fetchData"

export const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [error, setError] = useState(false);
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res =  await fetch(`${baseUrl}/blogs`);
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
          setIsLoadingData(false);
        }  
      } catch (error) {
        setError(true);
      }
    }
    fetchData()
    
  },[]);
  if (error) {
    return(
      <ErrorBlogs />
    )
  }
  if (isLoadingData) {
    return(
      <section className="flex flex-col gap-6 w-full">
        <BlogItemSkeleton />
        <BlogItemSkeleton />
        <BlogItemSkeleton />
      </section>
    )
  }
  return (
    <ul>
      {
        posts.map((post) => (
          <li key={post.id} className="mb-12 md:mb-20">
            <Blog  post={post} />
          </li>
        ))
      }
    </ul>
  )
}