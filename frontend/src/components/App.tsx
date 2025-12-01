import {useEffect, useState} from 'react';

import {AddDataModal} from './AddDataModal.tsx';
import {PageHeader} from './PageHeader.tsx';
import {RunTable} from './table/RunTable.tsx';
import type {Run, User} from "../data/types.ts";
import {LeaderBoard} from "./table/LeaderBoard.tsx";
import {getRuns, getUsers} from "../utils/api/get.ts";

export const App = () => {
    const [addDataModalOpen, setAddDataModalOpen] = useState<boolean>(false);

    const [runList, setRunList] = useState<Run[]>();
    const [userList, setUserList] = useState<User[]>();

    useEffect(() => {
        getUsers().then((users) => {
            setUserList(users);
        });


        getRuns().then((runs) => {
            setRunList(runs);
        });

    }, []);


    const addToRunList = (newRun: Run) => {
        const currentList = runList ? runList : []
        const listCopy = [...currentList];
        listCopy.push(newRun);

        setRunList(listCopy);
    };

    return (
        <>
            <AddDataModal
                isOpen={addDataModalOpen}
                onClose={() => setAddDataModalOpen(false)}
                onSave={addToRunList}
            />
            <PageHeader openAddDataModal={() => setAddDataModalOpen(true)}/>

            <div className="w-full flex justify-center px-6">
                <div className="flex flex-col md:flex-row w-full max-w-6xl gap-52">

                    {runList && <div className="w-full md:w-2/3">
                        <RunTable runList={runList}/>
                    </div>}

                    {userList && <div className="w-full md:w-1/3">
                        <LeaderBoard userList={userList}/>
                    </div>}

                </div>
            </div>
        </>
    );
};
