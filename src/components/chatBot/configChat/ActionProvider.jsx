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
        generatedPrompt('Toma esta pregunta, reformulala, luego devuelve la respuesta sin devolver la reformulación de la respuesta, solo me interesa la respuesta en sí: '+ message)
    }
      else {
        let res2 = res
        console.log({res2});
        if (res2.includes('*') && !res2.response) {
          res2 = res2.replaceAll('*', ' ')
          res2 = res2.includes('Respuesta: ') ? res2.split('Respuesta: ')[1] : res2;
          }
        const botMessage = createChatBotMessage(res2? res2: res2.response);
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