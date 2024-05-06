/* eslint-disable react/prop-types */
import { baseUrl } from "../../config/index"
// import { Link } from "react-router-dom";
import { AnimatedLink } from "../viewTransition/AnimatedLink";
export const Blog = ({ post }) => {
  return (
    <article className={`max-w-md mx-auto md:max-w-none grid gap-6 md:gap-8 ${post.image ? 'md:grid-cols-2' : ''}`}>
      {
        post.image && (
          <AnimatedLink className="relative block group" to={`/blogs/${post.id}`} imageUrl={`${baseUrl}${post.image}`}>
            <div className="relative h-0 pb-[56.25%] md:pb-[75%] w-64 sm:w-full md:h-72 lg:pb-[56.25%] overflow-hidden bg-gray-400 dark:bg-slate-700 rounded shadow-lg">
              <img
                src={`${baseUrl}${post.image}`}
                className="absolute inset-0 object-cover w-64 sm:w-full h-full mb-6 rounded shadow-lg bg-gray-400 dark:bg-slate-700 max-w-full"
                alt={post.title}
                loading="lazy"
                decoding="async"
                // style={{ viewTransitionName: `image-${post.id}` }}
              />
            </div>
          </AnimatedLink>
        )
      }
      <div className="mt-2 w-full">
        <header className="w-full">
          <h2 className="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300 w-full flex">
            <AnimatedLink
              className="hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200 w-full text-wrap"
              to={`/blogs/${post.id}`}
            >
              {post.title}
            </AnimatedLink>
          </h2>
          {post.description && <p className="flex-grow text-muted dark:text-slate-400 text-lg" style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 5, overflow: "hidden" }} >{post.description}</p>}
        </header>
      </div>
    </article>
  );
}