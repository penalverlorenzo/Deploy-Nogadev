/* eslint-disable react/prop-types */

export const ScrollButton = ({ targetId, children, className }) => {
  const scrollTo = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={scrollTo} title="button to top page" className={className?? className}>
      {children}
    </button>
  );
}

