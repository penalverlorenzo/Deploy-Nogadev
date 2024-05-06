import { createChatBotMessage } from 'react-chatbot-kit';
import { FlightBotAvatar } from '../componentsChat/FlightBotAvatar';
import { MyUserAvatar } from '../componentsChat/MyUserAvatar';
import { OptionInitial } from '../componentsChat/OptionInitial';


const config = {
  initialMessages: [
    createChatBotMessage(`Hello. How can I help you? `, {
      widget:  'optionInitialEN',
    }),
],
  widgets: [
    {
      widgetName: 'optionInitialEN',
      widgetFunc: (props) => <OptionInitial lang={"EN"}  props={props} {...props} />
    },
    {
      widgetName: 'optionInitialES',
      widgetFunc: (props) => <OptionInitial lang={"ES"} props={props} {...props} />
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