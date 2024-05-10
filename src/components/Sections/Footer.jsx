import styled from "styled-components";
// Assets
import LightLogo from "../../assets/svg/LightLogo";
import { ScrollButton } from "../Elements/ScrollButton";

export const Footer=() =>{
  return (
    <Wrapper id="footer">
      <div className="bg-[#0B093B]">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <ScrollButton className="flexCenter animate pointer" targetId="top" >
              <LightLogo />
            </ScrollButton>
            <a className="hidden md:flex text-white animate pointer font13" href="#top" >
              Back to top
            </a>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;