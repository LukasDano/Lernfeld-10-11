import type { NewRun, UserData } from '../../data/types.ts';
import { sendErrorMessage, sendSuccessMessage } from '../notifications.ts';
import { realBackend } from './get.ts';

export const postNewRun = async (newRun: NewRun) => {
    const bodyData = {
        user_id: newRun.userId,
        date: newRun.date,
        distance_km: newRun.distanceKm,
        challenge_id: newRun.challengeId,
    };

    const url = realBackend + 'addRun';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
    });

    const data = await response.json();
    return data;
};

type RegisterResult = {
    success: boolean;
    message?: string;
    error?: string;
};

export const postCreateUser = async (newUser: UserData): Promise<RegisterResult> => {
    const bodyData = {
        name: newUser.userName,
        password: newUser.password,
        geburtsdatum: newUser.birthDate,
        geschlecht: newUser.gender.toUpperCase(),
    };

    const url = realBackend + 'register';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
    });

    const data = (await response.json()) as RegisterResult;

    if (data.success && data.message) sendSuccessMessage(data.message);
    else if (data.error) sendErrorMessage(data.error);

    return data;
};

type LoginResult = {
    success: boolean;
    message: string;
    user: {
        id: number;
        geburtsdatum: string;
        geschlecht: string;
    };
};

export const postLogIn = async (userName: string, password: string): Promise<LoginResult> => {
    const bodyData = {
        name: userName,
        password: password,
    };

    const url = realBackend + 'login';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
    });

    const data = (await response.json()) as LoginResult;

    if (data.success) sendSuccessMessage(data.message);
    else if (data.message !== '') sendErrorMessage(data.message);

    return data;
};
