import styled from "styled-components";

import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
<<<<<<< HEAD
import ChatBotContain from "../chatBot/chatBotContain";
=======
import nogaRocket from "../../assets/svg/nogadevRocket.webp"
>>>>>>> 1c084f141f3fed47795397b5fa5d00d80a22de23

export const Header = () => {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <ChatBotContain/>
      <LeftSide className="flexCenter">
        <div>
          <h1 className="font-bold font-heading leading-tighter tracking-tighter mb-4 md:text-6xl text-5xl">Welcome to <span className="highlight bg-clip-text bg-gradient-to-r dark:bg-clip-text dark:from-blue-500 dark:to-blue-500 dark:via-blue-300 from-blue-500 pr-0.5 text-transparent to-blue-500 via-blue-900"> NOGADEV Software Solutions </span></h1>
          <HeaderP className="font18 semiBold">
          where cutting-edge technology meets creative solutions. We are a dynamic software startup committed to revolutionizing your business experience.
          </HeaderP>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8 " src={nogaRocket} alt="office" style={{zIndex: 9}} />
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
          <QuoteWrapper className="flexCenter darkBg radius8 ">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em><span className="font-semibold">Philosophy: </span> We are committed to providing the best possible service to our clients. We believe in the power of technology to transform businesses and lives.</em>
              </p>
              <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>Nogadev</p>
            </div>
          </QuoteWrapper>
        </ImageWrapper>
      </RightSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
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
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: -40px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


