import { useState } from 'react';
import type { FC } from 'react';

import type { Run } from '../../data/types.ts';

type RunCreateModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSave: (run: Run) => void;
};

export const AddDataModal: FC<RunCreateModalProps> = ({ isOpen, onClose, onSave }) => {
    const [userId, setUserId] = useState<number>(123); // ToDo richtige User Id generieren
    const [date, setDate] = useState<string>('');
    const [distanceKm, setDistanceKm] = useState<number>(0);
    const [picture, setPicture] = useState<string>('');

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (!date || distanceKm <= 0 || userId <= 0) {
            alert('Bitte alle Felder korrekt ausfüllen.');
            return;
        }

        const newRun: Run = {
            id: Date.now(), // ToDo Einfach die nächst höhere verfügbare ID nehmen
            createdAt: new Date().toISOString(),
            picture,
            userId,
            date,
            distanceKm,
        };

        onSave(newRun);
        onClose();
    };

    const handlePictureUpload = (file: File | null) => {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            setPicture(e.target?.result as string);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md animate-fadeIn">
                <h2 className="text-xl font-semibold mb-4">Neuen Lauf erfassen</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">User ID</label>
                        <input
                            type="number"
                            className="w-full border rounded-lg px-3 py-2"
                            value={userId}
                            onChange={(e) => setUserId(Number(e.target.value))}
                            disabled={true}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Datum</label>
                        <input
                            type="date"
                            className="w-full border rounded-lg px-3 py-2"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Strecke (km)</label>
                        <input
                            type="number"
                            className="w-full border rounded-lg px-3 py-2"
                            value={distanceKm}
                            onChange={(e) => setDistanceKm(Number(e.target.value))}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Bild</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handlePictureUpload(e.target.files?.[0] ?? null)}
                        />

                        {picture && (
                            <img src={picture} alt="Preview" className="mt-2 rounded-lg max-h-32 object-cover" />
                        )}
                    </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <button onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
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
