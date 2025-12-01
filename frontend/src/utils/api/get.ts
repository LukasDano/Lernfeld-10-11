import type { Run, User } from '../../data/types.ts';
import { sendErrorMessage } from '../notifications.ts';

const backendUrl = 'http://localhost:8000/';

export const getUsers = async (): Promise<User[]> => {
    const url = backendUrl + 'user.php';

    const response = await fetch(url, { method: 'GET' });

    if (response.status !== 200) sendErrorMessage('Error', 'Fehler beim laden der User');

    const json = await response.json();
    return json;
};

export const getRuns = async (): Promise<Run[]> => {
    const url = backendUrl + 'runs.php';

    const response = await fetch(url, { method: 'GET' });

    if (response.status !== 200) sendErrorMessage('Error', 'Fehler beim laden der Läufe');

    const json = await response.json();
    return json;
};
