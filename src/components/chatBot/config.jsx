import { createChatBotMessage, createClientMessage,  } from 'react-chatbot-kit';
import { FlightBotAvatar } from './FlightBotAvatar';
import { MyUserAvatar } from './MyUserAvatar';

const config = {
  customStyles: {

  },
  initialMessages: [
    createClientMessage('Hello Kike!',{
    delay: 1000,
    load: true,
  }),
    createChatBotMessage(`Hello. en que puedo ayudarte`),
],
  widgets: [
  // {
  //   widgetName: 'generatePromptAnswer',
  //   widgetFunc: (props) => {
  //     const message = props.state.messages.filter(item => item.type === 'user')
  //     return <GeneratedPromptAnswer prompt={message[message.length -1].message}{...props}></GeneratedPromptAnswer>
  //   }
  // }
],
customComponents: {
 // Replaces the default bot avatar
  botAvatar: (props) => <FlightBotAvatar {...props} />,
 // Replaces the default user icon
  userAvatar: (props) => <MyUserAvatar {...props} />,
},
};
export default config;