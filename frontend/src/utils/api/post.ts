import { toast } from 'sonner';

import type { Run, UserData } from '../../data/types.ts';
import { sendErrorMessage, sendSuccessMessage } from '../notifications.ts';
import { realBackend } from './get.ts';

export const postNewRun = async (newRun: Run) => {
    console.log('New Run: ', newRun);

    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

    toast.promise(promise, {
        loading: 'Loading...',
        success: () => {
            return 'Neuer Lauf wurde hinzugefügt';
        },
        error: 'Error',
    });
};

type RegisterResult = {
    success: boolean;
    message: string;
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

    if (data.success) sendSuccessMessage(data.message);
    else if (data.message !== '') sendErrorMessage(data.message);

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
