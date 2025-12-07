import Tippy from '@tippyjs/react';
import type { FC, ReactNode } from 'react';

type BaseButtonProps = {
    onClick: () => void;
    icon: ReactNode;
    tooltip: string;
};

export const BaseButton: FC<BaseButtonProps> = ({ icon, onClick, tooltip }) => {
    return (
        <Tippy content={tooltip} animation={'scale'}>
            <button
                className={'flex items-center gap-2 px-4 py-2 rounded-lg shadow transition bg-blue-500'}
                onClick={onClick}
            >
                {icon}
            </button>
        </Tippy>
    );
};
