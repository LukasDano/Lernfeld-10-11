import { useContext, useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';

import type { Rank } from '../../../../data/types.ts';
import { defaultFilter, matchesFilters } from '../../../../utils/filter.ts';
import { AppContext } from '../../../AppContext.tsx';
import type { SortOrder } from '../../../miscellaneous/SortSwitch.tsx';
import { type AcceptedFilterOptions, FilterModal } from '../../../modal/FilterModal.tsx';
import { TableHeadline } from '../TableHeadline.tsx';
import { LeaderBoardRow } from './LeaderBoardRow.tsx';

export type SortField = 'distance' | 'days';

export const LeaderBoard = () => {
    const { rankList } = useContext(AppContext);

    const [filterOptions, setFilterOptions] = useState<AcceptedFilterOptions>(defaultFilter);
    const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);

    const [filteredList, setFilteredList] = useState<Rank[]>(rankList);

    const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
    const [sortField, setSortField] = useState<SortField>('distance');

    useEffect(() => {
        const newList = [...rankList]
            .filter((rank) => matchesFilters(rank, filterOptions))
            .sort((rankA, rankB) => {
                if (sortField === 'distance') {
                    return sortOrder === 'asc' ? rankA.total_km - rankB.total_km : rankB.total_km - rankA.total_km;
                } else if (sortField === 'days') {
                    return sortOrder === 'asc' ? rankA.lauf_tage - rankB.lauf_tage : rankB.lauf_tage - rankA.lauf_tage;
                } else {
                    return sortOrder === 'asc' ? rankA.total_km - rankB.total_km : rankB.total_km - rankA.total_km;
                }
            });

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFilteredList(newList);
    }, [filterOptions, rankList, sortOrder, sortField]);

    return (
        <div className="max-w-3xl mx-auto mt-8">
            <FilterModal
                isOpen={filterModalOpen}
                onClose={() => setFilterModalOpen(false)}
                filterOptions={filterOptions}
                updateFilterOptions={(vals) => setFilterOptions(vals)}
            />

            <TableHeadline
                tableName="Rangliste"
                onFilterClick={() => setFilterModalOpen(true)}
                sortOrder={sortOrder}
                onSortOrderChange={(val) => setSortOrder(val)}
                sortFields={['distance', 'days']}
                currentSortField={sortField}
                onSortFieldChange={(val) => setSortField(val)}
            />

            <div className="flex-none w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden mt-6">
                <table className="w-full table-auto text-center">
                    <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        <tr>
                            <th className="p-4">Platz</th>
                            <th className="p-4">Teilnehmer</th>
                            <th className="p-4">Gesamt Strecke</th>
                            <th className="p-4">Lauf Tage</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {filteredList.map((rank, index) => (
                            <LeaderBoardRow rank={rank} index={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
