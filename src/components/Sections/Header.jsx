import styled from "styled-components";

import nogaRocket from "../../assets/img/nogadevRocket.avif"

export const Header = () => {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="font-bold dark:text-white font-heading leading-tighter tracking-tighter mb-4 md:text-6xl text-5xl">Welcome to <span className="highlight bg-clip-text bg-gradient-to-r dark:bg-clip-text dark:from-blue-500 dark:to-blue-500 dark:via-blue-300 from-blue-500 pr-0.5 text-transparent to-blue-500 via-blue-900"> NOGADEV Software Solutions </span></h1>
          <HeaderP className="font18 font-semibold dark:text-white/70 dark:font-medium">
          where cutting-edge technology meets creative solutions. We are a dynamic software startup committed to revolutionizing your business experience.
          </HeaderP>
        </div>
      </LeftSide>
      <RightSide className="hidden md:ml-3 md:flex">
        <ImageWrapper>
          <Img decoding="async" className="radius8 lg:w-full lg:h-full hidden md:block min-h-[722px] min-w-[722px]" src={nogaRocket} alt="office" />
        </ImageWrapper>
      </RightSide>
    </Wrapper>
  );
}


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
// const BtnWrapper = styled.div`
//   max-width: 190px;
//   @media (max-width: 960px) {
//     margin: 0 auto;
//   }
// `;
// const GreyDiv = styled.div`
//   width: 30%;
//   height: 700px;
//   position: absolute;
//   top: 0;
//   right: 0;
//   z-index: 0;
//   @media (max-width: 960px) {
//     display: none;
//   }
// `;
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