/* eslint-disable react/prop-types */
import { TopNavbar } from "../components/Nav/TopNavbar";
import { Footer } from "../components/Sections/Footer";

export const AdminLayout = ({ children }) => {
  return (
    <div className="pt-20 bg-[#F5F5F5]">
      <TopNavbar />
      <div className="min-h-[800px]">

        {children}
      </div>
      <Footer />
    </div>
  );
};
