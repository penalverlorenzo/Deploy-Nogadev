import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import config from './config'
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider'
import { useState } from 'react'
import './ChatBot.css'


function ChatBotContain() {
  const [toggle, setToggle] = useState(true);
  const [animation, setAnimation] = useState(true)
  return (
    <>
    <div className={`fixed bottom-8 left-5 `}>
        <div className={`transition ${toggle ? "scale-0 translate-y-52 -translate-x-32" : "scale-100 translate-y-0 translate-x-0"}`}>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
      </div>
      <div className={`${animation ? "animationIcon" : ""} cursor-pointer`} onClick={() => toggle ? (setToggle(false), setAnimation(false)) : (setToggle(true), setAnimation(true))}>
      <svg  xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-affiliate-filled cursor-pointer`}  width="54" height="54" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M18.5 3a2.5 2.5 0 1 1 -.912 4.828l-4.556 4.555a5.475 5.475 0 0 1 .936 3.714l2.624 .787a2.5 2.5 0 1 1 -.575 1.916l-2.623 -.788a5.5 5.5 0 0 1 -10.39 -2.29l-.004 -.222l.004 -.221a5.5 5.5 0 0 1 2.984 -4.673l-.788 -2.624a2.498 2.498 0 0 1 -2.194 -2.304l-.006 -.178l.005 -.164a2.5 2.5 0 1 1 4.111 2.071l.787 2.625a5.475 5.475 0 0 1 3.714 .936l4.555 -4.556a2.487 2.487 0 0 1 -.167 -.748l-.005 -.164l.005 -.164a2.5 2.5 0 0 1 2.495 -2.336z" stroke-width="0" fill="currentColor" />
      </svg>

      </div>

    </div>
    </>
  )
}

export default ChatBotContain
