import { createContext } from 'react';

import type { Rank, Run } from '../data/types.ts';

export type AppContextValues = {
    runList: Run[];
    addRun: (val: Run) => void;
    rankList: Rank[];
    userId: number;
    setUserId: (val: number) => void;
};

export const AppContext = createContext<AppContextValues>({} as AppContextValues);
