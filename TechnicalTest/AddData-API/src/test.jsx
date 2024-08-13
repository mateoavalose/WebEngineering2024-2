import React, { useState, useEffect } from 'react';

export const Test = () => {
    const [players, setPlayers] = useState([]);

    const importPlayers = async () => {
        const response = await fetch('mach-eight.uc.r.appspot.com');
        const data = await response.json();
        const {values} = data;
        setPlayers(values);
    }
    const heightSum = (height) => {
        
    }

    return(
        <div>
            
        </div>
    )
}