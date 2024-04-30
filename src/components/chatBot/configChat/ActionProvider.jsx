/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { GeneratedPromptAnswer } from "../componentsChat/GeneratedPromptAnswer";
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(`Hello. I'm kike Nice to Meet you`)
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleOption = (message) => {
    const langOptionsES = /^(opciones|opsiones|opsion|opcion)\b/i;

    if (langOptionsES.test(message)) {
      const botMessage = createChatBotMessage("Aqui estan las Opciones:", {
        widget: 'optionInitialES',
      })
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      const botMessage = createChatBotMessage("Here are the options:", {
        widget: 'optionInitialEN',
      })
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }

  }

  const generatedPrompt = async (message) => {
    try {
      const res = await GeneratedPromptAnswer(message)
      if (res === "" || res.response === "" || res === null || res === undefined) {
        const res2 = await GeneratedPromptAnswer('Toma esta pregunta, reformulala, luego devuelve la respuesta sin devolver la reformulación de la respuesta, solo me interesa la respuesta en sí: '+ message)
        let re;
        if (res2.includes('*')) {
          re = res2.replaceAll('*', ' ')
        }
        else{
          re = res2
        }
        const botMessage = createChatBotMessage(re);
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));  
    }
      else {
        const botMessage = createChatBotMessage(res? res: res.response);
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleOption,
            generatedPrompt
          },
        });
      })}
    </div>
  );
};
export default ActionProvider;