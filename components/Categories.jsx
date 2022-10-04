import api, { initGames} from '../pages/api2';
import React from 'react';
import CategoriesItem from './CategoriesItem';
import { useEffect, useState } from 'react';

function Categories() {
  const [games, setGames] = useState([]);
  
  useEffect(() => {
    initGames().then( response =>{
      setGames(response.data.data)
    }).catch(error => console.log(error))
  },[])

  return (
    <div id='categories' className='p-2 md:p-8'>
      <h2 className='text-4xl font-bold px-2'>
        <span className='text-[#9147ff]'>Games </span> for all 
      </h2>
      {/* Container */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2'>
      {games && (
        games.map( game =>  
          {
            return <CategoriesItem
              img={game.box_art_url}
              title={game.name} />;
          }
        )
      )}
      </div>
    </div>
  );
};
      
export default Categories;
