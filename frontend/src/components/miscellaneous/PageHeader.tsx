import Tippy from '@tippyjs/react';
import type { FC, ReactNode } from 'react';
import { IoIosAdd } from 'react-icons/io';

type HeaderProps = {
    openAddDataModal: () => void;
};

export const PageHeader: FC<HeaderProps> = ({ openAddDataModal }) => {
    return (
        <nav
            className="p-4 bg-gray-100 border-b border-gray-300
                            dark:bg-gray-800 dark:border-gray-900
                            flex items-center justify-between sticky top-0 z-20 shadow"
        >
            <div className="flex items-center gap-4">
                <h1 className="text-4xl font-bold text-black">Laufchallenge</h1>
            </div>

            <div className="flex items-center gap-6 flex-wrap justify-end">
                <HeaderButton
                    icon={<IoIosAdd className={'w-6 h-6'} />}
                    tooltip={'Erfasse einen neuen Lauf'}
                    onClick={openAddDataModal}
                />
            </div>
        </nav>
    );
};

type HeaderButtonProps = {
    onClick: () => void;
    icon: ReactNode;
    tooltip: string;
};

const HeaderButton: FC<HeaderButtonProps> = ({ icon, onClick, tooltip }) => {
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
