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
      generateToken();
      refreshToken();
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
    <div id='draggableElement' className={`fixed bottom-8 left-5 h-8 z-20 `}>
      <div className={`transition relative ${toggle ? "scale-0 translate-y-40 -translate-x-10" : "scale-100 translate-y-0 translate-x-0"}`}>
        <div className='absolute bottom-1'>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>

      <div className={`${animation ? "animationIcon" : ""} w-[35px] relative transition-all`} onClick={() => toggle ? (setToggle(false), setAnimation(false)) : (setToggle(true), setAnimation(true))}>
        <p className={`${animation ? "" : "hidden"} ${show ? "AnimationPInition" : "scale-0"} absolute AnimationP p-2 bg-black text-white cursor-pointer w-20 rounded-xl transition`}>Hello!👋</p>
        <p className={`${animation ? "" : "hidden"} ${show ? "AnimationHelpInition" : "scale-0"} absolute AnimationPHelp p-2 bg-black text-white cursor-pointer w-40 rounded-xl rounded-bl-none transition`}>How can we help you?</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rocket cursor-pointer rocket" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#4d566d" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
          <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
          <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </svg>
      </div>
    </div>
  );
}

export default ChatBotContain;