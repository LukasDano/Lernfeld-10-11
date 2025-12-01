import { createContext } from 'react';
import type {Run, User} from "../data/types.ts";

export type AppContextValues = {
    runList: Run[];
    addRun: (val: Run) => void;
    userList: User[];
    addUser: (val: User) => void;
};

export const AppContext = createContext<AppContextValues>({} as AppContextValues);