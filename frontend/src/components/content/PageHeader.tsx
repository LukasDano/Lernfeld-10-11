import { type FC, useContext, useState } from 'react';
import { GoLaw } from 'react-icons/go';
import { IoIosAdd } from 'react-icons/io';
import { IoDocumentLock, IoInformation } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';

import { AppContext } from '../AppContext.tsx';
import { BaseButton, TextButton } from '../miscellaneous/BaseButton.tsx';
import { BaseModal } from '../modal/BaseModal.tsx';

type HeaderProps = {
    openAddDataModal: () => void;
};

export const PageHeader: FC<HeaderProps> = ({ openAddDataModal }) => {
    const { setUserId } = useContext(AppContext);

    const [openModal, setOpenModal] = useState<boolean>(false);

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
                <h1 className="text-4xl font-bold text-sky-600">Laufchallenge</h1>
            </div>

            <MetaInfoModal isOpen={openModal} onClose={() => setOpenModal(false)} />

            <div className="flex items-center gap-6 flex-wrap justify-end">
                <BaseButton
                    icon={<IoIosAdd className={'w-6 h-6'} />}
                    tooltip={'Erfasse einen neuen Lauf'}
                    onClick={openAddDataModal}
                />
                <BaseButton
                    icon={<GoLaw className={'w-6 h-6'} />}
                    tooltip={'Rechtliches'}
                    onClick={() => setOpenModal(true)}
                />
                <BaseButton icon={<LuLogOut className={'w-6 h-6'} />} tooltip={'Logout'} onClick={logOut} />
            </div>
        </nav>
    );
};

type MetaInfoModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const MetaInfoModal: FC<MetaInfoModalProps> = ({ isOpen, onClose }) => {
    return (
        <BaseModal
            title={'Rechtliches'}
            isOpen={isOpen}
            onClose={onClose}
            content={
                <div className={'flex flex-row gap-20 justify-center'}>
                    <TextButton
                        onClick={() => open('https://www.vfl-rethwisch.de/datenschutz/', '_blank')}
                        text={'Datenschutz'}
                        tooltip={'Datenschutz'}
                        icon={<IoDocumentLock className={'w-6 h-6'} />}
                    />
                    <TextButton
                        onClick={() => open('https://www.vfl-rethwisch.de/impressum/', '_blank')}
                        text={'Impressum'}
                        tooltip={'Impressum'}
                        icon={<IoInformation className={'w-6 h-6'} />}
                    />
                </div>
            }
        />
    );
};
