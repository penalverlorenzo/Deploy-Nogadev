/* eslint-disable react/no-unescaped-entities */
import { HubSpotForm } from '../components/Elements/HubspotForm';
import { Layout } from '../layouts/Layout';
import { UsePageMetadata } from '../hooks/UsePageMetadata';

const titlePage = 'Contact - Nogadev';
const descriptionPage = 'We offer cutting-edge web development, expert business consulting, effective digital marketing and SEO, robust cybersecurity, and customized e-commerce platforms. Elevate your business with our technology and creativity';

export const ContactView = () => {
  UsePageMetadata(titlePage, descriptionPage);
  return (
    <Layout>
      <section className='container'>
        <div className='w-full flex flex-col my-12 items-center gap-4'>
          <p className='font-bold  text-base text-secondary tracking-wide uppercase'
          >Contact</p>
          <h1 className='font-bold font-heading leading-tighter tracking-tighter  mb-4 md:text-6xl text-5xl'
          >Let's Connect!</h1>
        </div>
        <h2 className="font-bold font-heading leading-tighter tracking-tighter md:text-4xl text-3xl text-heading text-center mb-5">Drop us a message today!</h2>
        <HubSpotForm />

      </section>
    </Layout>
  );
};
