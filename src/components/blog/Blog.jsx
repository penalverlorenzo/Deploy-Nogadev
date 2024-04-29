/* eslint-disable react/prop-types */
import { baseUrl } from "../../config/index"
import { Link } from "react-router-dom";
export const Blog = ({ post }) => {
  return (
    <article className={`max-w-md mx-auto md:max-w-none grid gap-6 md:gap-8 ${post.image ? 'md:grid-cols-2' : ''}`}>
      {
        post.image && (
          <Link className="relative block group" to={`/blogs/${post.id}`}>
            <div className="relative h-0 pb-[56.25%] md:pb-[75%] md:h-72 lg:pb-[56.25%] overflow-hidden bg-gray-400 dark:bg-slate-700 rounded shadow-lg">
              {post.image && (
                <img
                  src={`${baseUrl}${post.image}`}
                  className="absolute inset-0 object-cover w-full h-full mb-6 rounded shadow-lg bg-gray-400 dark:bg-slate-700"
                  widths={[400, 900]}
                  width={900}
                  sizes="(max-width: 900px) 400px, 900px"
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
          </Link>
        )
      }
      <div className="mt-2">
        <header>
          <div className="mb-1">
            <span className="text-sm">

            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300">

            <Link
              className="hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200"
              to={`/blogs/${post.id}`}
            >
              {post.title}
            </Link>
          </h2>
          {post.description && <p className="flex-grow text-muted dark:text-slate-400 text-lg" style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 8, overflow: "hidden" }} >{post.description}</p>}

        </header>
      </div>
    </article>
  );
}