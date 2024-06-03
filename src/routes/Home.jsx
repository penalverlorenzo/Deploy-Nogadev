// import { Layout } from "../layouts/Layout";
// import { Header } from "../components/Sections/Header";
// import { Services } from "../components/Sections/Services";
// import { OurValues } from "../components/Sections/OurValues";
import { UsePageMetadata } from "../hooks/UsePageMetadata";
// import { AboutUs } from "../components/Sections/AboutUs";
// import { Philosophy } from "../components/Elements/Philosophy";
// import { TeamSection } from "../components/Sections/TeamSection";
// import { ContactForm } from "../components/Elements/ContactForm";
import ChatBotContain from "../components/chatBot/chatBotContain";
import ChatBotPage from "../components/chatBot/chatBotPage";
import { LanguageSelector } from "../components/Elements/LanguageSelector";
import { useState } from "react";
const titlePage = 'Nogadev';
const descriptionPage = 'Discover NogaDev, your strategic partner in innovative software solutions.';
export const Home = () => {
  UsePageMetadata(titlePage, descriptionPage)
  const [ toggleSidebar ] = useState(false);
  
  return (
    <>
    {/* <div>
      <ChatBotContain></ChatBotContain>
    </div> */}
    <div className="absolute right-40 z-20">
        <LanguageSelector toggleSidebar={toggleSidebar} />
    </div>
    <div>
      <ChatBotPage/>
    </div>
    </>
  );
}


