import React, { useState } from 'react';
import './ChatbotFunctionality.css'

function ChatbotFunctionality() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await fetch('http://localhost:8000/simple_chatbot/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        const json = await res.json();
        setResponse(json);
    }

    return (
        <div className='chatbotBody outer-container'>
            <div className='chat-bar-collapsible'>
                <button className='collapsible'>Chatbot</button>
                <div className='content full-chat-block'>
                    <div className='chat-container'>
                        <div className='chat-bar-input-block'>
                            <form onSubmit={handleSubmit}>
                                <input type="text" placeholder="Enter your message" value={message} onChange={e => setMessage(e.target.value)} className='input-box'/>
                                <button type="submit" className='chat-bar-icons'>Send</button>
                            </form>
                        </div>
                        <div>
                            <p className='userText'>Chatbot: {response.message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatbotFunctionality;
