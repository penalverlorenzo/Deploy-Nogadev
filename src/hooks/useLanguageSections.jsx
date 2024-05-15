import { useContext } from 'react';
import { DataProvider } from '../context/DataContextProvider';

export const UseLanguageSections = (sectionName) => {
  const { languajeFile } = useContext(DataProvider);
  const section = languajeFile.sections[sectionName];
  return section;
};
