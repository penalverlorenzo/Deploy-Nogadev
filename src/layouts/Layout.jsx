/* eslint-disable react/prop-types */
import { TopNavbar } from "../components/Nav/TopNavbar";
import { Footer } from "../components/Sections/Footer";

export const Layout = ({ children }) => {
  return (
    <div className="pt-20  lightBg">
      <TopNavbar />
      <div className="min-h-[750px] pb-24">

        {children}
      </div>
      <Footer />
    </div>
  );
};
