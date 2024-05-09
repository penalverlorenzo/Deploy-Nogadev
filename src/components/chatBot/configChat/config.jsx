import { createChatBotMessage } from 'react-chatbot-kit';
import { FlightBotAvatar } from '../componentsChat/FlightBotAvatar';
import { OptionInitial } from '../componentsChat/OptionInitial';


const config = {
  initialMessages: [
    createChatBotMessage(`Hola. ¿Cómo puedo ayudarte?`,{ delay: 2000} ),
    createChatBotMessage(`Si aún no estas seguro de qué preguntar, prueba a escribir "opciones"`,{ delay: 2000} )
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
},
};
export default config;