import type { Rank, Run } from '../../data/types.ts';
import { sendErrorMessage } from '../notifications.ts';

export const realBackend = 'https://jugger-laufchallenge.de/api/api.php?action=';

export const getRuns = async (): Promise<Run[]> => {
    const url = realBackend + 'getNeuesteLauefe';

    const response = await fetch(url, { method: 'GET' });

    if (response.status !== 200) sendErrorMessage('Error', 'Fehler beim laden der Läufe');

    const json = await response.json();
    return json;
};

export const getRanks = async (): Promise<Rank[]> => {
    const url = realBackend + 'getRangliste';

    const response = await fetch(url, { method: 'GET' });

    if (response.status !== 200) sendErrorMessage('Error', 'Fehler beim laden des Rankings');

    const json = await response.json();
    return json;
};
