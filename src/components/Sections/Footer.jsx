import styled from "styled-components";
// Assets
import LightLogo from "../../assets/svg/LightLogo";

export const Footer=() =>{
  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <a className="flexCenter animate pointer" href="#top" >
              <LightLogo />
            </a>
            <a className="hidden md:flex whiteColor animate pointer font13" href="#top" >
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