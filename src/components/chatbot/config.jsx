import React from 'react';
import pkg from 'react-chatbot-kit' 

const {createChatBotMessage} = pkg

import GeneratedPromptAnswer from './generatedPromptAnswer';


const config = {
  initialMessages: [createChatBotMessage(`Hello. I'm Nogabot, nice to meet you`)],
  widgets: [
  {
    widgetName: 'generatePromptAnswer',
    widgetFunc: (props) => {
      const message = props.state.messages.filter(item => item.type === 'user')
      return <GeneratedPromptAnswer prompt={message[message.length -1].message}{...props}></GeneratedPromptAnswer>
    }
  }
],
};

export default config;
