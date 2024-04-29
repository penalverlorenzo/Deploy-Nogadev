import { createChatBotMessage, createClientMessage,  } from 'react-chatbot-kit';
import { FlightBotAvatar } from './FlightBotAvatar';
import { MyUserAvatar } from './MyUserAvatar';
import { InitialOptions } from './InitialOptions';

const config = {
  customStyles: {

  },
  initialMessages: [
    createClientMessage('Hello Kike!',{
    delay: 1000,
    load: true,
  }),
    createChatBotMessage(`Hello. en que puedo ayudarte`, {widget: 'initialOptions'}),
],
  widgets: [
  {
    widgetName: 'initialOptions',
    widgetFunc: (props) => {
      try{
        const message = props.state.messages.filter(item => item.type === 'user')
        console.log(props);
        return <InitialOptions prompt={message[message.length -1].message}{...props}></InitialOptions>
    }catch(e){
      console.log({props});
      console.log(e);
    }
  }
  }
],
customComponents: {
 // Replaces the default bot avatar
  botAvatar: (props) => <FlightBotAvatar {...props} />,
 // Replaces the default user icon
  userAvatar: (props) => <MyUserAvatar {...props} />,
},
};
export default config;