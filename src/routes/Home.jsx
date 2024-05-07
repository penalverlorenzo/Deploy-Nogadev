import { Layout } from "../layouts/Layout";
import { Header } from "../components/Sections/Header";
import { Services } from "../components/Sections/Services";
import { OurValues } from "../components/Sections/OurValues";
import { UsePageMetadata } from "../hooks/UsePageMetadata";
import { AboutUs } from "../components/Sections/AboutUs";
import { Philosophy } from "../components/Elements/Philosophy";
const titlePage = 'Nogadev';
const descriptionPage = 'Discover NogaDev, your strategic partner in innovative software solutions.';
export const Home = () => {
  UsePageMetadata(titlePage, descriptionPage)
  return (
    <Layout>
      <Header />
      <Philosophy />

      <Services />
      <AboutUs />
      <OurValues />
    </Layout>
  );
}


