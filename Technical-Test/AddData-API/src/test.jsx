import React, { useState, useEffect } from 'react';

export const Test = () => {
    const [height, setHeight] = useState(0);
    const [allPlayers, setAllPlayers] = useState([]);
    const [playersPair, setPlayersHeight] = useState([]);

    const importPlayers = async () => {
        const response = await fetch('https://mach-eight.uc.r.appspot.com');
        const data = await response.json();
        const { values } = data;
        setAllPlayers(values);
        heightSum(height, values);
    }
    const heightSum = (height, players) => {
        const pairs = [];
      
        const findPairs = (index, currentPlayer) => {
          if (index >= players.length) return;
      
          for (let i = index + 1; i < players.length; i++) {
            const otherPlayer = players[i];
            if (parseInt(currentPlayer.h_in) + parseInt(otherPlayer.h_in) === parseInt(height)) {
              pairs.push([currentPlayer, otherPlayer]);
            }
          }
      
          findPairs(index + 1, players[index + 1]);
        };
      
        findPairs(0, players[0]);
        setPlayersHeight(pairs);
      };

    return(
        <div>
            <h1>NBA Player Height</h1>
            <input type="number" onChange={(e) => setHeight(e.target.value)} placeholder='Enter a height (in)' />
            <button onClick={importPlayers}>Search</button>
            <ul>
                {playersPair.map((pair, index) => (
                    <li key={index}>{pair[0].first_name} {pair[0].last_name} and {pair[1].first_name} {pair[1].last_name}</li>
                ))}
            </ul>
        </div>
    )
}