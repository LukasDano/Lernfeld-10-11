import { useContext, useState } from 'react';
import type { FC } from 'react';

import type { NewRun } from '../../data/types.ts';
import { generateDateFromISOString, getTodayAsIsoString, isTodayOrYesterday } from '../../utils/date.ts';
import { sendWarnMessage } from '../../utils/notifications.ts';
import { AppContext } from '../AppContext.tsx';
import { DateFormInput } from '../miscellaneous/DateFormInput.tsx';
import { BaseModal } from './BaseModal.tsx';

type AddDataModalProps = {
    isOpen?: boolean;
    onClose: () => void;
    onSave: (run: any) => void;
};

export const AddDataModal: FC<AddDataModalProps> = ({ isOpen, onClose, onSave }) => {
    if (!isOpen) return null;

    return <BaseModal isOpen={isOpen} onClose={onClose} content={<AddDataFrom onClose={onClose} onSave={onSave} />} />;
};

const AddDataFrom: FC<AddDataModalProps> = ({ onClose, onSave }) => {
    const { userId } = useContext(AppContext);

    const [date, setDate] = useState<string>(getTodayAsIsoString());
    const [distanceKm, setDistanceKm] = useState<string>('1,5');

    const checkValues = (): boolean => {
        let allowed = true;

        if (!date || distanceKm === '') {
            sendWarnMessage('Bitte alle Felder korrekt ausfüllen.');
            allowed = false;
        }

        if (parseFloat(distanceKm) < 1.5) {
            sendWarnMessage('Es müssen mindestens 1,5 km erfasst werden.');
            allowed = false;
        }

        const dateAsDate = generateDateFromISOString(date);

        if (!isTodayOrYesterday(dateAsDate)) {
            sendWarnMessage('Bitte nur Werte für heute oder gestern erfassen.');
            allowed = false;
        }

        return allowed;
    };

    const handleSubmit = () => {
        if (!checkValues()) return;

        const newRun: NewRun = {
            userId: userId,
            date: date,
            distanceKm: parseFloat(distanceKm),
            challengeId: 1, // TODO hier muss noch die richtige Id genommen werden
        };

        onSave(newRun);
        handleClose();
    };

    const handleClose = () => {
        setDate('');
        setDistanceKm('');
        onClose();
    };

    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Neuen Lauf erfassen</h2>

            <div className="space-y-4">
                <DateFormInput label={'Datum'} value={date} onChange={(val) => setDate(val)} />

                <label className="block text-sm font-medium mb-1">Strecke (km)</label>
                <input
                    type="number"
                    className="w-full border rounded-lg px-3 py-2"
                    value={distanceKm}
                    min={1.5}
                    placeholder={'0'}
                    onChange={(evt) => setDistanceKm(evt.target.value)}
                />
            </div>

            <div className="mt-6 flex justify-end gap-3">
                <button onClick={handleClose} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                    Abbrechen
                </button>

                <button
                    onClick={handleSubmit}
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                    Speichern
                </button>
            </div>
        </>
    );
};
