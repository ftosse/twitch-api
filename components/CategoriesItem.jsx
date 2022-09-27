import Image from 'next/image';
import React from 'react';

const CategoriesItem = ({ img, title }) => {
  return (
    <div className='p-2 '>
      <Image src={img} width='52' height='72' alt='/' />
      <div>
        <p className='font-bold'>{title}</p>
      </div>
    </div>
  );
};

export default CategoriesItem;
