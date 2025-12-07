import type { FC } from 'react';
import { FaFilter } from 'react-icons/fa';

import { BaseButton } from '../miscellaneous/BaseButton.tsx';

type TableHeadlineProps = {
    tableName: string;
    filterButton: boolean;
    onFilterClick?: () => void;
};

export const TableHeadline: FC<TableHeadlineProps> = ({ tableName, filterButton, onFilterClick }) => {
    return (
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{tableName}</h2>

            {filterButton && onFilterClick && (
                <BaseButton
                    icon={<FaFilter className="w-6 h-6" />}
                    tooltip={`Filter ${tableName}`}
                    onClick={onFilterClick}
                />
            )}
        </div>
    );
};
