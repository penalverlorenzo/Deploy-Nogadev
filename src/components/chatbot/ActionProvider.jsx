
import React from "react";


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const generatedPrompt = ()=>{
    const botMessage = createChatBotMessage(`Here's what I found: `, {widget: 'generatePromptAnswer'});
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
            generatedPrompt
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
