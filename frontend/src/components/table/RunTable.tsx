import Tippy from '@tippyjs/react';
import { type FC, useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';

import type { Run } from '../../data/types.ts';
import { UserColumn } from './UserColumn.tsx';

type SortCriterion = 'distance' | 'date' | 'userId';

type RunTableProps = {
    runList: Run[];
};

export const RunTable: FC<RunTableProps> = ({ runList }) => {
    const [list, setList] = useState<Run[]>(runList);
    const [activeSortCriterion, setActiveSortCriterion] = useState<SortCriterion>('date');

    useEffect(() => {
        const sortedList = sortListBy(activeSortCriterion);
        setList(sortedList);
    }, [runList]);

    const sortListBy = (sortCriterion: SortCriterion): Run[] => {
        const listCopy = [...runList];
        return listCopy.sort((a, b) => {
            if (sortCriterion === 'distance') return a.distanceKm - b.distanceKm;
            if (sortCriterion === 'date') return b.date.localeCompare(a.date);
            else return a.userId - b.userId;
        });
    };

    const updateSorting = (sortCriterion: SortCriterion) => {
        if (activeSortCriterion === sortCriterion) {
            const defaultCriterion: SortCriterion = 'date';
            const sortedList = sortListBy(defaultCriterion);

            setActiveSortCriterion(defaultCriterion);
            setList(sortedList);
        } else {
            const sortedList = sortListBy(sortCriterion);

            setActiveSortCriterion(sortCriterion);
            setList(sortedList);
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-8">
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full border-collapse bg-white">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                <Tippy content={'Nach User Id sortieren'} animation="scale">
                                    <button onClick={() => updateSorting('userId')}>Teilnehmer</button>
                                </Tippy>
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                <Tippy content={'Nach Strecke sortieren'} animation="scale">
                                    <button onClick={() => updateSorting('distance')}>
                                        <span
                                            className={
                                                activeSortCriterion === 'distance' ? 'font-bold text-emerald-500' : ''
                                            }
                                        >
                                            Strecke
                                        </span>
                                    </button>
                                </Tippy>
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                <Tippy content={'Nach Datum sortieren'} animation="scale">
                                    <button onClick={() => updateSorting('date')}>
                                        <span
                                            className={
                                                activeSortCriterion === 'date' ? 'font-bold text-emerald-500' : ''
                                            }
                                        >
                                            Datum
                                        </span>
                                    </button>
                                </Tippy>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((run, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
                            >
                                <UserColumn userId={run.userId} />
                                <td className="px-4 py-2 text-sm text-gray-800">{run.distanceKm} km</td>
                                <td className="px-4 py-2 text-sm text-gray-800">{run.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
