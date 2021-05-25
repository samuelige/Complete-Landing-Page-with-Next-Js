import React from 'react'

const Modal = ({children, close}) => {
    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <button
                    className=" p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={close}
                    >
                    
                    <span className="bg-transparent text-red-500  h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                    </span>
                </button>

                {children}
                </div>
            
            
            
            
            
        </div>
    )
}

export default Modal
