/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"


export const GeneratedPromptAnswer = ({ prompt }) => {
    const [result, setResult] = useState('');

    useEffect(() => {
        async function fetchData(prompt) {
            try {
                const response = await fetch('http://localhost:3000/api/v1/info', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: prompt })
                });
                const data = await response.json();
                console.log({data});
                setResult(data);
            } catch (error) {
                console.log(result);
                setResult({response: `EN: There's something wrong, try sending your message again. ESP: Se ha producido un error, intenta enviar tu mensaje de vuelta`})
            }
        }
        fetchData(prompt);
    }, []);
    return (<section style={{ display: 'flex' }}>
        <div className="react-chatbot-kit-chat-bot-avatar">
            <div className="react-chatbot-kit-chat-bot-avatar-container">
                <p className="react-chatbot-kit-chat-bot-avatar-letter">B</p>
            </div>
        </div>
        <div className="react-chatbot-kit-chat-bot-message">
            <span>{result.response ?result.response: result.error }</span>
            <div className="react-chatbot-kit-chat-bot-message-arrow"></div>
        </div>
    </section>
    )
        ;
}