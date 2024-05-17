/* eslint-disable react/prop-types */
import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

export const AnimatedLink = ({ to, children,className }) => {
  const navigate = useNavigate();

  const scrollToTop =()=>{
    const targetElement = document.getElementById('top');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const changeView = (ev) => {
    ev.preventDefault();
    scrollToTop();
    document.startViewTransition(() => {
      flushSync(() => {
        navigate(to);
      });
    });
  }
  
  return (
    <a
      href={to}
      onClick={changeView}
      className={className ?? className}
    >
      {children}
    </a>
  );
};