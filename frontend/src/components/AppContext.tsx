import { createContext } from 'react';

import type { Rank, Run, User } from '../data/types.ts';

export type AppContextValues = {
    runList: Run[];
    addRun: (val: Run) => void;
    rankList: Rank[];
    addUser: (val: User) => void;
};

export const AppContext = createContext<AppContextValues>({} as AppContextValues);
