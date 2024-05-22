/* eslint-disable react/no-unescaped-entities */
import { Layout } from '../layouts/Layout';
import { UsePageMetadata } from '../hooks/UsePageMetadata';
import { ContactForm } from '../components/Elements/ContactForm';
import { UseLanguageSections } from '../hooks/useLanguageSections';

const titlePage = 'Contact - Nogadev';
const descriptionPage = 'We offer cutting-edge web development, expert business consulting, effective digital marketing and SEO, robust cybersecurity, and customized e-commerce platforms. Elevate your business with our technology and creativity';

export const ContactView = () => {
  const contact = UseLanguageSections('contact');
  UsePageMetadata(titlePage, descriptionPage);
  return (
    <Layout>
      <section className='container'>
        <div className='w-full flex flex-col my-12 items-center gap-4'>
          <p className='font-bold  text-base text-secondary tracking-wide uppercase dark:text-white'
          >{contact.subtitle}</p>
          <h1 className='font-bold font-heading leading-tighter tracking-tighter  mb-4 md:text-6xl text-5xl dark:text-white'
          >{contact.title}</h1>
        </div>
        <h2 className="font-bold font-heading leading-tighter tracking-tighter md:text-4xl text-3xl text-heading text-center mb-5 dark:text-white">{contact.description}</h2>
        <ContactForm />

      </section>
    </Layout>
  );
};
