/* eslint-disable react/prop-types */
import { useState } from "react";

// import { LanguageIcon } from "../../assets/svg/LanguageIcon";
// import { UseLanguageSections } from "../../hooks/useLanguageSections";
export const IASelect = () => {
  const [seeOptions, setSeeOptions] = useState(false);
//   const lang = UseLanguageSections("lang");
//   const { handleLanguaje } = useContext(DataProvider);
    const [iaModel, setIaModel] = useState('Gemini') 

  return (
    <div className="relative inline-block w-20 cursor-pointer mt-1">
      <button className="w-full dark:text-white border border-gray-300 rounded-md  py-2 pr-2 text-left  focus:outline-none sm:text-sm"
      onClick={()=>setSeeOptions(!seeOptions)}
      >
        <span className="flex items-center">
          {/* <LanguageIcon className="text-black dark:text-white mr-2" /> */}
          <span className="block" id="IA">{iaModel}</span>
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
                setIaModel('ChatGPT')
                setSeeOptions(false);
            //   toggleSidebar(false)
            }}
          >
            <span className="font-normal block">ChatGPT</span>
          </li>
          <li
            className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 dark:text-white/90 hover:bg-gray-200 dark:hover:bg-gray-900"
            id="listbox-option-2"
            role="option"
            onClick={() => {
                setIaModel('Gemini')
                setSeeOptions(false);
            //   toggleSidebar(false)
            }}
          >
            <span className="font-normal block">Gemini</span>
          </li>
        </ul>
      </div>}
    </div>
  );
};
