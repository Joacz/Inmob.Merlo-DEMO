import React from 'react';

export const Card = ({ detalles, ubicacion, titulo, imagen, idPropiedad }) => {
  return (
    <div className='flex flex-col gap-4 w-[360px] rounded-lg h-[550px] bg-slate-100 shadow-xl p-4 border border-slate-300'>
      <div className='flex flex-col  gap-4 '>
        <img
          className='rounded-xl h-[250px] object-cover'
          src={imagen}
          alt=''
        />
        <span className='title'>{titulo}</span>
      </div>
      <div className='flex flex-col gap-2'>
        <p>
          <span className='title'>Ubicación: </span>
          {ubicacion}
        </p>
        <p className=''>
          {detalles.slice(0, 200)}...{' '}
          <a className='text-2xl' href={`/detalles/${idPropiedad}`}>
            Ver más
          </a>
        </p>
      </div>
    </div>
  );
};
