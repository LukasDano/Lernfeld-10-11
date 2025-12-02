import { useEffect, useState } from "react";

type Laufe = {
    name: string;
    date: string;
    distance_km: number;
    challenge_id: number;
}

export function NeuesteLaeufe() {
    const [laeufe, setLaeufe] = useState<Laufe[]>([]);

    useEffect(() => {
        fetch("https://jugger-laufchallenge.de/api/api.php?action=getNeuesteLauefe")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLaeufe(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Neueste Läufe</h2>
            {laeufe.map((lauf, i) => (
                <div key={i}>
                    <p>{lauf.name}</p>
                    <p>{lauf.date}</p>
                    <p>{lauf.distance_km} km</p>
                    <p>Challenge: {lauf.challenge_id}</p>
                </div>
            ))}
        </div>
    );
}