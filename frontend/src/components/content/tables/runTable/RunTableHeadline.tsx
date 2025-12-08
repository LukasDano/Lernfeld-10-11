import type { FC } from 'react';

import { DropDownSelect } from '../../../miscellaneous/DropDownSelect.tsx';

export type TableDisplaySize = 10 | 25 | 30 | 40 | 50 | typeof Infinity;

type LeaderBoardHeadlineProps = {
    selectedTableDisplaySize: TableDisplaySize;
    tableDisplaySizes: TableDisplaySize[];
    onTableSizeChange: (value: TableDisplaySize) => void;
};

export const LeaderBoardHeadline: FC<LeaderBoardHeadlineProps> = ({
    selectedTableDisplaySize,
    tableDisplaySizes,
    onTableSizeChange,
}) => {
    const generateSelectOptionName = (num: TableDisplaySize): string => {
        if (num === Infinity) return 'Alle';
        else return num.toString();
    };

    const tableDisplaySizeSelectList = tableDisplaySizes.map((num) => generateSelectOptionName(num));

    const parseTableDisplaySize = (num: string): TableDisplaySize => {
        if (num === 'Alle') return Infinity;
        else return parseInt(num, 10) as TableDisplaySize;
    };

    return (
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{'Neue Läufe'}</h2>

            <DropDownSelect
                items={tableDisplaySizeSelectList}
                selectedItem={generateSelectOptionName(selectedTableDisplaySize)}
                onChange={(val) => onTableSizeChange(parseTableDisplaySize(val))}
            />
        </div>
    );
};
