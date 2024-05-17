import LightLogo from "../../assets/svg/LightLogo";
import { InstagramLogo } from "../../assets/svg/logos/InstagramLogo";
import LinkedInLogo from "../../assets/svg/logos/LinkedInLogo";
import { TwitterLogo } from "../../assets/svg/logos/TwitterLogo";
import { ScrollButton } from "../Elements/ScrollButton";
import { AnimatedLink } from "../viewTransition/AnimatedLink";

export const Footer = () => {
  return (
    <footer className="bg-[#0B093B]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0"> 
            <ScrollButton targetId="top" className="flex items-center gap-4 dark:text-white dark:hover:text-[#407aff]" >
              <LightLogo className="h-8 me-3" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Software Solutions</span>
            </ScrollButton>
          </div>
          <div className="flex justify-end md:justify-normal gap-8 sm:gap-12 items-center">
            <div>
              <AnimatedLink className="text-sm font-semibold text-white" to={"/blogs"}>Blog</AnimatedLink>
            </div>
            <div>
              <AnimatedLink to={"/contact"} className="text-sm font-semibold text-gray-900 uppercase bg-white py-2.5 px-5 rounded-full shadow-sm hover:shadow-slate-50">Contact us</AnimatedLink>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="hidden md:inline"></span>
          <span className="text-sm sm:text-center text-gray-400 hover:underline"> Privacy Policy </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="https://www.instagram.com/nogadev7/" className="text-gray-500 hover:text-white" target="_blank"
						rel="noonpener">
              <InstagramLogo />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="https://twitter.com/nogadev" className="text-gray-500 hover:text-white ms-5" target="_blank"
						rel="noonpener">
              <TwitterLogo />
              <span className="sr-only">Twitter community</span>
            </a>
            <a href="https://www.linkedin.com/company/nogadev-inc" className="text-gray-500 hover:text-white ms-5" target="_blank"
						rel="noonpener">
              <LinkedInLogo />
              <span className="sr-only">LinkedIn page</span>
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}