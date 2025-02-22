import React from 'react';
import '../App.css'

const ImageContainer = ({ imageUrl , desc1, desc2, price}) => {
  return (
    <div className='imageSetBg flex flex-col' style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className='h-[80%] w-full z-10 flex justify-center items-center'>
        <img className="my-image h-[80%]" src={imageUrl} alt="" />
      </div>
      <div className='h-[20%] w-full flex flex-col z-10 p-3 ml-5'>
            <div class="h-[33.3%] w-full">
                <p className='text-custom'>{desc1}</p>
            </div>
            <div class="h-[33.3%] w-full">
            <p className='text-custom'>{desc2}</p>
            </div>
            <div class="h-[33.3%] w-full">
            <p className='text-custom'>{price}</p>
            </div>
      </div>
    </div>
  );
};

export default ImageContainer;