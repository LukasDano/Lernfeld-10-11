import type { FC } from 'react';
import { FaFilter } from 'react-icons/fa';

import { BaseButton } from '../../miscellaneous/BaseButton.tsx';
import { DropDownSelect } from '../../miscellaneous/DropDownSelect.tsx';
import { type SortOrder, SortSwitch } from '../../miscellaneous/SortSwitch.tsx';
import type { SortField } from './leaderBoard/LeaderBoard.tsx';

type TableHeadlineProps = {
    tableName: string;
    onFilterClick: () => void;
    sortOrder: SortOrder;
    onSortOrderChange: (order: SortOrder) => void;
    sortFields: SortField[];
    currentSortField: SortField;
    onSortFieldChange: (value: SortField) => void;
};

export const TableHeadline: FC<TableHeadlineProps> = ({
    tableName,
    onFilterClick,
    sortOrder,
    onSortOrderChange,
    sortFields,
    currentSortField,
    onSortFieldChange,
}) => {
    return (
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{tableName}</h2>

            <DropDownSelect
                items={sortFields}
                selectedItem={currentSortField}
                onChange={(val) => onSortFieldChange(val as SortField)}
            />

            <SortSwitch order={sortOrder} switchSort={onSortOrderChange} />

            <BaseButton
                icon={<FaFilter className="w-6 h-6" />}
                tooltip={`Filter ${tableName}`}
                onClick={onFilterClick}
            />
        </div>
    );
};
