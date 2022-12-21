import React from 'react';

export const List = ({ imagen, titulo, descripcion, idPropiedad, precio }) => {
  return (
    <a className='text-sm xl:text-xl h-80' href={`/detalles/${idPropiedad}`}>
      <div className='flex items-center xl:h-32 h-48 gap-4 hover:bg-slate-50 bg-slate-200 px-8 py-4'>
        <img
          src={imagen}
          alt=''
          className='w-32 rounded-sm h-24 object-cover'
        />
        <div className='flex gap-2 justify-center items-center'>
          <div className='flex flex-col xl:gap-1 gap-2'>
            <span className='text-sm xl:text-xl font-bold'>{titulo}</span>
            <p className='text-sm xl:text-[.8em] display font-bold'>
              ${precio} USD
            </p>
            <p className='text-[12px] xl:text-sm'>{descripcion.slice(0, 200)}...</p>
          </div>
        </div>
      </div>
    </a>
  );
};
