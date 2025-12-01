import {type FC, useContext, useEffect, useState} from 'react';

import {getTotalDistanceFor} from "../../utils/utility.ts";
import {AppContext} from "../AppContext.tsx";

type TotalDistanceColumnProps = {
    userId: number;
};

export const TotalDistanceColumn: FC<TotalDistanceColumnProps> = ({ userId }) => {
    const {runList} = useContext(AppContext);

    const [totalDistance, setTotalDistance] = useState<number>(0);

    useEffect(() => {
        const distance = getTotalDistanceFor(userId, runList);
        setTotalDistance(distance);
    }, [userId]);

    return (<td className={'px-4 py-2 text-sm text-gray-800'}>{totalDistance.toFixed(2) + " km"}</td>);
};
