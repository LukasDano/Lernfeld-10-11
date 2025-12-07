import { useContext, useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';

import type { Rank } from '../../../data/types.ts';
import { defaultFilter, matchesFilters } from '../../../utils/filter.ts';
import { AppContext } from '../../AppContext.tsx';
import { type AcceptedFilterOptions, FilterModal } from '../../modal/FilterModal.tsx';
import { TableHeadline } from './TableHeadline.tsx';

export const LeaderBoard = () => {
    const { rankList } = useContext(AppContext);

    const [filterOptions, setFilterOptions] = useState<AcceptedFilterOptions>(defaultFilter);
    const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);

    const [filteredList, setFilteredList] = useState<Rank[]>(rankList);

    useEffect(() => {
        const newList = [...rankList].filter((rank) => matchesFilters(rank, filterOptions));

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFilteredList(newList);
    }, [filterOptions, rankList]);

    return (
        <div className="max-w-3xl mx-auto mt-8">
            <FilterModal
                isOpen={filterModalOpen}
                onClose={() => setFilterModalOpen(false)}
                filterOptions={filterOptions}
                updateFilterOptions={(vals) => setFilterOptions(vals)}
            />

            <TableHeadline tableName="Rangliste" filterButton={true} onFilterClick={() => setFilterModalOpen(true)} />

            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full border-collapse bg-white">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Platz
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Teilnehmer
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Gesamt Strecke
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Lauf Tage
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredList.map((user, index) => (
                            <tr
                                key={user.name + index}
                                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
                            >
                                <td className="px-4 py-2 text-sm text-gray-800" data-testid="rank-cell">
                                    {index + 1}.
                                </td>
                                <td className="px-4 py-2 text-sm text-gray-800">{user.name}</td>
                                <td className="px-4 py-2 text-sm text-gray-800">{user.total_km}</td>
                                <td className="px-4 py-2 text-sm text-gray-800">{user.lauf_tage}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
