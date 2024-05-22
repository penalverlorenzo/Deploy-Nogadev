import OurValuesImg from "../../assets/img/OurValues.png";
import LazyImageLoader from "../LazyLoading/LazyLoadingContainer";
import { UseLanguageSections } from '../../hooks/useLanguageSections';


export const OurValues = () => {
  const values = UseLanguageSections('values')
  const items = values.valuesList;
  return (
    <div className="container flex  flex-col md:flex-row py-12">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-4xl extraBold mx-auto dark:text-[#e5ecf6]">{values.title}</h2>
        <p className="text-2xl font-medium mx-auto text-center dark:text-white/60">
        {values.description}
        </p>
        <LazyImageLoader>
        <img src={OurValuesImg} className="hidden md:flex w-full object-cover my-auto" alt="Representative image of our values" />
        </LazyImageLoader>
      </div>
      <ul className="space-y-10 md:ml-7">
        {
          items && items.length
            ? items.map(({ title: title2, description }, index) => (
              <li key={index} className="flex md:-mx-4">
                <div className="pr-4 sm:pl-4 rtl:pr-0 rtl:pl-4 rtl:sm:pl-0 rtl:sm:pr-4">
                  <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-blue-100 text-primary">
                  <span className="flex justify-center items-center bg-blue-100 font-bold h-16 mx-auto rounded-full text-2xl text-primary w-16">{index + 1}</span>
                  </span>
                </div>
                <div className="pl-4 rtl:pl-0 rtl:pr-4">
                  <h3 className="mb-4 text-xl font-bold font-heading dark:text-[#e5ecf6]">{title2}</h3>
                  <p className="dark:text-white/60" >{description}</p>
                </div>
              </li>
            ))
            : ''
        }
      </ul>
    </div>
  );
};