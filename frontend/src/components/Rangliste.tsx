import { useEffect, useState } from 'react';

type Rang = {
    name: string;
    total_km: string;
    lauf_tage: number;
    birthdate: number;
    gender: number;
};

function Rangliste() {
    const [rangliste, setRangliste] = useState<Rang[]>([]);

    useEffect(() => {
        fetch('https://deine-domain.de/api.php?action=getRangliste')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setRangliste(data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>Rangliste</h2>
            {rangliste.map((user, i) => (
                <div key={i}>
                    <p>Name: {user.name}</p>
                    <p>Total km: {user.total_km}</p>
                    <p>Lauftage: {user.lauf_tage}</p>
                    <p>Geburtsdatum: {user.birthdate}</p>
                    <p>Geschlecht: {user.gender}</p>
                </div>
            ))}
        </div>
    );
}

export default Rangliste;
