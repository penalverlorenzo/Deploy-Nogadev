import { BlogList } from "../components/blog/BlogList"
import { Layout } from "../layouts/Layout"

export const BlogsView = ()=>{
  return (
    <Layout >
      {/* --------- Blog List-------------- */}
      <section className="flex flex-col w-5/6 mx-auto my-6">
        <BlogList />
      </section>
    </Layout>
  )
} 