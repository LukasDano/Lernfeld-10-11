import { useContext, useMemo } from 'react';
import 'tippy.js/dist/tippy.css';

import { AppContext } from '../AppContext.tsx';

export const LeaderBoard = () => {
    const { rankList } = useContext(AppContext);

    const sortedRanks = useMemo(() => {
        const copy = [...rankList];

        return copy.sort((a, b) => a.total_km - b.total_km);
    }, [rankList]);

    return (
        <div className="max-w-3xl mx-auto mt-8">
            <h2>Rangliste</h2>
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
                        {sortedRanks.map((user, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
                            >
                                <td className="px-4 py-2 text-sm text-gray-800" data-testid={'rank-cell'}>
                                    {index + 1 + '.'}
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
