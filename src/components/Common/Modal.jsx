import React from 'react'
import { Icon } from '@iconify/react';
function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
                >
                    <Icon icon="carbon:close-filled" width="24" height="24" />
                </button>
                {children}
            </div>
        </div>

    )
}

export default Modal