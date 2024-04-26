import { useEffect, useState } from "react"


const GeneratedPromptAnswer = ({ prompt }) => {
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
                setResult(data);
            } catch (error) {
                console.error('Error fetching data:', error);
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
            <span>{result.response}</span>
            <div className="react-chatbot-kit-chat-bot-message-arrow"></div>
        </div>
    </section>
    );
}

export default GeneratedPromptAnswer
