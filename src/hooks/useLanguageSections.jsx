import { useContext } from 'react';
import { DataProvider } from '../context/DataContextProvider';

export const useLanguageSections = (sectionName) => {
  const { languajeFile } = useContext(DataProvider);
  const section = languajeFile.sections[sectionName]
  return section;
};
