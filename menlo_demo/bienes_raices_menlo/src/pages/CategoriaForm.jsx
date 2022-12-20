import React, { useState } from 'react';
import { Nav } from '../components/Nav';
import jsonLinks from '../assets/json/links.json';
import { set, useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CategoriaForm = () => {
  const links = jsonLinks.links;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const create = async (e) => {
    await axios.post('http://192.168.40.100:8080/api/categorias/', e);
    navigate(-1);
  };

  return (
    <main className='gap-4 flex justify-center items-center flex-col'>
      <Nav links={links} brand='MENLO' />
      <div className='h-24'></div>
      <h1 className='text-5xl normal'>SUBE UNA CATEGORIA</h1>
      <form
        onSubmit={handleSubmit(create)}
        className=' shadow-xl gap-8 flex flex-col w-[90%] p-8 bg-slate-100 rounded-xl md:w-1/2 justify-center items-center'
      >
        <div className='flex w-full gap-4'>
          <input
            type='text'
            className='normal text-lg px-2 rounded-lg shadow-xl w-full p-2 h-10'
            placeholder='Nombre'
            id='nombre'
            {...register('nombre', { required: true })}
          />
        </div>{' '}
        {errors.nombre && (
          <p className='condensed text-xl text-red-700'>
            El nombre no puede estar vacío.
          </p>
        )}
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
