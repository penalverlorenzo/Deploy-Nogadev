/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Link  } from "react-router-dom";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
// import LogoIcon from "../../assets/svg/Logo";
import LightLogo from "../../assets/svg/LightLogo";
import { AnimatedLink } from "../viewTransition/AnimatedLink";

// eslint-disable-next-line react/prop-types
export const Sidebar = ({ sidebaropen , toggleSidebar }) =>{
  // console.log({sidebaropen});
  return (
    <Wrapper className="animate darkBg" style={{right: (sidebaropen ?  "0px" : "-400px" )}}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LightLogo />
          {/* <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
            fanatic
          </h1> */}
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebaropen)} title="close sidebar menu" className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <AnimatedLink
            onClick={() => toggleSidebar(!sidebaropen)}
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/"
            offset={-60}
          >
            Home
          </AnimatedLink>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebaropen)}
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/"
            offset={-60}
          >
            Services
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <AnimatedLink
            onClick={() => toggleSidebar(!sidebaropen)}
            activeclass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/blogs"
            spy="true"
            offset={-60}
          >
            Blog
          </AnimatedLink>
        </li>
        <li className="semiBold font15 pointer">
          <AnimatedLink
            onClick={() => toggleSidebar(!sidebaropen)}
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/contact"
            offset={-60}
          >
            Contact
          </AnimatedLink>
        </li>
      </UlStyle>
      <UlStyle className="flexSpaceCenter">
        <li className="semiBold font15 pointer">
          <Link to="/" style={{ padding: "10px 30px 10px 0" }} className="whiteColor">
            Log in
          </Link>
        </li>
        <li className="semiBold font15 pointer flexCenter">
          <Link to="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
            Get Started
          </Link>
        </li>
      </UlStyle>
    </Wrapper>
  );
}
// right: ${(props) => (props.sidebaropen ? "0px" : "-400px")};

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
