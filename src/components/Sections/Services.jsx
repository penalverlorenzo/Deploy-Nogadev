import styled from "styled-components";
// Components
// import { ClientSlider } from "../Elements/ClientSlider";
import { ServiceBox } from "../Elements/ServiceBox";

export const Services = () => {
  return (
    <Wrapper id="services" className="pb-12" >
      <div className="lightBg pt-5">
        <div className="container">
          <div className="" style={{ paddingTop: "60px" }}>
            <div className="container">
              <HeaderInfo className="flex flex-col w-full items-center justify-center">
                <h1 className="font40 extraBold text-blue-800">Services</h1>
                <p className="text-xl text-muted mt-4 md:w-2/4 flex md:mx-auto w-full lg:mx-0 text-center text-pretty">
                  We don’t just create software; we craft tailor-made solutions that resonate with your unique business need
                </p>
              </HeaderInfo>
              <div className="mx-auto gap-8 grid md:gap-y-12 sm:grid-cols-2 mt-14">
                <ServiceBox
                  icon="monitor"
                  title="Expert Business Consulting"
                  subtitle="Navigate the complexities of the business world with our professional consulting services. We provide insightful strategies and data-driven advice to help you make informed decisions, optimize operations, and drive sustainable growth."
                />



                <ServiceBox
                  icon="browser"
                  title="Web Development"
                  subtitle="Your website is your digital storefront. We specialize in developing responsive, user-friendly, and visually appealing websites. Our web development team ensures your online presence stands out, offering an engaging user experience that converts visitors into customers."
                />
                <ServiceBox icon="AI" title="AI Chatbots" subtitle={"We specialize in developing intuitive, secure, and scalable AI chatbots that not only meet the needs of digital users but also drive your business towards technological success. \n For us AI is more than just automating responses. It's about creating an engaging interaction experience."} />
                <ServiceBox
                  icon={"roller"}
                  title="Custom Software Development"
                  subtitle="In the world of software development, we focus on more than just basic functionality. Our team specializes in creating sophisticated backend systems and interactive frontends specifically for the tech industry. We are dedicated to developing software solutions that not only meet but also anticipate the changing needs of technology businesses, ensuring scalability and precision in every project."
                />

                <ServiceBox icon="printer" title="Digital Marketing & SEO Optimization" subtitle="In the digital age, visibility is key. Our digital marketing experts employ the latest SEO strategies to enhance your online presence. We focus on increasing your website's visibility, driving traffic, and boosting search engine rankings, ensuring your brand gets the attention it deserves." />

                <ServiceBox icon="Cybersecurity" title="Robust Cybersecurity Measures" subtitle="Safeguard your digital assets with our comprehensive cybersecurity services. We understand the importance of data security in today's digital landscape. Our team employs advanced security protocols to protect your business from cyber threats and ensure your data’s integrity." />


              </div>
            </div>
            <div className="">
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
