import { useContext, useEffect, useState} from 'react';
import 'tippy.js/dist/tippy.css';

import type { Run } from '../../data/types.ts';
import { UserColumn } from './UserColumn.tsx';
import {AppContext} from "../AppContext.tsx";

type SortCriterion = 'distance' | 'date';

export const RunTable = () => {
    const {runList} = useContext(AppContext);

    const [list, setList] = useState<Run[]>(runList);

    useEffect(() => {
        const sortedList = sortListBy("date");
        setList(sortedList);
    }, [runList]);

    const sortListBy = (sortCriterion: SortCriterion): Run[] => {
        const listCopy = [...runList];
        return listCopy.sort((a, b) => {
            if (sortCriterion === 'distance') return a.distanceKm - b.distanceKm;
            else return b.date.localeCompare(a.date);
        });
    };

    return (
        <div className="max-w-3xl mx-auto mt-8">
            <h2>Neuste Läufe</h2>
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full border-collapse bg-white">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Teilnehmer
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Strecke
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Datum
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
