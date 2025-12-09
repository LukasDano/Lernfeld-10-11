import type { Rank, Run, User } from './types';

// Testdaten mit Chat-GPT generiert

export const fakeUsers: User[] = [
    { id: 1, name: 'Anna Müller', brithDate: '2008-05-12', gender: 'f', createdAt: '2023-05-12' },
    { id: 2, name: 'Maximilian Schmidt', brithDate: '1995-11-03', gender: 'm', createdAt: '2022-08-21' },
    { id: 3, name: 'Sophie Bauer', brithDate: '2001-02-18', gender: 'f', createdAt: '2023-01-15' },
    { id: 4, name: 'Leon Fischer', brithDate: '1988-07-29', gender: 'm', createdAt: '2021-12-05' },
    { id: 5, name: 'Lena Weber', brithDate: '1999-09-12', gender: 'f', createdAt: '2022-03-19' },
    { id: 6, name: 'Jonas Becker', brithDate: '2003-04-25', gender: 'm', createdAt: '2023-06-10' },
    { id: 7, name: 'Clara Wagner', brithDate: '1992-12-01', gender: 'f', createdAt: '2022-11-30' },
    { id: 8, name: 'Felix Hoffmann', brithDate: '1997-08-14', gender: 'm', createdAt: '2023-02-22' },
    { id: 9, name: 'Mia Neumann', brithDate: '2005-10-06', gender: 'f', createdAt: '2023-07-05' },
    { id: 10, name: 'Paul König', brithDate: '1990-01-17', gender: 'm', createdAt: '2021-10-12' },
    { id: 11, name: 'Emma Schäfer', brithDate: '2002-03-30', gender: 'f', createdAt: '2023-03-28' },
    { id: 12, name: 'Lukas Richter', brithDate: '1998-06-21', gender: 'm', createdAt: '2022-09-09' },
    { id: 13, name: 'Leonie Klein', brithDate: '2000-11-11', gender: 'f', createdAt: '2023-04-14' },
    { id: 14, name: 'Tim Braun', brithDate: '1996-05-07', gender: 'm', createdAt: '2022-12-19' },
    { id: 15, name: 'Sarah Wolf', brithDate: '2004-08-23', gender: 'f', createdAt: '2023-05-30' },
];
export const fakeRuns: Run[] = [
    {
        name: 'Anna Müller',
        date: '2025-01-12',
        distance_km: 5.2,
        challenge_id: 'ch_2025_01',
    },
    {
        name: 'Tom Schneider',
        date: '2025-01-15',
        distance_km: 10.0,
        challenge_id: 'ch_2025_01',
    },
    {
        name: 'Lisa Berger',
        date: '2025-01-18',
        distance_km: 3.7,
        challenge_id: 'ch_2025_01',
    },
    {
        name: 'Max Fischer',
        date: '2025-01-20',
        distance_km: 7.4,
        challenge_id: 'ch_2025_01',
    },
];

export const fakeRanks: Rank[] = [
    {
        name: 'Anna Müller',
        total_km: 42.8,
        lauf_tage: 9,
        max_km: 53.4,
        geburtsdatum: '1998-04-22',
        geschlecht: 'w',
    },
    {
        name: 'Tom Schneider',
        total_km: 67.3,
        lauf_tage: 12,
        max_km: 53.4,
        geburtsdatum: '1995-11-05',
        geschlecht: 'm',
    },
    {
        name: 'Lisa Berger',
        total_km: 29.1,
        lauf_tage: 7,
        max_km: 53.4,
        geburtsdatum: '2001-02-19',
        geschlecht: 'w',
    },
    {
        name: 'Max Fischer',
        total_km: 53.4,
        max_km: 53.4,
        lauf_tage: 10,
        geburtsdatum: '1997-07-12',
        geschlecht: 'm',
    },
];
