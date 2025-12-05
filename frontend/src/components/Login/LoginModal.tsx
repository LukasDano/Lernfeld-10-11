import { type FC, useContext, useState } from 'react';

import type { UserData } from '../../data/types.ts';
import { postCreateUser, postLogIn } from '../../utils/api/post.ts';
import { AppContext } from '../AppContext.tsx';

type RegisterOrLogin = 'register' | 'login';

export const LoginForm = () => {
    const { setUserId } = useContext(AppContext);

    const [state, setState] = useState<RegisterOrLogin>('login');
    const [user, setUser] = useState<UserData>({
        userName: '',
        password: '',
        birthDate: '',
        gender: 'M', // Als Default Wert (weil die Option zuerst angezeigt wird)
    });

    const updateUser = (field: keyof UserData, val: string) => {
        setUser((prev) => ({
            ...prev,
            [field]: val,
        }));
    };

    const handleRegister = () => {
        if (state === 'login') setState('register');
        else
            postCreateUser(user).then((res) => {
                if (res.success)
                    postLogIn(user.userName, user.password).then((res) => {
                        if (res.success) setUserId(res.user.id);
                    });
            });
    };

    const logUserIn = () => {
        postLogIn(user.userName, user.password).then((res) => {
            if (res.success) setUserId(res.user.id);
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

                <form className="grid gap-4">
                    <LoginFormInput
                        lable={'Benutzer'}
                        value={user.userName}
                        onValueChange={(val) => updateUser('userName', val)}
                    />

                    <LoginFormInput
                        lable={'Passwort'}
                        value={user.password}
                        onValueChange={(val) => updateUser('password', val)}
                    />

                    {state === 'register' && (
                        <>
                            <LoginFormInput
                                lable={'Geburtstag'}
                                type={'date'}
                                value={user.birthDate}
                                onValueChange={(val) => updateUser('birthDate', val)}
                            />

                            <LoginFormSelect
                                label={'Geschlecht'}
                                value={'M'}
                                options={[
                                    { key: 'Männlich', value: 'M' },
                                    { key: 'Weiblich', value: 'W' },
                                    {
                                        key: 'Divers',
                                        value: 'D',
                                    },
                                ]}
                                onValueChange={(val) => updateUser('gender', val)}
                            />
                        </>
                    )}

                    <button
                        type={'button'}
                        onClick={handleRegister}
                        className="w-full bg-zinc-500 text-white rounded-xl py-2 font-medium hover:bg-zinc-600 transition"
                    >
                        Registrieren
                    </button>

                    {state === 'login' && (
                        <button
                            type={'button'}
                            onClick={logUserIn}
                            className="w-full bg-blue-600 text-white rounded-xl py-2 font-medium hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

type LoginFormInputProps = {
    value: string;
    onValueChange: (e: string) => void;
    lable: string;
    type?: string;
    placeholder?: string;
};

const LoginFormInput: FC<LoginFormInputProps> = ({ lable, type, value, onValueChange, placeholder }) => {
    return (
        <>
            <label className="block mb-1 text-sm font-medium">{lable}</label>
            <input
                type={type || ''}
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
                placeholder={placeholder || `${lable} ...`}
                required
                className="w-full border rounded-xl px-3 py-2"
            />
        </>
    );
};

type LoginFormSelectProps = {
    label: string;
    value: string;
    onValueChange: (value: string) => void;
    options: { key: string; value: string }[];
    placeholder?: string;
};

const LoginFormSelect: FC<LoginFormSelectProps> = ({ label, value, onValueChange, options, placeholder }) => {
    return (
        <>
            <label className="block mb-1 text-sm font-medium">{label}</label>
            <select
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
                required
                className="w-full border rounded-xl px-3 py-2 bg-white"
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}

                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.key}
                    </option>
                ))}
            </select>
        </>
    );
};
