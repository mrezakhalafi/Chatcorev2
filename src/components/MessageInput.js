import React, { useState } from 'react';

const MessageInput = ({ socket }) => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (message) {
            socket.emit('send_message', message);
            setMessage('');
        }
    };

    return (
        <div className="p-4 border-t">
            <input
                type="text"
                className="border rounded w-full p-2"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white p-2 rounded mt-2"
                onClick={sendMessage}
            >
                Send
            </button>
        </div>
    );
};

export default MessageInput;
