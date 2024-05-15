import { createChatBotMessage } from 'react-chatbot-kit';
import { FlightBotAvatar } from '../componentsChat/FlightBotAvatar';
import { OptionInitial } from '../componentsChat/OptionInitial';
import { UseLanguageSections } from '../../../hooks/UseLanguageSections';


const ConfigBot = () => {
  const chatbotText = UseLanguageSections('chatbot');
  const config = {
    initialMessages: [
      createChatBotMessage(`${chatbotText.initialMessages[0]}`, { delay: 2000, id: 'coso' }),
      createChatBotMessage(`${chatbotText.initialMessages[1]}`, { delay: 2000 })
    ],
    widgets: [
      {
        widgetName: 'optionInitialEN',
        widgetFunc: (props) => <OptionInitial lang={"EN"} props={props} {...props} />
      },
      {
        widgetName: 'optionInitialES',
        widgetFunc: (props) => <OptionInitial lang={"ES"} props={props} {...props} />
      }
    ],
    customComponents: {
      // Replaces the default bot avatar
      header: (props) => <div className='react-chatbot-kit-chat-header' {...props}>{chatbotText.chatbotText}</div>,
      botAvatar: (props) => <FlightBotAvatar {...props} />,
    },
  };

  return config;
}
export default ConfigBot;