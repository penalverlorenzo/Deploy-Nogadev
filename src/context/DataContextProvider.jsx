/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import English from "../languages/EN.json";
import Spanish from "../languages/ES.json";
export const DataProvider = createContext();

export const DataContextProvider = ({children})=>{
  const [languajeFile, setLanguajeFile] = useState(Spanish);

  const handleLanguaje = (language)=>{
    if (languajeFile.lang === 'EN' && language === 'Español') {
      console.log('está en inglés y seseleccionaste español');
      setLanguajeFile(Spanish);
    }
    if (languajeFile.lang === 'ES' && language === 'English'){
      console.log('está en español y seseleccionaste inglés');
      setLanguajeFile(English);
    }
  }
  return (
    <DataProvider.Provider value={{handleLanguaje, languajeFile}}>
      {children}
    </DataProvider.Provider>
  )
}