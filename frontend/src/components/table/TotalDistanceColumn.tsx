import { type FC, useContext } from 'react';

import { getTotalDistanceFor } from '../../utils/utility.ts';
import { AppContext } from '../AppContext.tsx';

type TotalDistanceColumnProps = {
    userId: number;
};

export const TotalDistanceColumn: FC<TotalDistanceColumnProps> = ({ userId }) => {
    const { runList } = useContext(AppContext);

    const totalDistance = getTotalDistanceFor(userId, runList);

    return <td className={'px-4 py-2 text-sm text-gray-800'}>{totalDistance.toFixed(2) + ' km'}</td>;
};
