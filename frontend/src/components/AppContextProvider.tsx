import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { FC, ReactNode } from 'react';
import { useMemo } from 'react';

import type { Run, User } from '../data/types.ts';
import { getRanks, getRuns } from '../utils/api/get.ts';
import { postNewRun, postNewUser } from '../utils/api/post.ts';
import { AppContext, type AppContextValues } from './AppContext.tsx';

type AppContextProviderProps = {
    children: ReactNode;
};

export const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
    const queryClient = useQueryClient();

    const { data: runList = [] } = useQuery({
        queryKey: ['runs'],
        queryFn: getRuns,
        refetchInterval: 10000,
    });

    const addRunMutation = useMutation({
        mutationFn: async (newRun: Run) => {
            return await postNewRun(newRun);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['runs'] });
        },
    });

    const { data: rankList = [] } = useQuery({
        queryKey: ['ranks'],
        queryFn: getRanks,
        refetchInterval: 10000,
    });

    const addUserMutation = useMutation({
        mutationFn: async (newUser: User) => {
            return await postNewUser(newUser);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });

    const appContextValues = useMemo<AppContextValues>(
        () => ({
            runList,
            addRun: addRunMutation.mutate,
            rankList,
            addUser: addUserMutation.mutate,
        }),
        [runList, addRunMutation.mutate, rankList, addUserMutation.mutate],
    );

    return <AppContext.Provider value={appContextValues}>{children}</AppContext.Provider>;
};
