import type { ChangeEvent, FC } from 'react';

type DateFormInputProps = {
    label: string;
    value: string;
    onChange: (date: string) => void;
};

export const DateFormInput: FC<DateFormInputProps> = ({ label, value, onChange }) => {
    const htmlId = 'date-input';

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        if (evt.target.value === '') {
            const today = new Date().toISOString().split('T')[0];
            onChange(today);
        } else onChange(evt.target.value);
    };

    const initialValue = value === "" ? new Date().toISOString().split('T')[0] : value;

    return (
        <div>
            <label className="block text-sm font-medium mb-1" htmlFor={htmlId}>
                {label}
            </label>
            <input
                id={htmlId}
                type="date"
                className="w-full border rounded-lg px-3 py-2"
                value={initialValue}
                onChange={(evt) => handleChange(evt)}
            />
        </div>
    );
};
