import { createContext } from 'react';

import type { NewRun, Rank, Run } from '../data/types.ts';

export type AppContextValues = {
    runList: Run[];
    addRun: (val: NewRun) => void;
    rankList: Rank[];
    userId: number;
    setUserId: (val: number) => void;
};

export const AppContext = createContext<AppContextValues>({} as AppContextValues);
