import { v4 as uuidv4 } from 'uuid';

export const getSessionId = () => {
  return localStorage.getItem('sessionId');
}
export const saveSessionId = () => {
  const id = uuidv4();
  localStorage.setItem('sessionId', id);
  return id;
}