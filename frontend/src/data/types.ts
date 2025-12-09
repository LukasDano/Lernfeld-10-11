export type UserData = {
    userName: string;
    password: string;
    birthDate: string;
    gender: string;
    token: number;
};

export type User = {
    id: number;
    name: string;
    brithDate: string;
    gender: string;
    createdAt: string;
};

export type Run = {
    name: string;
    date: string;
    distance_km: number;
    challenge_id: string;
};

export type Rank = {
    name: string;
    total_km: number;
    max_km: number;
    lauf_tage: number;
    geburtsdatum: string;
    geschlecht: string;
};

export type NewRun = {
    userId: number;
    date: string;
    distanceKm: number;
    challengeId: number;
};
