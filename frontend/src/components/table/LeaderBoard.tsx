import {type FC, useEffect, useState,} from 'react';
import 'tippy.js/dist/tippy.css';

import type { User } from '../../data/types.ts';
import {TotalDistanceColumn} from "./TotalDistanceColumn.tsx";
import {getTotalDistanceFor} from "../../utils/utility.ts";

type LeaderBoardProps = {
    userList: User[];
};

export const LeaderBoard: FC<LeaderBoardProps> = ({ userList }) => {
    const [users, setUsers] = useState<User[]>(userList);

    useEffect(() => {
        const copy = [...users];
        const sortedList = copy
            .sort((a,b) =>
                getTotalDistanceFor(a.id) - getTotalDistanceFor(b.id))
            .reverse();

        setUsers(sortedList);
    }, [userList]);

    return (
        <div className="max-w-3xl mx-auto mt-8">
            <h2>Rangliste</h2>
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full border-collapse bg-white">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Platz
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Teilnehmer
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Gesamt Strecke
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
                            >
                                <td className="px-4 py-2 text-sm text-gray-800">{index + 1 + "."}</td>
                                <td className="px-4 py-2 text-sm text-gray-800">{user.name}</td>
                                <TotalDistanceColumn userId={user.id}/>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
