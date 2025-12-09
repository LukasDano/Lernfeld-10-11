import { Switch } from '@headlessui/react';
import Tippy from '@tippyjs/react';
import type { FC } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export type SortOrder = 'asc' | 'desc';

type SortSwitchProps = {
    order: SortOrder;
    switchSort: (current: SortOrder) => void;
};

export const SortSwitch: FC<SortSwitchProps> = ({ order, switchSort }) => {
    const toggleSort = () => {
        switchSort(order === 'asc' ? 'desc' : 'asc');
    };

    const isAsc = order === 'asc';

    return (
        <Tippy content={order === 'asc' ? 'Aufsteigend' : 'Absteigend'}>
            <Switch
                checked={isAsc}
                onChange={toggleSort}
                className={`group relative flex h-7 w-14 cursor-pointer rounded-full p-1 transition-colors duration-200 gap-1
                ease-in-out focus:outline-none ${isAsc ? 'bg-emerald-500' : 'bg-orange-500'}`}
            >
                <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-flex items-center justify-center size-5 
                rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out 
                ${isAsc ? 'translate-x-7' : 'translate-x-0'}`}
                >
                    {isAsc ? (
                        <IoIosArrowUp className="w-4 h-4 text-black" />
                    ) : (
                        <IoIosArrowDown className="w-4 h-4 text-black" />
                    )}
                </span>
            </Switch>
        </Tippy>
    );
};
