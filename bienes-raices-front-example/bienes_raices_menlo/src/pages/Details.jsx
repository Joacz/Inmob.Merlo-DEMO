import React from 'react';
import jsonLinks from '../assets/json/links.json';
import { Nav, List } from '../components/index';
import { useParams } from 'react-router-dom';
import { useBuildings, useBuildingById } from '../hooks/index';

export const Details = () => {
  const links = jsonLinks.links;
  const params = useParams();
  const posts = useBuildings(
    'http://192.168.40.100:8080/api/propiedades/fecha/reciente?page=0'
  );

  const post = useBuildingById(
    `http://192.168.40.100:8080/api/propiedades/${params.id}`
  );

  return (
    <main className='w-full text-justify'>
      <Nav links={links} brand='MENLO' />
      <div className='h-16' />
      <div className='flex p-8 items-center gap-8 bg-slate-100 rounded md:m-8 m-1 break-words '>
        <img
          className='rounded w-[50%] object-cover h-96'
          src={'/' + post.imagen}
          alt=''
        />
        <div className='flex flex-col overflow-hidden gap-4 text-xl md:text-5xl h-full '>
          <h1 className='normal'>{post.titulo}</h1>
          <h3 className='text-2xl'>${post.precio}</h3>
          <a
            href=''
            className='bg-sky-500 w-fit p-2 text-3xl rounded hover:text-white text-white hover:bg-sky-700 normal'
          >
            Contactar
          </a>
          <span className='text-xl'>
            Tel: <span className='text-green-900'>+54 300 399 1234</span>
          </span>
          <span className='text-lg'>
            Correo:{' '}
            <span className='text-green-900 '>
              menlo.inmobiliaria@demo.com.ar
            </span>
          </span>
        </div>
      </div>
      <div className='w-full flex gap-8 p-8 justify-center items-start md:flex-row flex-col'>
        <div className='text-xl md:w-[50%] w-full flex-col flex gap-8 justify-center items-start'>
          <div className='flex justify-center items-center w-full'>
            <span className='text-3xl font-bold display'>Detalles</span>
          </div>
          <div className='flex gap-4 bg-slate-100 p-3 rounded'>
            <span className='font-bold'>Descripción:</span>
            <p>{post.descripcion}</p>
          </div>
          <div className='flex gap-4 bg-slate-100 p-3 rounded'>
            <span className='font-bold'>Ubicación:</span>
            <p>{post.ubicacion}</p>
          </div>
          <div className='w-full gap-2 flex flex-col bg-slate-100 p-3 rounded'>
            <span className='font-bold'>Imagen:</span>
            <img
              className='rounded w-full object-cover'
              src={'/' + post.imagen}
              alt=''
            />
          </div>
        </div>
        <div className='text-xl md:w-[50%] w-full'>
          <div className='h-14 flex justify-center'>
            <span className='text-3xl font-bold display'>Otros Artículos</span>
          </div>
          {posts.map((building) => (
            <List
              key={building.id}
              titulo={building.titulo}
              descripcion={building.descripcion}
              imagen={'/' + building.imagen}
              idPropiedad={building.id}
              precio={building.precio}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
