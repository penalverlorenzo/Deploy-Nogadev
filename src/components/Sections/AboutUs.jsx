import LazyImageLoader from "../LazyLoading/LazyLoadingContainer";
import { UseLanguageSections } from '../../hooks/useLanguageSections';
// import styled from "styled-components";
//  import { Team } from "../Elements/Team";

export const AboutUs = () => {
  const about = UseLanguageSections('about');

  return (
    <div className="mx-auto px-4 relative w-full sm:px-6 bg-white py-12 dark:bg-[#1f2937]" id="about">
      <div className="flex items-center container">
        <div className="mx-auto max-w-5xl md:pb-16 pb-10 text-start">
          <p className="font-bold text-base text-[#1e3a8a] tracking-wide uppercase">About us</p>
          <h1 className="font-bold font-heading leading-tighter tracking-tighter mb-4 text-black md:text-6xl text-5xl dark:text-[#e5e7eb]">
            {about.title[0]}<br />
            <a className="highlight text-[#6d28d9]" href="/#services">{about.title[1]}</a>
          </h1>
          <div className="mx-auto max-w-3xl">
            <p className="text-xl text-[#101010e6] mb-6 dark:text-white/70">
              {about.description}
            </p>
          </div>
        </div>
        <div>
          <div className="relative hidden m-auto max-w-2xl md:block">
            <LazyImageLoader>
              <img
                alt="Company Image"
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
                className="mx-auto w-full rounded-md"
                decoding="async"
                height="1024"
                loading="eager"
                sizes="(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px"
                srcSet="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80&amp;h=400 400w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=768&amp;q=80&amp;h=768 768w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1024&amp;q=80&amp;h=1024 1024w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2040&amp;q=80&amp;h=2040 2040w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2048&amp;q=80&amp;h=2048 2048w"
                style={{ objectFit: 'cover', objectPosition: 'center', maxWidth: '1024px', maxHeight: '1024px', aspectRatio: '1', width: '100%' }}
                width="1024"
              /></LazyImageLoader>
          </div>
        </div>
      </div>
    </div>
  );
};
