import { type FC, useContext } from 'react';

import { AppContext } from '../AppContext.tsx';

type UserColumnProps = {
    userId: number;
};

export const UserColumn: FC<UserColumnProps> = ({ userId }) => {
    const { userList } = useContext(AppContext);

    const getUserById = (id: number): string => {
        const foundUsers = userList.filter((user) => user.id === id);
        if (foundUsers.length < 1) {
            console.warn('User wurde nicht gefunden!');
            return '-';
        } else return foundUsers[0].name;
    };

    return <td className={'px-4 py-2 text-sm text-gray-800'}>{getUserById(userId)}</td>;
};
