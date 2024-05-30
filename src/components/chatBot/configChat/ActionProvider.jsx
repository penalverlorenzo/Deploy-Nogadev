/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { GeneratedPromptAnswer } from "../componentsChat/GeneratedPromptAnswer";
import { createCustomMessage } from "react-chatbot-kit";
import { UseLanguageSections } from "../../../hooks/useLanguageSections";
const ActionProvider = ({ createChatBotMessage , setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(`Hello. I'm kike Nice to Meet you`)
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  const redirectToWhatsappLink = () =>{
    const botMessage = createCustomMessage(``, 'whatsapp')
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

  const language = UseLanguageSections('lang')
  const generatedPrompt = async (message) => {
    try {
      const res = await GeneratedPromptAnswer(message, language)
        let res2 = res
        console.log({res: res2.error});
        // if (!res2.response && res2.includes('*')) {
        //   res2 = res2.replaceAll('*', ' ')
        //   res2 = res2.includes('Respuesta: ') ? res2.split('Respuesta: ')[1] : res2;
        // }
        const response = res2? res2: res2.response
        const botMessage = createChatBotMessage(res2.error? res2.error: response );
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
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
            redirectToWhatsappLink,
            generatedPrompt
          },
        });
      })}
    </div>
  );
};
export default ActionProvider;