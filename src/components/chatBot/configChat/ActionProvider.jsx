/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { GeneratedPromptAnswer } from "../componentsChat/GeneratedPromptAnswer";
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = ()=>{
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

  const generatedPrompt = async(message)=>{
    const res = await GeneratedPromptAnswer(message)
    const splite = res.replaceAll('*', ' ')

    const regex = /Respuesta(?:\sKike)?:\s*(.*)/g

    const parsedMsg = splite.match(regex);
    console.log({parsedMsg});

    console.log({splite}); 
    const respuesta = parsedMsg || splite;
    const botMessage = createChatBotMessage(respuesta);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
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