import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = async (message) => {
    actions.generatedPrompt(message)
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions
        });
      })}
    </div>
  );
};

export default MessageParser;
