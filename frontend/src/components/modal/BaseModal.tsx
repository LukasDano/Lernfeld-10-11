import type { FC, ReactNode } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';

type BaseModalProps = {
    isOpen: boolean;
    onClose: () => void;
    content: ReactNode;
    title: string;
};

export const BaseModal: FC<BaseModalProps> = ({ isOpen, onClose, content, title }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50
             bg-black/50 backdrop-blur-sm text-white px-3 py-2 transition-opacity duration-300"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-xl p-6 relative text-black dark:text-white"
                onClick={(evt) => evt.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 dark:hover:text-gray-100 hover:text-gray-900 text-2xl cursor-pointer"
                    aria-label="Close modal"
                >
                    <FaRegWindowClose />
                </button>
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                {content}
            </div>
        </div>
    );
};
