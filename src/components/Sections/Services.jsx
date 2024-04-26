import styled from "styled-components";
// Components
// import { ClientSlider } from "../Elements/ClientSlider";
import { ServiceBox } from "../Elements/ServiceBox";


export const Services = () => {
  return (
    <Wrapper id="services" className="bg-red-800">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold text-blue-800">Services</h1>
            <p className="text-xl text-muted mt-4 w-2/4">
              we don’t just create software; we craft tailor-made solutions that resonate with your unique business need
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex flex-wrap justify-around">
            <ServiceBoxWrapper>
              <ServiceBox
                icon={"roller"}
                title="Creative Solutions"
                subtitle="Our team of skilled developers and creative minds work hand-in-hand to bring your ideas to life, ensuring a blend of innovation and functionality."
              />
            </ServiceBoxWrapper>

            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Expert Business Consulting"
                subtitle="Navigate the complexities of the business world with our professional consulting services. We provide insightful strategies and data-driven advice to help you make informed decisions, optimize operations, and drive sustainable growth."
              />
            </ServiceBoxWrapper>

            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Cutting-Edge Web Development"
                subtitle="Your website is your digital storefront. We specialize in developing responsive, user-friendly, and visually appealing websites. Our web development team ensures your online presence stands out, offering an engaging user experience that converts visitors into customers."
              />
            </ServiceBoxWrapper>

            <ServiceBoxWrapper>
              <ServiceBox icon="printer" title="Digital Marketing & SEO Optimization" subtitle="In the digital age, visibility is key. Our digital marketing experts employ the latest SEO strategies to enhance your online presence. We focus on increasing your website's visibility, driving traffic, and boosting search engine rankings, ensuring your brand gets the attention it deserves." />
            </ServiceBoxWrapper>

            <ServiceBoxWrapper>
              <ServiceBox icon="Cybersecurity" title="Robust Cybersecurity Measures" subtitle="Safeguard your digital assets with our comprehensive cybersecurity services. We understand the importance of data security in today's digital landscape. Our team employs advanced security protocols to protect your business from cyber threats and ensure your data’s integrity." />
            </ServiceBoxWrapper>

            <ServiceBoxWrapper>
              <ServiceBox icon="Shopping" title="Innovative Shopping Platform Creation" subtitle="E-commerce is more than just selling online. It's about providing a seamless shopping experience. We specialize in creating intuitive, secure, and scalable shopping platforms that not only meet the demands of digital consumers but also propel your business towards e-commerce success." />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h2 className="font40 extraBold">Meet our Team</h2>
                <p className="text-xl">
                  Our team is made up of talented and passionate individuals who are dedicated to helping you achieve your goals. We are committed to providing you with the best possible service and support. We are here to help you every step of the way.
                </p>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flex justify-between">
                    <AddImgWrapp4 >
                      <a href="https://www.linkedin.com/in/jorge-david-viani-5bb02777/" className="linkedinIconColor">
                        <img src="https://media.licdn.com/dms/image/D4D03AQEGG-KzGmMY0w/profile-displayphoto-shrink_200_200/0/1692379906688?e=1717027200&v=beta&t=Q8DmVTmcTvtQYtfp2eemC_x7jdjv3yRfRbeJ0dljq3E" alt="Jorge Viani" title={`Jorge Viani 
Co-founder - Developer`} />
                        <p className="text-center font-semibold mt-[2px]">Jorge Viani</p>
                        <span className="flex justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                            <path d="M8 11l0 5" />
                            <path d="M8 8l0 .01" />
                            <path d="M12 16l0 -5" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                          </svg></span>
                      </a>
                    </AddImgWrapp4>


                    <AddImgWrapp4>
                      <a href="https://www.linkedin.com/in/juan-pablo-shaw-15a1475/" className="linkedinIconColor">
                        <img src="https://media.licdn.com/dms/image/D4D03AQEIH1zPvstsgQ/profile-displayphoto-shrink_200_200/0/1711393121484?e=1717027200&v=beta&t=kcAtND76Z_MzY2e0yOIHPc3PzwWdEf8m1L9lXUru3As" alt="Juan Pablo Shaw" title={`Juan Pablo Shaw
COO`} />
                        <p className="text-center font-semibold mt-[2px]">Juan Pablo Shaw</p>
                        <span className="flex justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                            <path d="M8 11l0 5" />
                            <path d="M8 8l0 .01" />
                            <path d="M12 16l0 -5" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                          </svg></span></a>
                    </AddImgWrapp4>
                  </div>

                  <div className="flex justify-center">
                    <AddImgWrapp4>
                      <a href="https://www.linkedin.com/in/fernogara/" className="linkedinIconColor">
                        <img src="https://media.licdn.com/dms/image/C5603AQH54pbnKFoQCw/profile-displayphoto-shrink_200_200/0/1561068467736?e=1717027200&v=beta&t=C2-lPCIAG2VN12xYL9uqXOHfsPWeqCwKEgBGVtP5wcc" alt="Fernando Nogara" title={`Fernando Nogara
Co-founder - CEO`} />
                        <p className="text-center font-semibold mt-[2px]">Fernando Nogara</p>
                        <span className="flex justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                            <path d="M8 11l0 5" />
                            <path d="M8 8l0 .01" />
                            <path d="M12 16l0 -5" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                          </svg></span>
                      </a>
                    </AddImgWrapp4>
                  </div>

                  <div className="flex justify-between">
                    <AddImgWrapp4>
                      <a href="https://www.linkedin.com/in/davidnogara/" className="linkedinIconColor">
                        <img src="https://media.licdn.com/dms/image/C4D03AQG0lw2ajsmIFw/profile-displayphoto-shrink_200_200/0/1628122380566?e=1717027200&v=beta&t=skzb9fZbeMwBvX18cSBZo3dSgU2EusAFc1a_9YrMsE0" alt="David Nogara" title={`David Nogara
Co-founder - Senior Developer`} />
                        <p className="text-center font-semibold mt-[2px]">David Nogara</p>
                        <span className="flex justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                            <path d="M8 11l0 5" />
                            <path d="M8 8l0 .01" />
                            <path d="M12 16l0 -5" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                          </svg></span>
                      </a>
                    </AddImgWrapp4>
                    <AddImgWrapp4>
                      <a href="https://www.linkedin.com/in/larisa-paraschiv-0618ab130/" className="linkedinIconColor">
                        <img src="https://media.licdn.com/dms/image/D5603AQHV_b6-ZlcUyw/profile-displayphoto-shrink_200_200/0/1705407820129?e=1717027200&v=beta&t=yBAMZws_yOhtrLaOYX2GdDz4jBOjUVnHFcb0vafJl-8" alt="Larisa" title={`Larisa Paraschiv
Account Executive`} />
                        <p className="text-center font-semibold mt-[2px]">Larisa Paraschiv</p>
                        <span className="flex justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-brand-linkedin" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                            <path d="M8 11l0 5" />
                            <path d="M8 8l0 .01" />
                            <path d="M12 16l0 -5" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                          </svg></span>
                      </a>
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
          {/* <ClientSlider /> */}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 25%;
  font-size: 40px;
  line-height: 1.20rem;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
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
// const ButtonsRow = styled.div`
//   @media (max-width: 860px) {
//     justify-content: space-between;
//   }
// `;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
  margin-top: -30px
`;
// const AddImgWrapp1 = styled.div`
//   width: 48%;
//   margin: 0 6% 10px 6%;
//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 1rem;
//     box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//   }
// `;
// const AddImgWrapp2 = styled.div`
//   width: 30%;
//   margin: 0 5% 10px 5%;
//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 1rem;
//     box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//   }
// `;
// const AddImgWrapp3 = styled.div`
//   width: 20%;
//   margin-left: 40%;
//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 1rem;
//     box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//     -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
//   }
// `;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;