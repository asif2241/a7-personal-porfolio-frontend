import React from 'react'

const LoadingPage = () => {
    return (
        <div className='flex justify-center items-center min-h-[100vh]'>
            <div>
                <span className="loading loading-spinner text-error"></span>
            </div>
        </div>
    )
}

export default LoadingPage