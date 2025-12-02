export type User = {
    id: number;
    name: string;
    brithDate: string; //TODO: change to Date
    gender: string;
    createdAt: string; //TODO: change to Date
};

export type Run = {
    id: number;
    userId: number;
    date: string; //TODO: change to Date
    distanceKm: number;
    picture: string;
    // createdAt: string; //TODO: change to Date
};
