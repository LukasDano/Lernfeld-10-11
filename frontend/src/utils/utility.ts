import type {Run} from "../data/types.ts";

export const getTotalDistanceFor = (id: number, runList: Run[]): number => {
    let totalDistance = 0
    const foundUsers = runList.filter((run) => run.userId === id);

    if (foundUsers.length < 1) console.warn('User wurde nicht gefunden!');
    else foundUsers.forEach((run) => totalDistance += run.distanceKm);

    return totalDistance;
};