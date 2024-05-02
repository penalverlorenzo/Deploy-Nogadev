/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import { baseUrl } from "../../config"

import { Blog } from "./Blog"
// import { getAllBlogs } from "../../utils/fetchData"

export const BlogList = () => {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
      const res =  await fetch(`${baseUrl}/blogs`);
      const data = await res.json();
      setPosts(data)
    }
    fetchData()
  },[])
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