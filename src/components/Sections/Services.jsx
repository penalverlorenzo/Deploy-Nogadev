import styled from "styled-components"; 

import { ServiceBox } from "../Elements/ServiceBox";
import { UseLanguageSections } from "../../hooks/useLanguageSections";


export const Services = () => {
  const services = UseLanguageSections('services');


  return (
    <Wrapper id="services" className="">
      <div className="bg-white dark:bg-[#030620] pt-5">
        <div className="container">
          <div className="" style={{ paddingTop: "60px" }}>
            <div className="container">
              <HeaderInfo className="flex flex-col w-full items-center justify-center">
                <h1 className="font40 extraBold text-blue-800 dark:text-[#bfdbfe]">{services.title}</h1>
                <p className="text-xl text-muted mt-4 md:w-2/4 flex md:mx-auto w-full lg:mx-0 text-center text-pretty dark:text-white/60">
                  {services.description}
                </p>
              </HeaderInfo>
              <div className="mx-auto gap-8 grid md:gap-y-12 sm:grid-cols-2 mt-8">
                {services.serviceList.map((service, index) => (
                  <ServiceBox
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    subtitle={service.subtitle}
                  />
                ))}
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
