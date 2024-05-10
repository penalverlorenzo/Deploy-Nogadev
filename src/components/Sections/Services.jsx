import styled from "styled-components";
// Components
// import { ClientSlider } from "../Elements/ClientSlider";
import { ServiceBox } from "../Elements/ServiceBox";
import { Team } from "../Elements/Team";


export const Services = () => {
  return (
    <Wrapper id="services" >
      <div className="bg-[#F5F5F5] pt-5">
        <div className="container">
          <div className="" style={{ paddingTop: "60px" }}>
            <div className="container">
              <HeaderInfo className="flex flex-col w-full items-center justify-center">
                <h1 className="font40 extraBold text-blue-800">Services</h1>
                <p className="text-xl text-muted mt-4 md:w-2/4 flex md:mx-auto w-full lg:mx-0 text-center text-pretty">
                  we don’t just create software; we craft tailor-made solutions that resonate with your unique business need
                </p>
              </HeaderInfo>
              <div className="mx-auto gap-8 grid md:gap-y-12 sm:grid-cols-2 mt-8">
                  <ServiceBox
                    icon={"roller"}
                    title="Creative Solutions"
                    subtitle="Our team of skilled developers and creative minds work hand-in-hand to bring your ideas to life, ensuring a blend of innovation and functionality."
                  />

                  <ServiceBox
                    icon="monitor"
                    title="Expert Business Consulting"
                    subtitle="Navigate the complexities of the business world with our professional consulting services. We provide insightful strategies and data-driven advice to help you make informed decisions, optimize operations, and drive sustainable growth."
                  />

                  <ServiceBox
                    icon="browser"
                    title="Cutting-Edge Web Development"
                    subtitle="Your website is your digital storefront. We specialize in developing responsive, user-friendly, and visually appealing websites. Our web development team ensures your online presence stands out, offering an engaging user experience that converts visitors into customers."
                  />

                  <ServiceBox icon="printer" title="Digital Marketing & SEO Optimization" subtitle="In the digital age, visibility is key. Our digital marketing experts employ the latest SEO strategies to enhance your online presence. We focus on increasing your website's visibility, driving traffic, and boosting search engine rankings, ensuring your brand gets the attention it deserves." />

                  <ServiceBox icon="Cybersecurity" title="Robust Cybersecurity Measures" subtitle="Safeguard your digital assets with our comprehensive cybersecurity services. We understand the importance of data security in today's digital landscape. Our team employs advanced security protocols to protect your business from cyber threats and ensure your data’s integrity." />

                  <ServiceBox icon="Shopping" title="Innovative Shopping Platform Creation" subtitle="E-commerce is more than just selling online. It's about providing a seamless shopping experience. We specialize in creating intuitive, secure, and scalable shopping platforms that not only meet the demands of digital consumers but also propel your business towards e-commerce success." />
              </div>
            </div>
            <div className="">
              <div className="container">
                <Advertising className="flex flex-col items-center gap-8">
                  <h2 className="text-4xl extraBold mx-auto text-center">Meet our Team</h2>
                  <p className="text-2xl font-medium mx-auto text-center">
                    Our team is made up of talented and passionate individuals who are dedicated to helping you achieve your goals. We are committed to providing you with the best possible service and support. We are here to help you every step of the way.
                  </p>
                  <Team />
                </Advertising>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0; 
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;