import api from '../api';
import React from 'react';
import { useEffect, useState } from "react";

function Games () {
    const [games, setGames] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            const result = await api.get('https://api.twitch.tv/helix/games/top')
            console.log(result.data);
        };
        fetchData()
    });
    return <div>
        <h1> TOP GAMES </h1>
    </div>
};


export default Games;