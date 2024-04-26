/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { GeneratedPromptAnswer } from "./GeneratedPromptAnswer";


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = ()=>{
    const botMessage = createChatBotMessage(`Hello. I'm kike Nice to Meet you`)
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const generatedPrompt = async(message)=>{
    const res = await GeneratedPromptAnswer(message)
    console.log({res});
    const botMessage = createChatBotMessage(res);
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
            generatedPrompt
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;