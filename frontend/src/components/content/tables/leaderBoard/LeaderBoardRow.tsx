import type { FC } from 'react';

import type { Rank } from '../../../../data/types.ts';

type LeaderBoardRowProps = {
    rank: Rank;
    index: number;
};

export const LeaderBoardRow: FC<LeaderBoardRowProps> = ({ rank, index }) => {
    return (
        <tr key={index + rank.name} className={'dark:text-white'}>
            <td className="p-4">{index + 1}</td>
            <td className="p-4">{rank.name}</td>
            <td className="p-4">{rank.total_km + ' km'}</td>
            <td className="p-4">{rank.max_km + ' km'}</td>
            <td className="p-4">{rank.lauf_tage}</td>
        </tr>
    );
};
