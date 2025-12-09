import { useContext, useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';

import type { Rank } from '../../../../data/types.ts';
import { defaultFilter, matchesFilters } from '../../../../utils/filter.ts';
import { AppContext } from '../../../AppContext.tsx';
import type { SortOrder } from '../../../miscellaneous/SortSwitch.tsx';
import { type AcceptedFilterOptions, FilterModal } from '../../../modal/FilterModal.tsx';
import { LeaderBoardHeadline } from './LeaderBoardHeadline.tsx';
import { LeaderBoardRow } from './LeaderBoardRow.tsx';

export type SortField = 'GesamtStrecke' | 'Lauftage' | 'WeitesterLauf';
const sortOptions: SortField[] = ['GesamtStrecke', 'Lauftage', 'WeitesterLauf'];

export const LeaderBoard = () => {
    const { rankList } = useContext(AppContext);

    const [filterOptions, setFilterOptions] = useState<AcceptedFilterOptions>(defaultFilter);
    const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);

    const [filteredList, setFilteredList] = useState<Rank[]>(rankList);

    const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
    const [sortField, setSortField] = useState<SortField>('GesamtStrecke');

    useEffect(() => {
        const newList = [...rankList]
            .filter((rank) => matchesFilters(rank, filterOptions))
            .sort((rankA, rankB) => {
                if (sortField === 'GesamtStrecke')
                    return sortOrder === 'asc' ? rankA.total_km - rankB.total_km : rankB.total_km - rankA.total_km;
                else if (sortField === 'Lauftage')
                    return sortOrder === 'asc' ? rankA.lauf_tage - rankB.lauf_tage : rankB.lauf_tage - rankA.lauf_tage;
                else if (sortField === 'WeitesterLauf')
                    return sortOrder === 'asc' ? rankA.max_km - rankB.max_km : rankB.max_km - rankA.max_km;
                else return sortOrder === 'asc' ? rankA.total_km - rankB.total_km : rankB.total_km - rankA.total_km;
            });

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFilteredList(newList);
    }, [filterOptions, rankList, sortOrder, sortField]);

    return (
        <div className="w-full max-w-5xl mx-auto px-4 mt-8">
            <FilterModal
                isOpen={filterModalOpen}
                onClose={() => setFilterModalOpen(false)}
                filterOptions={filterOptions}
                updateFilterOptions={(vals) => setFilterOptions(vals)}
            />

            <LeaderBoardHeadline
                onFilterClick={() => setFilterModalOpen(true)}
                sortOrder={sortOrder}
                onSortOrderChange={(val) => setSortOrder(val)}
                sortFields={sortOptions}
                currentSortField={sortField}
                onSortFieldChange={(val) => setSortField(val)}
            />

            <div className="mt-6">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[700px] md:min-w-full table-auto text-center">
                            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                                <tr>
                                    <th className="p-4 whitespace-nowrap">Platz</th>
                                    <th className="p-4 whitespace-nowrap">Teilnehmer</th>
                                    <th className="p-4 whitespace-nowrap">Gesamt Strecke</th>
                                    <th className="p-4 whitespace-nowrap">Weitester Lauf</th>
                                    <th className="p-4 whitespace-nowrap">Lauf Tage</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                {filteredList.map((rank, index) => (
                                    <LeaderBoardRow rank={rank} index={index} key={index} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
