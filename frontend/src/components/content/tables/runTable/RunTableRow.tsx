import type { FC } from 'react';

import type { Run } from '../../../../data/types.ts';

type LeaderBoardRowProps = {
    run: Run;
    index: number;
};

export const RunTableRow: FC<LeaderBoardRowProps> = ({ run, index }) => {
    return (
        <tr key={index + run.name} className={'dark:text-white'}>
            <td className="p-4">{run.name}</td>
            <td className="p-4">{run.distance_km + ' km'}</td>
            <td className="p-4">{run.date}</td>
        </tr>
    );
};
