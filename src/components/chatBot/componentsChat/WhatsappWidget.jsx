import LazyImageLoader from "../../LazyLoading/LazyLoadingContainer"

export const WhatsappWidget = () => {
    return (
        <>
            <div className="react-chatbot-kit-chat-bot-message-container">
                <div className="size-10 mr-3 ">
                    <div>
                        <LazyImageLoader>
                        <img className="rounded-t-full rounded-r-full" src="/src/assets/img/lowResIcon.jpg" alt="" />
                        </LazyImageLoader>
                    </div>
                </div>
                <div className="react-chatbot-kit-chat-bot-message">
                    <a href="https://wa.me/5492612079772">Click this message to contact us in whatsapp</a>
                    <div className="react-chatbot-kit-chat-bot-message-arrow">
                    </div>
                </div>
            </div>

        </>
    )
}