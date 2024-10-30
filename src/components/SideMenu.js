import { useState } from 'react';
import { Cog6ToothIcon, UserIcon, ChatBubbleBottomCenterTextIcon, SignalIcon, ChatBubbleOvalLeftEllipsisIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const SideMenu = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleActive = (index) => {
        setActiveIndex(index);
    }

    return (
        <div className="h-screen bg-gray-200 w-15 flex flex-col justify-between z-50">
            <div className="flex flex-col space-y-4 p-5">
                <button title='Chat' onClick={() => handleActive(0)} className={`text-gray-600 hover:text-gray-800 flex justify-center items-center rounded-full p-1 ${activeIndex === 0 ? 'bg-gray-400' : ''}`}>
                    <ChatBubbleBottomCenterTextIcon className="h-7 w-7" />
                </button>
                <button title='Status' onClick={() => handleActive(1)} className={`text-gray-600 hover:text-gray-800 flex justify-center items-center rounded-full p-1 ${activeIndex === 1 ? 'bg-gray-400' : ''}`}>
                    <SignalIcon className="h-7 w-7" />
                </button>
                <button title='Channel' onClick={() => handleActive(2)} className={`text-gray-600 hover:text-gray-800 flex justify-center items-center rounded-full p-1 ${activeIndex === 2 ? 'bg-gray-400' : ''}`}>
                    < ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7" />
                </button >
                <button title='Communities' onClick={() => handleActive(3)} className={`text-gray-600 hover:text-gray-800 flex justify-center items-center rounded-full p-1 ${activeIndex === 3 ? 'bg-gray-400' : ''}`}>
                    < UserGroupIcon className="h-7 w-7" />
                </button >
            </div >
            <div className='flex flex-col space-y-4 p-5'>
                <button title='Settings' onClick={() => handleActive(4)} className={`text-gray-600 hover:text-gray-800 flex justify-center items-center rounded-full p-1 ${activeIndex === 4 ? 'bg-gray-400' : ''}`}>
                    <Cog6ToothIcon className="h-7 w-7" />
                </button>
                <button title='Profile' onClick={() => handleActive(5)} className={`text-gray-600 hover:text-gray-800 flex justify-center items-center rounded-full p-1 ${activeIndex === 5 ? 'bg-gray-400' : ''}`}>
                    < UserIcon className="h-7 w-7" />
                </button >
            </div >
        </div >
    );
}

export default SideMenu;
