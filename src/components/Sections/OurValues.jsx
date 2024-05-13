const items = [
  {
    title: 'Customer-Centric Approach',
    description:
      'Our clients are our top priority. We strive to understand their unique needs and challenges, and we design custom software solutions that help them achieve their business objectives. We believe in building long-term relationships based on trust and mutual respect.',
  },
  {
    title: 'Continuous Improvement',
    description:
      'We are committed to continuous learning and improvement. We stay abreast of the latest technologies and industry trends, and we constantly refine our methodologies to ensure we are delivering the most effective and efficient solutions.',
  },
  {
    title: 'Ethical Practices',
    description:
      'We uphold the highest standards of integrity in all our business dealings. We are transparent in our communications, we honor our commitments, and we treat everyone with fairness and respect. We believe that ethical practices are essential to our success.',
  },
];
import OurValuesImg from "../../assets/img/OurValues.png";
import LazyImageLoader from "../LazyLoading/LazyLoadingContainer";
export const OurValues = () => {
  return (
    <div className="container flex  flex-col md:flex-row mb-24">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-4xl extraBold mx-auto dark:text-[#e5ecf6]">Our Values</h2>
        <p className="text-2xl font-medium mx-auto text-center dark:text-white/60">
        At Nogadev, we believe in creating software solutions that truly make a difference. Here are the values that guide our work:
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