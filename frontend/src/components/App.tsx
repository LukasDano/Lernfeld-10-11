import { useState } from 'react';

import { runs } from '../data/mockData.ts';
import { AddDataModal } from './AddDataModal.tsx';
import { PageHeader } from './PageHeader.tsx';
import { RunTable } from './table/RunTable.tsx';
import type {Run} from "../data/types.ts";

export const App = () => {
    const [addDataModalOpen, setAddDataModalOpen] = useState<boolean>(false);

    const [list, setList] = useState<Run[]>(runs);

    const addToRunList = (newRun: Run) => {
        const listCopy = [...list];
        listCopy.push(newRun);

        setList(listCopy);
    };

    return (
        <>
            <AddDataModal
                isOpen={addDataModalOpen}
                onClose={() => setAddDataModalOpen(false)}
                onSave={addToRunList}
            />
            <PageHeader openAddDataModal={() => setAddDataModalOpen(true)} />
            <RunTable runList={list} />
        </>
    );
};
