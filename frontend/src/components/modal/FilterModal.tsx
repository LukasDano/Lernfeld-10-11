import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { MdRestore } from 'react-icons/md';
import { TbFilterSearch } from 'react-icons/tb';

import { ageGroupsFilterOptions, defaultFilter, genderFilterOptions } from '../../utils/filter.ts';
import { sendInfoMessage } from '../../utils/notifications.ts';
import { BaseButton } from '../miscellaneous/BaseButton.tsx';
import { MultipleValueSelector, type SelectOption } from '../miscellaneous/MultipleValueSelector.tsx';
import { BaseModal } from './BaseModal.tsx';

export type AcceptedFilterOptions = {
    genders: string[];
    ageGroups: string[];
};

type FilterModalContentProps = {
    filterOptions: AcceptedFilterOptions;
    updateFilterOptions: (value: AcceptedFilterOptions) => void;
};

const FilterModalContent: FC<FilterModalContentProps> = ({ filterOptions, updateFilterOptions }) => {
    const [acceptedFilterOptions, setAcceptedFilterOptions] = useState<AcceptedFilterOptions>(filterOptions);

    useEffect(() => {
        setAcceptedFilterOptions(filterOptions);
    }, [filterOptions]);

    const updateSelectedFilter = (key: keyof AcceptedFilterOptions, value: string[]) => {
        const updatedOptions: AcceptedFilterOptions = {
            ...acceptedFilterOptions,
            [key]: value,
        };

        setAcceptedFilterOptions(updatedOptions);
    };

    const getSelectedOptionsAsStrings = (options: SelectOption[]): string[] => {
        return options.filter((opt) => opt.selected).map((opt) => opt.value);
    };

    const getSelectedOptionsFromStrings = (values: string[], options: SelectOption[]): SelectOption[] => {
        const selectedSet = new Set(values);

        return options.map((opt) => ({
            ...opt,
            selected: selectedSet.has(opt.value),
        }));
    };

    return (
        <>
            <MultipleValueSelector
                name={'Altersgruppe'}
                options={getSelectedOptionsFromStrings(acceptedFilterOptions.ageGroups, ageGroupsFilterOptions)}
                onChange={(vals) => updateSelectedFilter('ageGroups', getSelectedOptionsAsStrings(vals))}
            />

            <MultipleValueSelector
                name={'Geschlecht'}
                options={getSelectedOptionsFromStrings(acceptedFilterOptions.genders, genderFilterOptions)}
                onChange={(vals) => updateSelectedFilter('genders', getSelectedOptionsAsStrings(vals))}
            />

            <div className="flex w-full gap-2 justify-center">
                <BaseButton
                    icon={<MdRestore className="w-5 h-5" />}
                    tooltip={'Filter zurücksetzten'}
                    onClick={() => {
                        setAcceptedFilterOptions(defaultFilter);
                        sendInfoMessage('Filter zurückgesetzt.');
                        updateFilterOptions(defaultFilter);
                    }}
                />
                <BaseButton
                    icon={<TbFilterSearch className="w-5 h-5" />}
                    tooltip={'Filter anwenden'}
                    onClick={() => {
                        sendInfoMessage('Filter angewendet.');
                        updateFilterOptions(acceptedFilterOptions);
                    }}
                />
            </div>
        </>
    );
};

type FilterModalProps = {
    isOpen: boolean;
    onClose: () => void;
    filterOptions: AcceptedFilterOptions;
    updateFilterOptions: (value: AcceptedFilterOptions) => void;
};

export const FilterModal: FC<FilterModalProps> = ({ isOpen, onClose, filterOptions, updateFilterOptions }) => {
    const updateAndClose = (vals: AcceptedFilterOptions) => {
        onClose();
        updateFilterOptions(vals);
    };

    return (
        <BaseModal
            title={'Filter'}
            isOpen={isOpen}
            onClose={onClose}
            content={
                <FilterModalContent
                    filterOptions={filterOptions}
                    updateFilterOptions={(vals) => updateAndClose(vals)}
                />
            }
        />
    );
};
