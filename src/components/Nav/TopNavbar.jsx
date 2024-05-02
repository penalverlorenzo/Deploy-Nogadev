import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Sidebar } from "../Nav/Sidebar";
import { Backdrop } from "../Elements/Backdrop";

import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { AnimatedLink } from "../viewTransition/AnimatedLink";

export const TopNavbar = () => {
  const [y, setY] = useState(window.scrollY);
  const [sidebaropen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebaropen={sidebaropen} toggleSidebar={toggleSidebar} />
      {sidebaropen ? <Backdrop toggleSidebar={toggleSidebar} /> : ''}
      <Wrapper className="flexCenter animate whiteBg" style={{ height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="/">
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              Software Solutions
            </h1>
          </Link>
          <BurderWrapper className="pointer" title="Burger menu" onClick={() => toggleSidebar(!sidebaropen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <AnimatedLink style={{ padding: "10px 15px" }} to="/" offset={-80}>
                Home
              </AnimatedLink>
            </li>
            <li className="semiBold font15 pointer">
              <a style={{ padding: "10px 15px" }} href="/" offset={-80}>
                Services
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <AnimatedLink style={{ padding: "10px 15px" }} to="/blogs" offset={-80}>
                Blog
              </AnimatedLink>
            </li>
        
            <li className="semiBold font15 pointer ml-2">
              <AnimatedLink style={{ padding: "10px 15px" }} to="/contact" offset={-80}>
                Contact
              </AnimatedLink>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a href="/" style={{ padding: "10px 30px 10px 0" }}>
                Log in
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                Get Started
              </a>
            </li>
          </UlWrapperRight>
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
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


