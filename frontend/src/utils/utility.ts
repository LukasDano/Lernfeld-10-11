import {runs} from "../data/mockData.ts";

export const getTotalDistanceFor = (id: number): number => {
    let totalDistance = 0
    const foundUsers = runs.filter((run) => run.userId === id);

    if (foundUsers.length < 1) console.warn('User wurde nicht gefunden!');
    else foundUsers.forEach((run) => totalDistance += run.distanceKm);

    return totalDistance;
};