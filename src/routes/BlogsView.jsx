import { BlogList } from "../components/blog/BlogList"
import { UsePageMetadata } from "../hooks/UsePageMetadata";
import { Layout } from "../layouts/Layout"
const titlePage = 'Blog';
const descriptionPage = "Explore our latest blog posts covering a wide range of topics including technology, lifestyle, travel, and more. Stay informed and inspired with our diverse collection of articles written by experts and enthusiasts.";

export const BlogsView = ()=>{
  UsePageMetadata(titlePage, descriptionPage)
  return (
    <Layout >
      {/* --------- Blog List-------------- */}
      <section className="flex flex-col w-5/6 mx-auto my-6">
        <BlogList />
      </section>
    </Layout>
  )
} 