import api, { getTopGames } from '../api';
import React from 'react';
import { useEffect, useState } from "react";
import LiveChannelItem from './LiveChannelItem';

//import { getSession , signIn, signOut } from "next-auth/react";

function Games() {
    const [games, setGames] = useState([]);


    useEffect(() => {
        getTopGames().then( response => {
            //alert(JSON.stringify(response))
            setGames(response.data.data)
        }).catch(error => console.log(error))
    },[])
    
    return (
        <div id='live' className='p-2 md:p-8'>
            <h2 className='text-3xl font-bold px-3'>
            <span className='text-[#9147ff]'>TOP</span> GAMES
            </h2>
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2'>    
            {games && (
                games.map( game => 
                    <LiveChannelItem
                    img={game.box_art_url.replace('{width}',455).replace('{height}',455)}
                    profile_img={game.box_art_url}
                    title={game.name}
                    game={game.name}
                    />     
                )
            )}    
            </div>
        </div>
    );
};


export default Games;