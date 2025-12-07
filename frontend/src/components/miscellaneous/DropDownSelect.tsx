import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import type { FC } from 'react';

type DropDownSelectProps = {
    items: string[];
    selectedItem: string;
    onChange: (year: string) => void;
    minWidth?: number;
};

export const DropDownSelect: FC<DropDownSelectProps> = ({ items, selectedItem, onChange, minWidth }) => {
    return (
        <div className={minWidth ? `min-w-[${minWidth}px]` : 'min-w-[150px] w-auto' + ''}>
            <Listbox value={selectedItem} onChange={onChange}>
                <div className="relative">
                    <ListboxButton
                        className="relative w-full cursor-pointer rounded-lg bg-white dark:bg-gray-600 dark:text-white
                                   py-2 pl-3 pr-10 text-left shadow-md border dark:shadow-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                    >
                        <span className="block truncate">{selectedItem}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </ListboxButton>

                    <ListboxOptions className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-500 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {items.map((item) => (
                            <ListboxOption
                                key={item}
                                value={item}
                                className={({ focus }) =>
                                    `relative cursor-pointer select-none py-2 px-4 flex items-center justify-center ${
                                        focus ? 'bg-cyan-300 dark:bg-indigo-300' : 'text-gray-900 dark:text-gray-100'
                                    }`
                                }
                            >
                                {({ selected }) => (
                                    <span
                                        className={`block w-full text-center truncate ${selected ? 'font-medium' : 'font-normal'}`}
                                    >
                                        {item}
                                    </span>
                                )}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>
    );
};
