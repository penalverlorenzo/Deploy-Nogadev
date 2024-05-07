/* eslint-disable react/prop-types */
import React from 'react';

const MessageParser = ({ children, actions }) => {
  

  function detectarSaludo(mensaje) {
    const patronesSaludo = /^(hola|hello|hi|hey|que\s?onda)\b/i;
    return patronesSaludo.test(mensaje);
}

function detectOption(mensaje) {
  const patronesOpciones = /^(options|option|opciones|opsiones|opsion|opcion)\b/i;
  return patronesOpciones.test(mensaje);
}

  const parse = (message) => {
    if (detectarSaludo(message)) {
      actions.handleHello();
    } else if (detectOption(message)) {
      actions.handleOption(message);
    }else {
      actions.generatedPrompt(message);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;