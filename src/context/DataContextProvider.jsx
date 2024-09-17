/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import English from "../languages/EN.json";
import Spanish from "../languages/ES.json";
import { getSessionId, saveSessionId } from "../utils/handlerSessionId.js";
export const DataProvider = createContext();

export const DataContextProvider = ({children})=>{
  const [languajeFile, setLanguajeFile] = useState(Spanish);
  const [sessionId, setSessionId] = useState(getSessionId());
  // const [iaModelFile, setIaModelFile] = useState(Spanish);
  useEffect(() => {
    if (!sessionId) {
      setSessionId(saveSessionId);
    }
  }, []);
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
    <DataProvider.Provider value={{handleLanguaje, languajeFile, sessionId}}>
      {children}
    </DataProvider.Provider>
  )
}