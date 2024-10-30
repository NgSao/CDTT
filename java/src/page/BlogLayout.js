import React from 'react'
import Topic from '../components/blog/Topic'

function BlogLayout() {
    return (
        <div className='bg-gray-100'>
            <div className='bg-gray-200 border-b-2 border-gray-300'>
                <div className='container mx-auto p-3 '>
                    <span>Trang chủ / </span>
                    <span>Tin tức</span>
                </div>
            </div>
            <div className='container mx-auto mt-6 bg-white rounded-lg'>
                <Topic />
            </div>
        </div>)
}

export default BlogLayout