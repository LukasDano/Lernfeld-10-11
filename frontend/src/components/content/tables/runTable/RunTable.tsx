import { useContext, useState } from 'react';
import 'tippy.js/dist/tippy.css';

import { AppContext } from '../../../AppContext.tsx';
import { LeaderBoardHeadline, type TableDisplaySize } from './RunTableHeadline.tsx';
import { RunTableRow } from './RunTableRow.tsx';

const tableSizes: TableDisplaySize[] = [10, 25, 30, 40, 50, Infinity];

export const RunTable = () => {
    const { runList } = useContext(AppContext);

    const [currentTableSize, setCurrentTableSize] = useState<TableDisplaySize>(10);

    return (
        <div className="max-w-3xl mt-8">
            <LeaderBoardHeadline
                tableDisplaySizes={tableSizes}
                selectedTableDisplaySize={currentTableSize}
                onTableSizeChange={(val) => setCurrentTableSize(val)}
            />

            <div className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
                <table className="w-full table-auto text-center">
                    <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        <tr>
                            <th className="p-4">Teilnehmer</th>
                            <th className="p-4">Strecke</th>
                            <th className="p-4">Datum</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {runList.slice(0, currentTableSize).map((run, index) => (
                            <RunTableRow run={run} index={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
