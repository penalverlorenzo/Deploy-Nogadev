/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { ErrorImage } from "../../assets/svg/ErrorImage";
import { AnimatedLink } from "../viewTransition/AnimatedLink";

export const ErrorBlogs = () => {
  return (
    <>
      <Wrapper id="home" className="container flexSpaceCenter pt-12">
        <LeftSide className="flexCenter">
          <div>
            <h1 className="font-bold font-heading leading-tighter tracking-tighter mb-4 md:text-6xl text-5xl">We're sorry.</h1>
            <HeaderP className="text-xl font-semibold">
            An unexpected error occurred, and we're working to fix it. Please try again later.
            </HeaderP>
          </div>
        </LeftSide>
        <RightSide className="flex justify-center w-44">
          <ImageWrapper>
            <ErrorImage className={"w-[550px]"} />
          </ImageWrapper>
        </RightSide>
      </Wrapper>
      <AnimatedLink className={"lg:hover:scale-105 transition my-12 py-3 px-6 mx-auto text-white hover:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none  shadow-lg shadow-blue-800/80 font-medium rounded-lg text-lg text-center flex items-center w-fit"} to={'/'}>
        Go to Home
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </AnimatedLink>
    </>
  );
};

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
