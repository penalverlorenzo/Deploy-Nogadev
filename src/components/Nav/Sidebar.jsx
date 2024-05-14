/* eslint-disable react/prop-types */
// import { useContext } from "react";
import styled from "styled-components";

import { Link  } from "react-router-dom";
import CloseIcon from "../../assets/svg/CloseIcon";
import LightLogo from "../../assets/svg/LightLogo";
import { AnimatedLink } from "../viewTransition/AnimatedLink";
// import { DataProvider } from "../../context/DataContextProvider";
import { useLanguageSections } from "../../hooks/useLanguageSections";

export const Sidebar = ({ sidebaropen , toggleSidebar }) =>{
  // const { handleLanguaje } = useContext(DataProvider);
  const navbar = useLanguageSections('navbar');

  return (
    <Wrapper className="animate bg-[#0B093B]" style={{right: (sidebaropen ?  "0px" : "-400px" )}}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LightLogo />
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebaropen)} title="close sidebar menu" className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <AnimatedLink
            onClick={() => toggleSidebar(!sidebaropen)}
            className="text-white"
            style={{ padding: "10px 15px" }}
            to="/"
            offset={-60}
          >
            {navbar.home}
          </AnimatedLink>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebaropen)}
            className="text-white"
            style={{ padding: "10px 15px" }}
            to="/"
            offset={-60}
          >
            {navbar.services}
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <AnimatedLink
            onClick={() => toggleSidebar(!sidebaropen)}
            activeclass="active"
            className="text-white"
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
            className="text-white"
            style={{ padding: "10px 15px" }}
            to="/contact"
            offset={-60}
          >
            {navbar.contact}
          </AnimatedLink>
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
