/* eslint-disable react/prop-types */
export const LanguageIcon = ({className}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-globe ${className ?? className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" fill="currentColor" />
      <path d="M5.75 15a8.015 8.015 0 1 0 9.25 -13" />
      <path d="M11 17v4" />
      <path d="M7 21h8" />
    </svg>
  );
};
