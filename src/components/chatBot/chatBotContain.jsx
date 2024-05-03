/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './configChat/config';
import MessageParser from './configChat/MessageParser';
import ActionProvider from './configChat/ActionProvider';
import './ChatBot.css';
import { generateToken, refreshToken } from './componentsChat/AccessToken';

function ChatBotContain() {
  const [toggle, setToggle] = useState(true);
  const [animation, setAnimation] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {

    const draggableElement = document.getElementById('draggableElement');
    let offsetX, offsetY, isDragging = false;
    const handleMouseDown = (e) => {
      isDragging = true;
      
      offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
      offsetY = e.clientY - draggableElement.getBoundingClientRect().top;
      draggableElement.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      toggle ? setToggle(true): setToggle(true)
      const x = Math.min((window.innerWidth - 275) - draggableElement.offsetWidth, Math.max(0, e.clientX - offsetX));
      const y = Math.min(window.innerHeight - draggableElement.offsetHeight , Math.max(510, e.clientY - offsetY));

      draggableElement.style.left = x  + 'px';
      draggableElement.style.top = y + 'px';
    };

    const handleMouseUp = () => {
      isDragging = false;
      draggableElement.style.cursor = 'grab';
  
    };

    draggableElement.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      draggableElement.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      generateToken()
      refreshToken()
      setShow(true);
    }, 1500);
    const hideTimeout = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div id='draggableElement' className={`fixed bottom-8 left-5 h-8`}>
      <div className={`transition relative ${toggle ? "scale-0 translate-y-40 -translate-x-10" : "scale-100 translate-y-0 translate-x-0"}`}>
        <div className='absolute bottom-1'>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
      {/* Cambia el comportamiento del icono para abrir el chat */}
      <div className={`${animation ? "animationIcon" : ""} w-[54px] relative`} onClick={() => toggle ? (setToggle(false), setAnimation(false)) : (setToggle(true), setAnimation(true))}>
        <p className={`${animation ? "" : "hidden"} ${show ? "AnimationPInition" : ""} absolute AnimationNone AnimationP p-2 bg-black text-white cursor-pointer w-20 rounded-xl transition`}>Hello!👋</p>
        <p className={`${animation ? "" : "hidden"} ${show ? "AnimationHelpInition" : ""} absolute AnimationNone AnimationPHelp p-2 bg-black text-white cursor-pointer w-40 rounded-xl rounded-bl-none translate-x-40 transition`}>How can we help you?</p>
        <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-affiliate-filled cursor-pointer`} width="54" height="54" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M18.5 3a2.5 2.5 0 1 1 -.912 4.828l-4.556 4.555a5.475 5.475 0 0 1 .936 3.714l2.624 .787a2.5 2.5 0 1 1 -.575 1.916l-2.623 -.788a5.5 5.5 0 0 1 -10.39 -2.29l-.004 -.222l.004 -.221a5.5 5.5 0 0 1 2.984 -4.673l-.788 -2.624a2.498 2.498 0 0 1 -2.194 -2.304l-.006 -.178l.005 -.164a2.5 2.5 0 1 1 4.111 2.071l.787 2.625a5.475 5.475 0 0 1 3.714 .936l4.555 -4.556a2.487 2.487 0 0 1 -.167 -.748l-.005 -.164l.005 -.164a2.5 2.5 0 0 1 2.495 -2.336z" strokeWidth="0" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

export default ChatBotContain;