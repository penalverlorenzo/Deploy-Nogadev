/* eslint-disable react/prop-types */
import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

export const AnimatedLink = ({ to, children,className }) => {
  const navigate = useNavigate();

  return (
    <a
      href={to}
      onClick={(ev) => {
        ev.preventDefault();
        document.startViewTransition(() => {
          flushSync(() => {
            navigate(to);
          });
        });
      }}
      className={className ?? className}
    >
      {children}
    </a>
  );
};