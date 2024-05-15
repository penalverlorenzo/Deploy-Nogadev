import { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Sidebar } from "../Nav/Sidebar";
import { Backdrop } from "../Elements/Backdrop";

import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { AnimatedLink } from "../viewTransition/AnimatedLink";
import { ScrollButton } from "../Elements/ScrollButton";
import { DataProvider } from "../../context/DataContextProvider";
import { UseLanguageSections } from "../../hooks/useLanguageSections";
import { DarkModeBtn } from "../Elements/DarkModeBtn";

export const TopNavbar = () => {
  const [sidebaropen, toggleSidebar] = useState(false);
  const { handleLanguaje } = useContext(DataProvider);
  const navbar = UseLanguageSections('navbar');


  return (
    <>
      <Sidebar sidebaropen={sidebaropen} toggleSidebar={toggleSidebar} />
      {sidebaropen ? <Backdrop toggleSidebar={toggleSidebar} /> : ''}
      <Wrapper className="flexCenter animate bg-white dark:bg-[#030620fb]" style={{ height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="/">
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold dark:text-white dark:hover:text-[#407aff]">
              Software Solutions
            </h1>
          </Link>
          <BurderWrapper className="pointer" title="Burger menu" onClick={() => toggleSidebar(!sidebaropen)}>
            <BurgerIcon />
          </BurderWrapper>
          <button className="rounded-lg bg-blue-400 py-2 px-4" onClick={handleLanguaje}>Cambiar idioma</button>
          <UlWrapper className="flexNullCenter gap-4">
            <li className="semiBold font15 pointer">
              <AnimatedLink className={"hover:text-[#407aff] dark:text-white"} style={{ padding: "10px 15px"}} to="/" offset={-80}>
                {navbar.home}
              </AnimatedLink>
            </li>
            <li className="semiBold font15 pointer">
              <ScrollButton style={{ padding: "10px 15px" }} targetId="services" offset={-80}>
                {navbar.services}
              </ScrollButton>
            </li>
            <li className="semiBold font15 pointer">
              <AnimatedLink className={'dark:text-white dark:hover:text-[#407aff]'} style={{ padding: "10px 15px" }} to="/blogs" offset={-80}>
                Blog
              </AnimatedLink>
            </li>
        
            <li className="semiBold font15 pointer ml-2">
              <AnimatedLink className={"dark:text-white hover:text-[#407aff]"} style={{ padding: "10px 15px" }} to="/contact" offset={-80}>
                {navbar.contact}
              </AnimatedLink>
            </li>
            <DarkModeBtn></DarkModeBtn>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;


