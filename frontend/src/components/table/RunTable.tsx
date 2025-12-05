import { useContext } from 'react';
import 'tippy.js/dist/tippy.css';

import { AppContext } from '../AppContext.tsx';

export const RunTable = () => {
    const { runList } = useContext(AppContext);

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
                        {runList.map((run, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
                            >
                                <td className="px-4 py-2 text-sm text-gray-800">{run.name}</td>
                                <td className="px-4 py-2 text-sm text-gray-800">{run.distance_km} km</td>
                                <td className="px-4 py-2 text-sm text-gray-800">{run.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
