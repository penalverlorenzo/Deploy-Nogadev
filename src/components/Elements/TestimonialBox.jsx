/* eslint-disable react/prop-types */

import styled from "styled-components";
// Assets
import QuoteIcon from "../../assets/svg/Quotes";

export const TestimonialBox=({ text, author }) =>{
  return (
    <Wrapper className="bg-[#0B093B] radius8 flexNullCenter flexColumn">
      <QuoteWrapper>
        <QuoteIcon />
      </QuoteWrapper>
      <p className="text-white font13" style={{ paddingBottom: "30px" }}>
        {text}
      </p>
      <p className="orangeColor font13" style={{alignSelf: 'flex-end'}}>
        <em>{author}</em>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  margin-top: 30px;
`;
const QuoteWrapper = styled.div`
  position: relative;
  top: -40px;
`;