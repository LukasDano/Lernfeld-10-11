import type { FC } from 'react';

type LoginFormInputProps = {
    value: string | number;
    onValueChange: (e: string) => void;
    lable: string;
    type?: string;
    placeholder?: string;
    password: boolean;
};

export const LoginFormInput: FC<LoginFormInputProps> = ({
    lable,
    type,
    value,
    onValueChange,
    placeholder,
    password,
}) => {
    return (
        <>
            <label className="block mb-1 text-sm font-medium">{lable}</label>
            <input
                type={password ? 'password' : type}
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

export const LoginFormSelect: FC<LoginFormSelectProps> = ({ label, value, onValueChange, options, placeholder }) => {
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
