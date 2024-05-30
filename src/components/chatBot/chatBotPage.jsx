/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';


import config from './configChat/config';
import MessageParser from './configChat/MessageParser';
import ActionProvider from './configChat/ActionProvider';
import './ChatBotPage.css';
import { generateToken } from './componentsChat/AccessToken';
import { UseLanguageSections } from '../../hooks/useLanguageSections';

function ChatBotPage() {
  const chatbotText = UseLanguageSections('chatbot')

  useEffect(()=>{
    const intialMessages = document.querySelectorAll('.react-chatbot-kit-chat-bot-message')
    const headerChat = document.querySelector('.react-chatbot-kit-chat-header')
    const inputChat = document.querySelector('.react-chatbot-kit-chat-input')

    if (headerChat) headerChat.innerText = chatbotText.headerChat;
    
    if (intialMessages.length > 1) {
      intialMessages[0].innerText = chatbotText.initialMessages[0]
      intialMessages[1].innerText = chatbotText.initialMessages[1]
    }

    if (inputChat) inputChat.placeholder = chatbotText.inputPlaceholder;

  }, [chatbotText])
  
  useEffect(()=> {
    const btn = document.querySelector(".react-chatbot-kit-chat-btn-send")
    btn.title = "boton para enviar el mensaje."
  }, [])
  
  useEffect(() => {
    const showTimeout = setTimeout(() => {
      generateToken();
    }, 1500);

    return () => {
      clearTimeout(showTimeout);
    };
  }, []);

  return (
    <>
          <div>
            <Chatbot
              config={config()}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
              submitButtonTitle="Enviar mensaje"
              ariaLabel="Enviar mensaje al chatbot" 
            />
          </div>
    </>
  );
}

export default ChatBotPage;