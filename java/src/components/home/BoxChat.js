import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdClose, MdChat, MdPhone } from 'react-icons/md';
import zaloImage from './../../images/zalo.jpeg';
import messageImage from './../../images/message.jpg';

const BoxChat = () => {
    const [expanded, setExpanded] = useState(false);

    const handlePress = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="fixed right-10 bottom-20 flex flex-col items-end">
            {expanded && (
                <div className="absolute bottom-16 right-0 flex flex-col items-center">
                    <a
                        href="https://zalo.me/0392445255"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-white p-2 my-1 rounded-full shadow-md hover:shadow-lg"
                    >
                        <img src={zaloImage} alt="Zalo" className="w-7 h-7" />
                    </a>
                    <a
                        href="https://www.facebook.com/messages/t/100070104164297"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-white p-2 my-1 rounded-full shadow-md hover:shadow-lg"
                    >
                        <img src={messageImage} alt="Messenger" className="w-7 h-7" />
                    </a>
                    <a
                        href="tel:0392445255"
                        className="flex items-center bg-white p-2 my-1 rounded-full shadow-md hover:shadow-lg"
                    >
                        <MdPhone size={24} className="text-green-600" />
                    </a>
                </div>
            )}
            <button
                onClick={handlePress}
                className="flex items-center justify-center bg-red-700 p-4 rounded-full shadow-md hover:bg-red-500 focus:outline-none"
            >
                {expanded ? (
                    <MdClose size={24} className="text-white" />
                ) : (
                    <div className="relative">
                        {[...Array(3).keys()].map((index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0.7, scale: 1 }}
                                animate={{ opacity: 0, scale: 4 }}
                                transition={{
                                    duration: 2,
                                    ease: 'easeOut',
                                    delay: index * 0.4,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                }}
                                className="absolute inset-0 bg-red-700 rounded-full"
                            />
                        ))}
                        <MdChat size={24} className="text-white" />
                    </div>
                )}
            </button>
        </div>
    );
};

export default BoxChat;
