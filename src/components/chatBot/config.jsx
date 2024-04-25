import { createChatBotMessage, createClientMessage } from 'react-chatbot-kit';
import { GeneratedPromptAnswer } from './GeneratedPromptAnswer';

const config = {
  initialMessages: [
    createClientMessage('Hello Kike!',{
    delay: 1000,
    load: true,
  }),
    createChatBotMessage(`Hello. en que puedo ayudarte`),
],
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