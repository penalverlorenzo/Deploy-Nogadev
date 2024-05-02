import { Layout } from "../layouts/Layout";
import { Header } from "../components/Sections/Header";
import { Services } from "../components/Sections/Services";
import { Contact } from "../components/Sections/Contact";

export const Home = () => {
  return (
    <Layout>
      <Header />
      <Services />
      <Contact />
    </Layout>
  );
}


