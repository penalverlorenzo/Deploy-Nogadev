/* eslint-disable react/prop-types */

export const ScrollButton = ({ targetId, children }) => {
  const scrollToTop = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={scrollToTop} className={'dark:text-white dark:hover:text-[#407aff]'} title="button to top page">
      {children}
    </button>
  );
}

