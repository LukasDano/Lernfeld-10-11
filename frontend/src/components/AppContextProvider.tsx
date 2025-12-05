import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { type FC, type ReactNode, useState } from 'react';
import { useMemo } from 'react';

import type { Run } from '../data/types.ts';
import { getRanks, getRuns } from '../utils/api/get.ts';
import { postNewRun } from '../utils/api/post.ts';
import { getStorageValue, setStorageValue } from '../utils/storageProvider.ts';
import { AppContext, type AppContextValues } from './AppContext.tsx';

type AppContextProviderProps = {
    children: ReactNode;
};

export const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
    const [userId, setUserId] = useState<number>(getStorageValue('userId'));

    const updateUserId = (num: number): void => {
        setStorageValue('userId', num);
        setUserId(num);
    };

    const queryClient = useQueryClient();

    const { data: runList = [] } = useQuery({
        queryKey: ['runs'],
        queryFn: getRuns,
        refetchInterval: 10000,
        enabled: userId !== 0,
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
        enabled: userId !== 0,
    });

    const appContextValues = useMemo<AppContextValues>(
        () => ({
            runList,
            addRun: addRunMutation.mutate,
            rankList,
            userId: userId,
            setUserId: updateUserId,
        }),
        [runList, addRunMutation.mutate, rankList, userId],
    );

    return <AppContext.Provider value={appContextValues}>{children}</AppContext.Provider>;
};
