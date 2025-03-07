import React from 'react'

function PostDelete({ isPostDelete, setPostDelete }) {
    return (
        <>
            <div className={`fixed inset-0 bg-gray-900 opacity-80 ${isPostDelete ? 'block' : 'hidden'} transition-opacity`} aria-hidden="true"></div>
            <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto ${isPostDelete ? 'block' : 'hidden'}`} aria-hidden="true">
                <div className="relative w-full h-full max-w-md px-4 md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
                        <div className="flex justify-end p-2">
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" data-modal-toggle="delete-user-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </button>
                        </div>
                        <div className="p-6 pt-0 text-center">
                            <svg className="w-16 h-16 mx-auto text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <h3 className="mt-5 mb-6 text-lg text-gray-500 dark:text-gray-400">Bạn có chắc chắn muốn xóa người dùng này không?</h3>
                            <button onClick={() => { setPostDelete(false); }} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2 dark:focus:ring-red-800">
                                Yes, I'm sure
                            </button>
                            <button onClick={() => { setPostDelete(false); }} className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-green-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" data-modal-toggle="delete-user-modal">
                                No, cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default PostDelete