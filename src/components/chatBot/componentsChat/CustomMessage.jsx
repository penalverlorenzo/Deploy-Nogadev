/* eslint-disable react/prop-types */
import Markdown from "react-markdown"
import LazyImageLoader from "../../LazyLoading/LazyLoadingContainer"
import img from '../../../assets/img/lowResIcon.jpg'
export const CustomMessage = ({message} ) => {
    console.log({message});
    
  return (
    <>
      <div className="react-chatbot-kit-chat-bot-message-container" id="md-container">
        <div className="size-10 mr-3 ">
          <div>
            <LazyImageLoader>
              <img className="rounded-t-full rounded-r-full" src={img} alt="" />
            </LazyImageLoader>
          </div>
        </div>
        <div className="react-chatbot-kit-chat-bot-message">
          <Markdown>
            {message}
          </Markdown>
          <div className="react-chatbot-kit-chat-bot-message-arrow">
          </div>
        </div>
      </div>

    </>
  )
}