import { toast } from 'sonner';

import type {Run, UserData} from '../../data/types.ts';
import {realBackend} from "./get.ts";

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

export const postCreateUser = async (newUser: UserData) => {
    const bodyData = {
        name: newUser.userName,
        password: newUser.password,
        geburtsdatum: newUser.birthDate,
        geschlecht: newUser.gender
    };

    const url = realBackend + "register";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
    });

    const data = await response.json();
    console.log(data);
    return data;
};

export const postLogIn = async (userName: string, password: string) => {
    const bodyData = {
        name: userName,
        password: password,
    };

    const url = realBackend + "login";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
    });

    const data = await response.json();
    console.log(data);
    return data;
};
