import { type FC, useContext } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { LuLogOut } from 'react-icons/lu';

import { AppContext } from '../AppContext.tsx';
import { BaseButton } from '../miscellaneous/BaseButton.tsx';

type HeaderProps = {
    openAddDataModal: () => void;
};

export const PageHeader: FC<HeaderProps> = ({ openAddDataModal }) => {
    const { setUserId } = useContext(AppContext);

    const logOut = () => {
        setUserId(0);
        window.location.reload();
    };

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
                <BaseButton
                    icon={<IoIosAdd className={'w-6 h-6'} />}
                    tooltip={'Erfasse einen neuen Lauf'}
                    onClick={openAddDataModal}
                />
                <BaseButton icon={<LuLogOut className={'w-6 h-6'} />} tooltip={'Logout'} onClick={logOut} />
            </div>
        </nav>
    );
};
