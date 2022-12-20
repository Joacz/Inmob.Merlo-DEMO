import React, { useState } from 'react';
import { Nav } from '../components/Nav';
import jsonLinks from '../assets/json/links.json';
import { set, useForm } from 'react-hook-form';
import axios from 'axios';

export const PropiedadForm = () => {
  const links = jsonLinks.links;
  const [error, setError] = useState('');
  const [file, setFile] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const create = async (e) => {
    e.imagen = e.imagen[0].name;

    if (isNaN(e.precio)) {
      setError('El precio debe ser un entero.');
      console.log('Precio no es un numero');
      return null;
    }

    await axios.post('http://192.168.40.100:8080/api/propiedades/', e);
  };

  return (
    <main className='gap-4 flex justify-center items-center flex-col'>
      <Nav links={links} brand='MENLO' />
      <div className='h-24'></div>
      <h1 className='text-5xl normal'>SUBE UNA PROPIEDAD</h1>
      <form
        onSubmit={handleSubmit(create)}
        className=' shadow-xl gap-8 flex flex-col w-[90%] p-8 bg-slate-100 rounded-xl md:w-1/2 justify-center items-center'
      >
        <span className='text-red-600 text-xl'>{error}</span>
        <div className='flex w-full gap-4'>
          <input
            type='text'
            className='normal text-lg px-2 rounded-lg shadow-xl w-full p-2 h-10'
            placeholder='Título'
            id='titulo'
            {...register('titulo', { required: true })}
          />
          <input
            type='text'
            className='normal text-lg px-2 rounded-lg shadow-xl w-full p-2 h-10'
            placeholder='Ubicación'
            id='ubicacion'
            {...register('ubicacion', { required: true })}
          />
        </div>
        <div className='flex w-full gap-4'>
          <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor='imagen'>Elige una imagen:</label>
            <input
              type='file'
              id='imagen'
              {...register('imagen', { required: true })}
            />
          </div>
          <input
            type='text'
            className='normal text-lg px-2 rounded-lg shadow-xl w-full p-2 h-10'
            placeholder='Precio'
            id='precio'
            {...register('precio', { required: true })}
          />
        </div>
        <div className='flex w-full gap-4'>
          <textarea
            className='enabled:outline-none h-48 normal text-lg px-2 rounded-lg shadow-xl w-full p-2 resize-none'
            id='descripcion'
            placeholder='Descripción'
            {...register('descripcion', { required: true })}
          />
        </div>
        <button
          type='submit'
          className='bg-green-400 text-xl md:w-1/4 text-center font-bold text-green-900 p-2 rounded hover:bg-green-800 hover:text-green-300 hover:cursor-pointer'
        >
          Crear
        </button>
      </form>
    </main>
  );
};
