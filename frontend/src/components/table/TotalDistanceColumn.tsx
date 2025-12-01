import { type FC, useEffect, useState } from 'react';

import {getTotalDistanceFor} from "../../utils/utility.ts";

type TotalDistanceColumnProps = {
    userId: number;
};

export const TotalDistanceColumn: FC<TotalDistanceColumnProps> = ({ userId }) => {
    const [totalDistance, setTotalDistance] = useState<number>(0);

    useEffect(() => {
        const distance = getTotalDistanceFor(userId);
        setTotalDistance(distance);
    }, [userId]);

    return (<td className={'px-4 py-2 text-sm text-gray-800'}>{totalDistance.toFixed(2) + " km"}</td>);
};
