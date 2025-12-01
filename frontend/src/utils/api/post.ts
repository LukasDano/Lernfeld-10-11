import { toast } from 'sonner';

import type { Run, User } from '../../data/types.ts';

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

export const postNewUser = async (newUser: User) => {
    console.log('New Run: ', newUser);

    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

    toast.promise(promise, {
        loading: 'Loading...',
        success: () => {
            return 'Neuer Benutzer  wurde hinzugefügt';
        },
        error: 'Error',
    });
};
