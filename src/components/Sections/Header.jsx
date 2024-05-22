import styled from "styled-components";

import nogaRocket from "../../assets/img/nogadevRocket.avif"
import LazyImageLoader from "../LazyLoading/LazyLoadingContainer";
import { UseLanguageSections } from "../../hooks/useLanguageSections";
import { ScrollButton } from "../Elements/ScrollButton";

export const Header = () => {
  const header = UseLanguageSections('header');


  return (
    <Wrapper id="home" className="container flexSpaceCenter">

      <LeftSide className="flexCenter">
        <div>
          <h1 className="font-bold font-heading leading-tighter tracking-tighter mb-4 md:text-6xl text-5xl dark:text-white">{header.title[0]}<span className="highlight bg-clip-text bg-gradient-to-r dark:bg-clip-text dark:from-blue-500 dark:to-blue-500 dark:via-blue-300 from-blue-500 pr-0.5 text-transparent to-blue-500 via-blue-900">{header.title[1]}</span></h1>
          <HeaderP className="font18 semiBold dark:text-white/70">
            {header.description}
          </HeaderP>
          <ScrollButton className={"flex w-fit py-2 px-4 md:py-3 md:px-6 mx-auto lg:mx-0 hover:text-white/70 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none  shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium md:font-semibold rounded-lg text-lg md:text-2xl text-center items-center"} targetId="contact">
            {header.button}
            <svg className="rtl:rotate-180 size-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </ScrollButton>
        </div>
      </LeftSide>
      <RightSide className="hidden md:ml-3 md:flex">
        <ImageWrapper>
          <LazyImageLoader>

            <Img decoding="async" className="radius8 lg:w-full lg:h-full hidden md:block min-h-[722px] min-w-[722px]" src={nogaRocket} alt="office" />
          </LazyImageLoader>
        </ImageWrapper>
      </RightSide>
    </Wrapper>
  );
}

{/* <button type="button" class="">Blue</button> */}


const Wrapper = styled.section`
  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
