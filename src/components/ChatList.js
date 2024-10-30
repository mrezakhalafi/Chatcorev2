import React, { useState } from 'react';

const chats = [
    { name: 'Joestar', lastMessage: 'Chat terbaru', time: '25/08/2024' },
    { name: 'Eddie', lastMessage: 'Hai apa kabar?', time: '22:05' },
    { name: 'SweetCatz', lastMessage: 'Selamat Jalan', time: '21:20', unreadCount: 4 },
];

const ChatList = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleActive = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="flex-1 overflow-y-auto p-4">
            {/* Filter */}
            <div className="flex space-x-3 mb-4">
                <button onClick={() => handleActive(0)} className={`${activeIndex === 0 ? 'text-green-600 font-semibold' : 'text-gray-500'}`}>All</button>
                <button onClick={() => handleActive(1)} className={`${activeIndex === 1 ? 'text-green-600 font-semibold' : 'text-gray-500'}`}>Unread</button>
                <button onClick={() => handleActive(2)} className={`${activeIndex === 2 ? 'text-green-600 font-semibold' : 'text-gray-500'}`}>Favourites</button>
                <button onClick={() => handleActive(3)} className={`${activeIndex === 3 ? 'text-green-600 font-semibold' : 'text-gray-500'}`}>Groups</button>
            </div>

            {/* Chat List */}
            <div>
                {chats.map((chat, index) => (
                    <div key={index} className="flex items-center py-2 border-b hover:bg-gray-200 cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-gray-300 mr-3"></div>
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <h3 className="font-semibold">{chat.name}</h3>
                                <span className="text-xs text-gray-500">{chat.time}</span>
                            </div>
                            <p className="text-gray-600 text-sm truncate">{chat.lastMessage}</p>
                        </div>
                        {chat.unreadCount && (
                            <span className="text-xs bg-green-500 text-white rounded-full px-2 py-0.5 ml-2">
                                {chat.unreadCount}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatList;