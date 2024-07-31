import { useState, useEffect } from 'react';
import { HPCharacter } from '../models/HPCharacter.models';
import { Character } from './Character';

export const ShowCharacter = () => {
    const [charac, setCharac] = useState<HPCharacter>({} as HPCharacter);
    const getCharac = async () => {
        const response = await fetch('https://hp-api.onrender.com/api/characters');
        const data = await response.json();
        const randomNumber = Math.floor(Math.random() * 10);
        const randomCharacter = data[randomNumber];
        setCharac(randomCharacter);
    }
    useEffect(() => {
        getCharac();
    }, [])

    return (
        <div>
            <Character charac={charac} />
            <button onClick={getCharac} className="bg-blue-500 text-white fond-bold px-4 py-2 rounded mt-4">Get Character</button>
        </div>
    )
}