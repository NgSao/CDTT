import React from 'react';
import { FaHome } from "react-icons/fa";

const TopicData = [
    { id: 1, name: 'Tin công nghệ', description: 'Cập nhật thông tin về công nghệ mới.' },
    { id: 2, name: 'Tin thể thao', description: 'Cập nhật thông tin thể thao.' },
    { id: 3, name: 'Tin thời sự', description: 'Thông tin thời sự nóng hổi.' },
];

function Topic() {
    return (
        <div className='flex flex-row gap-10 p-4'>
            <div className='flex flex-row items-center gap-2'>
                <FaHome className='text-lg font-semibold' />
                <h1 className='text-lg font-semibold'>Tin tức</h1>
            </div>

            {TopicData.map((topic) => (
                <div className='flex flex-row items-center gap-2'>
                    <h1 className='text-lg font-semibold'>{topic.name}</h1>

                </div>
            ))}

        </div>
    );
}

export default Topic;
