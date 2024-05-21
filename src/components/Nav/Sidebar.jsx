/* eslint-disable react/prop-types */
// import { useContext } from "react";
import styled from "styled-components";
import CloseIcon from "../../assets/svg/CloseIcon";
import LightLogo from "../../assets/svg/Logo";
import { AnimatedLink } from "../viewTransition/AnimatedLink";
import { useEffect, useState } from "react";
import { ScrollButton } from "../Elements/ScrollButton";
import { DarkModeBtn } from "../Elements/DarkModeBtn";
import { LanguageSelector } from "../Elements/LanguageSelector";

export const Sidebar = ({ sidebaropen, toggleSidebar }) => {
  const [seeOption, setSeeOption] = useState(true);
  useEffect(() => {
    if (location.pathname.split('/')[1]) {
      setSeeOption(false);
    }

  }, [])

  return (
    <Wrapper className="animate bg-white dark:bg-[#030620fb]" style={{ right: (sidebaropen ? "0px" : "-400px") }}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LightLogo />
        </div>
      <DarkModeBtn></DarkModeBtn>
        <CloseBtn onClick={() => toggleSidebar(!sidebaropen)} title="close sidebar menu" className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn" >
        <li className="semiBold font15 pointer" onClick={() => toggleSidebar(!sidebaropen)}>
          <AnimatedLink
            onClick={() => toggleSidebar(!sidebaropen)}
            className="text-black dark:text-white"
            style={{ padding: "10px 15px" }}
            to="/"
            offset={-60}
          >
            Home
          </AnimatedLink>
        </li>
        {seeOption && <li className="semiBold font15 pointer" onClick={() => toggleSidebar(!sidebaropen)}>
          <ScrollButton
            targetId={"services"}
            className="text-black dark:text-white"
            style={{ padding: "10px 15px" }}
            to="/"
            offset={-60}
          >
            Services
          </ScrollButton>
        </li>}
        {/* <li className="semiBold font15 pointer">
          <AnimatedLink
            onClick={() => toggleSidebar(!sidebaropen)}
            activeclass="active"
            className="text-black dark:text-white"
            style={{ padding: "10px 15px" }}
            to="/blogs"
            spy="true"
            offset={-60}
          >
            Blog
          </AnimatedLink>
        </li> */}
        <li className="semiBold font15 pointer">
          <AnimatedLink
            onClick={() => toggleSidebar(!sidebaropen)}
            className="text-black dark:text-white"
            style={{ padding: "10px 15px" }}
            to="/contact"
            offset={-60}
          >
            Contact
          </AnimatedLink>
        </li>
        <li className="semiBold font15 pointer">
            <LanguageSelector toggleSidebar={toggleSidebar}/>
          </li>
      </UlStyle>
    </Wrapper>
  );
}

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
