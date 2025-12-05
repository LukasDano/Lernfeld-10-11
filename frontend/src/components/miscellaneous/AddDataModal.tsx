import { useContext, useState } from 'react';
import type { FC } from 'react';

import type { NewRun } from '../../data/types.ts';
import { sendWarnMessage } from '../../utils/notifications.ts';
import { AppContext } from '../AppContext.tsx';
import { DateFormInput } from './DateFormInput.tsx';

type RunCreateModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSave: (run: any) => void;
};

export const AddDataModal: FC<RunCreateModalProps> = ({ isOpen, onClose, onSave }) => {
    const { userId } = useContext(AppContext);

    const [date, setDate] = useState<string>('');
    const [distanceKm, setDistanceKm] = useState<string>('');

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (!date || distanceKm === '') {
            sendWarnMessage('Bitte alle Felder korrekt ausfüllen.');
            return;
        }

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
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md animate-fadeIn">
                <h2 className="text-xl font-semibold mb-4">Neuen Lauf erfassen</h2>

                <div className="space-y-4">
                    <DateFormInput
                        label={'Datum'}
                        value={date}
                        onChange={(val) => setDate(val)}
                    />

                    <label className="block text-sm font-medium mb-1">Strecke (km)</label>
                    <input
                        type="number"
                        className="w-full border rounded-lg px-3 py-2"
                        value={distanceKm}
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
            </div>
        </div>
    );
};
