/* eslint-disable react/prop-types */
import { useContext, useState } from "react";

import { LanguageIcon } from "../../assets/svg/LanguageIcon";
import { UseLanguageSections } from "../../hooks/useLanguageSections";
import { DataProvider } from "../../context/DataContextProvider";

export const LanguageSelector = ({toggleSidebar}) => {
  const [seeOptions, setSeeOptions] = useState(false);
  const lang = UseLanguageSections("lang");
  const { handleLanguaje } = useContext(DataProvider);

  return (
    <div className="relative inline-block cursor-pointer ">
      <button className="w-full dark:text-white border border-gray-300 rounded-md  py-2 pr-2 text-left  focus:outline-none sm:text-sm"
      onClick={()=>setSeeOptions(!seeOptions)}
      >
        <span className="flex items-center">
          <LanguageIcon className="text-black dark:text-white mr-2" />
          <span className="block ">{lang}</span>
        </span>
      </button>
      {seeOptions && <div className="absolute mt-1 w-full rounded-md bg-white dark:bg-[#1e293b] shadow-lg">
        <ul
          className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          role="listbox"
          aria-labelledby="listbox-label"
        >
          <li
            className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 dark:text-white/90 hover:bg-gray-200 dark:hover:bg-gray-900"
            id="listbox-option-1"
            role="option"
            onClick={() => {
              handleLanguaje("English"); 
              setSeeOptions(false);
              toggleSidebar(false)
            }}
          >
            <span className="font-normal block">English</span>
          </li>
          <li
            className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 dark:text-white/90 hover:bg-gray-200 dark:hover:bg-gray-900"
            id="listbox-option-2"
            role="option"
            onClick={() => {
              handleLanguaje("Español"); 
              setSeeOptions(false);
              toggleSidebar(false)
            }}
          >
            <span className="font-normal block">Español</span>
          </li>
        </ul>
      </div>}
    </div>
  );
};
