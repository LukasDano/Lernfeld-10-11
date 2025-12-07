import { useContext } from 'react';
import 'tippy.js/dist/tippy.css';

import { AppContext } from '../../../AppContext.tsx';
import { RunTableRow } from './RunTableRow.tsx';

export const RunTable = () => {
    const { runList } = useContext(AppContext);

    return (
        <div className="max-w-3xl mx-auto mt-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{'Neue Läufe'}</h2>
            </div>

            <div className="flex-none w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden mt-6">
                <table className="w-full table-auto text-center">
                    <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        <tr>
                            <th className="p-4">Teilnehmer</th>
                            <th className="p-4">Strecke</th>
                            <th className="p-4">Datum</th>
                        </tr>
                    </thead>

                    <tbody>
                        {runList.map((run, index) => (
                            <RunTableRow run={run} index={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
