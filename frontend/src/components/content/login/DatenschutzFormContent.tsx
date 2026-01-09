import { useState } from 'react';
import type { FC } from 'react';

type DatenschutzFormContentProps = {
    privacyAccepted: boolean;
    setPrivacyAccepted: (val: boolean) => void;
};

export const DatenschutzFormContent: FC<DatenschutzFormContentProps> = ({ privacyAccepted, setPrivacyAccepted }) => {
    const [showPrivacy, setShowPrivacy] = useState(false);

    return (
        <>
            <div className="border rounded-xl overflow-hidden bg-white">
                <button
                    type="button"
                    onClick={() => setShowPrivacy(!showPrivacy)}
                    className="w-full flex justify-between items-center px-3 py-2 bg-gray-100 text-sm font-medium hover:bg-gray-200"
                >
                    <span>Datenschutzerklärung</span>
                    <span>{showPrivacy ? '▲' : '▼'}</span>
                </button>

                {showPrivacy && (
                    <div className="p-3 text-sm leading-relaxed max-h-60 overflow-y-auto bg-white border-t">
                        <p>
                            Grundsätzlich gilt die Datenschutzerklärung unter{' '}
                            <a href="https://www.vfl-rethwisch.de/datenschutz/">
                                https://www.vfl-rethwisch.de/datenschutz/
                            </a>
                            <br></br>Mit der Nutzung dieser WebApp erklärst du dich darüber hinaus mit der Verarbeitung
                            deiner personenbezogenen Daten gemäß dieser Erklärungen einverstanden.
                        </p>

                        <p className="mt-2">
                            1. Welche Daten werden gespeichert?
                            <br></br>Im Rahmen der Lauf-Challenge werden folgende personenbezogene Daten verarbeitet und
                            gespeichert:
                            <br></br>Bei der Registrierung:
                            <br></br>• Name
                            <br></br>• Geburtsdatum
                            <br></br>• Geschlecht
                            <br></br>• Passwort
                            <br></br>• Zeitpunkt der Account-Erstellung
                            <br></br>Bei der Nutzung der Lauf-Challenge:
                            <br></br>• Datum und Uhrzeit der Erfassung eines Laufs
                            <br></br>• Laufstrecke
                            <br></br>• Datum des gelaufenen Laufs
                            <br></br>• Screenshot aus einer Tracking-App
                        </p>

                        <p className="mt-2">
                            2. Zweck der Datenverarbeitung
                            <br></br>Die Daten werden ausschließlich verwendet für:
                            <br></br>• die Teilnahme an der Lauf-Challenge
                            <br></br>• die Berechnung von Ranglisten und Statistiken
                            <br></br>• die Anzeige der Laufdaten für Teilnehmer der Laufchallenge
                            <br></br>• den fairen Vergleich zwischen Teilnehmenden
                            <br></br>• dem Vergleich zwischen verschiedenen Laufchallenges
                            <br></br>Eine Nutzung zu Werbezwecken oder eine Weitergabe an Dritte findet nicht statt.
                        </p>

                        <p className="mt-2">
                            3. Rechtsgrundlage
                            <br></br>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. a DSGVO auf Basis deiner
                            freiwilligen Einwilligung durch Nutzung dieser WebApp.
                        </p>
                        <p className="mt-2">
                            4. Datensicherheit
                            <br></br>Alle Passwörter werden sicher gehasht gespeichert.
                            <br></br>Die Daten werden durch technische und organisatorische Maßnahmen vor unbefugtem
                            Zugriff geschützt.
                        </p>
                        <p className="mt-2">
                            5. Speicherdauer
                            <br></br>Die Daten werden nur so lange gespeichert, wie Lauf-Challenges in der Juggersparte
                            bestehen oder bis die Einwilligung widerrufen wird.
                        </p>
                        <p className="mt-2">
                            6. Deine Rechte
                            <br></br>Du hast jederzeit das Recht auf:
                            <br></br>• Auskunft über deine gespeicherten Daten
                            <br></br>• Berichtigung falscher Daten
                            <br></br>• Löschung deiner Daten
                            <br></br>• Einschränkung der Verarbeitung
                            <br></br>• Widerruf deiner Einwilligung
                            <br></br>Ein Widerruf führt zur Löschung deines Accounts und aller zugehörigen Laufdaten.
                        </p>
                        <p className="mt-2">
                            7. Verantwortlicher
                            <br></br>Verantwortlich für die Datenverarbeitung ist der VfL Rethwisch e.V.
                            <br></br>Die Kontaktdaten für die Ausübung der Rechte nach Punkt 6 befinden sich in der
                            allgemeinen Datenschutzerklärung unter https://www.vfl-rethwisch.de/datenschutz/
                        </p>
                    </div>
                )}
            </div>
            <div className="border rounded-xl p-3 bg-gray-50 text-sm">
                <label className="flex gap-2 items-start cursor-pointer">
                    <input
                        type="checkbox"
                        checked={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                        className="mt-1"
                    />
                    <span>Datenschutzerklärung akzeptiert</span>
                </label>
            </div>
        </>
    );
};
