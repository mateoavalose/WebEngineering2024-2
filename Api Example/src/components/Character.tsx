import { HPCharacter } from '../models/HPCharacter.models';

interface CharacterProps {
    charac: HPCharacter;
}

export const Character = ( {charac}:CharacterProps) => {
    return (
        <div>
            <p className="text-x1 font-bold text-gray-800">{charac.name}</p>
            <p className="text-xl font-light text-gray-600">{charac.dateOfBirth}</p>
            <p className="text-xl font-light text-gray-600">{charac.house}</p>
            <img src={charac.image} alt={charac.name} className="rounded-full h-40 w-40 object-cover"/>
        </div>
    )
}