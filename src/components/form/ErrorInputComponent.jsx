import React from 'react'

function ErrorInputComponent({ message }) {
    return (
        <div>
        {message && (
            <p className='text-red-600 text-xs absolute'>{message}</p>
        )}
        </div>
    )
}

export default ErrorInputComponent