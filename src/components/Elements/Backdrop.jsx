/* eslint-disable react/prop-types */

import styled from "styled-components";

export const Backdrop = ({ toggleSidebar }) =>{
  return <Wrapper className="bg-[#0B093B]" onClick={() => toggleSidebar(false)}></Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.8;
`;
