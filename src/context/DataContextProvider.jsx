/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import English from "../languages/EN.json";
import Spanish from "../languages/ES.json";
export const DataProvider = createContext();

export const DataContextProvider = ({children})=>{
  const [languajeFile, setLanguajeFile] = useState(English);

  const handleLanguaje = ()=>{
    if (languajeFile.lang === 'EN') {
      setLanguajeFile(Spanish);
    }else{
      setLanguajeFile(English);
    }
  }
  return (
    <DataProvider.Provider value={{handleLanguaje, languajeFile}}>
      {children}
    </DataProvider.Provider>
  )
}