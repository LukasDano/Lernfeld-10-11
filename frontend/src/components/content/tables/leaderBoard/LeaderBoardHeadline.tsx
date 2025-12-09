import type { FC } from 'react';
import { FaFilter } from 'react-icons/fa';

import { BaseButton } from '../../../miscellaneous/BaseButton.tsx';
import { DropDownSelect } from '../../../miscellaneous/DropDownSelect.tsx';
import { type SortOrder, SortSwitch } from '../../../miscellaneous/SortSwitch.tsx';
import type { SortField } from './LeaderBoard.tsx';

type LeaderBoardHeadlineProps = {
    onFilterClick: () => void;
    sortOrder: SortOrder;
    onSortOrderChange: (order: SortOrder) => void;
    sortFields: SortField[];
    currentSortField: SortField;
    onSortFieldChange: (value: SortField) => void;
};

export const LeaderBoardHeadline: FC<LeaderBoardHeadlineProps> = ({
    onFilterClick,
    sortOrder,
    onSortOrderChange,
    sortFields,
    currentSortField,
    onSortFieldChange,
}) => {
    return (
        <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
            <h2 className="text-xl font-semibold w-full sm:w-auto">Rangliste</h2>

            <DropDownSelect
                items={sortFields}
                selectedItem={currentSortField}
                onChange={(val) => onSortFieldChange(val as SortField)}
            />

            <SortSwitch order={sortOrder} switchSort={onSortOrderChange} />

            <BaseButton icon={<FaFilter className="w-6 h-6" />} tooltip={`Filter Rangliste`} onClick={onFilterClick} />
        </div>
    );
};
