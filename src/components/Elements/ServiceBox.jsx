/* eslint-disable react/prop-types */

import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";

export const ServiceBox=({icon, title, subtitle}) =>{
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <RollerIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      break;
    case "Cybersecurity":
      getIcon = <svg className="rounded-full bg-blue-600 h-10 md:h-12 md:p-3 md:w-12 mr-4 p-2 rtl:ml-4 rtl:mr-0 text-white w-10" viewBox="0 0 24 24" data-icon="tabler:shield-lock" height="24" width="24"><symbol id="ai:tabler:shield-lock"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21A12 12 0 0 1 3.5 6A12 12 0 0 0 12 3"></path><path d="M11 11a1 1 0 1 0 2 0a1 1 0 1 0-2 0m1 1v2.5"></path></g></symbol><use xlinkHref="#ai:tabler:shield-lock"></use></svg>
      break;
      case "Shopping":
        getIcon = <svg className="rounded-full bg-blue-600 h-10 md:h-12 md:p-3 md:w-12 mr-4 p-2 rtl:ml-4 rtl:mr-0 text-white w-10" viewBox="0 0 24 24" data-icon="tabler:shopping-cart-up" height="24" width="24"><symbol id="ai:tabler:shopping-cart-up"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></path><path d="M12.5 17H6V3H4"></path><path d="m6 5l14 1l-.854 5.977M16.5 13H6m13 9v-6m3 3l-3-3l-3 3"></path></g></symbol><use xlinkHref="#ai:tabler:shopping-cart-up"></use></svg>
        break;
    default:
      getIcon = <RollerIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font-bold text-xl md:text-[1.3rem]">{title}</TitleStyle>
      <p className="text-lg font-semibold text-muted">{subtitle}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
// const SubtitleStyle = styled.p`
//   width: 100%;
//   max-width: 300px;
//   margin: 0 auto;
// `;