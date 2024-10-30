import React from 'react'

function PostAdd({ isPostAdd, setPostAdd }) {
    return (
        <>
            <div className={`fixed inset-0 bg-gray-900 opacity-80 ${isPostAdd ? 'block' : 'hidden'} transition-opacity`} aria-hidden="true"></div>
            <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto ${isPostAdd ? 'block' : 'hidden'}`} aria-hidden="true">
                <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
                        <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                            <h3 className="text-xl font-semibold dark:text-white">
                                Thêm chủ đề
                            </h3>
                            <button onClick={() => setPostAdd(false)}
                                type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" data-modal-toggle="add-user-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên chủ đề</label>
                                    <input type="text" name="first-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slug</label>
                                    <input type="text" name="last-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chi tiết</label>
                                    <textarea rows={2} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                                </div>


                            </div>
                        </div>
                        <div className="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                            <button className="text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="submit">Lưu</button>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default PostAdd