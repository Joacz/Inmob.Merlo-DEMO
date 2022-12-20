import React, { useState, useEffect } from 'react';
import { Nav } from '../components/index';
import { List } from '../components/subcomponents/index';
import jsonLinks from '../assets/json/links.json';
import { ArrowDownIcon } from '@heroicons/react/outline';
import { useBuildings } from '../hooks/index';
import { useParams } from 'react-router-dom';
import { useCategories } from '../hooks/index';

export const Listado = () => {
  const links = jsonLinks.links;
  const [price, setPrice] = useState(0);
  const [aside, setAside] = useState(false);
  const params = useParams();
  const link =
    'http://192.168.40.100:8080/api/propiedades/' +
    params.filter.replace('-', '/') +
    '?page=' +
    params.page +
    params.search;

  const categories = useCategories();
  const posts = useBuildings(link);

  const element = document.getElementById('price_range_slider');
  const input = document.getElementById('price_text_input');

  const handlePriceChangeByText = () => {
    var value = input.value;
    setPrice(value);
  };

  const handlePriceChange = () => {
    var value = element.value;
    setPrice(value);
  };

  const showAside = () => {
    setAside(!aside);
  };

  return (
    <main className='w-full text-justify'>
      <Nav links={links} brand='MENLO' />

      <div className='mt-16 px-8 p-4 flex justify-between items-center hover:text-slate-600 text-md hover:cursor-pointer md:hidden'>
        <span className='flex gap-1 bg' onClick={() => showAside()}>
          Filtros <ArrowDownIcon width={25} />
        </span>
        <span className='text-black md:hidden flex condensed gap-4 justify-center text-xl w-auto'>
          <a
            href={`/listado/${params.filter}/${
              params.page == 0 ? '0' : parseInt(params.page) - 1
            }/${params.search}`}
          >
            Anterior
          </a>
          <a
            href={`/listado/${params.filter}/${
              posts.length !== 0 ? parseInt(params.page) + 1 : params.page
            }/${params.search}`}
          >
            Siguiente
          </a>
        </span>
      </div>

      <article className='flex md:flex-row flex-col justify-start relative h-full w-full md:mt-16 bg-slate-800'>
        <aside
          className={`md:w-[30%] h-fit bg-slate-800 md:flex flex-col py-8 ${
            aside ? 'flex w-full' : 'hidden'
          }`}
        >
          <span className='text-white hidden md:flex condensed gap-4 justify-center text-xl'>
            <a
              href={`/listado/${params.filter}/${
                params.page == 0 ? '0' : parseInt(params.page) - 1
              }/${params.search}`}
            >
              Anterior
            </a>
            <span className='condensed'>PÁGINA</span>
            <a
              href={`/listado/${params.filter}/${
                posts.length !== 0 ? parseInt(params.page) + 1 : params.page
              }/${params.search}`}
            >
              Siguiente
            </a>
          </span>
          <ul className='flex flex-col p-8 gap-4 text-md w-full'>
            {categories.map((category) => (
              <li
                className='bg-slate-100 px-2 p-1 rounded-sm'
                key={category.nombre}
              >
                <a
                  href={
                    `/listado/categoria-${category.nombre}/` +
                    params.page +
                    '/&text=&category='
                  }
                >
                  {category.nombre}
                </a>
              </li>
            ))}
            <li className='flex flex-col gap-2 bg-slate-100 p-5 rounded-sm'>
              <span className='condensed '>Precio Máximo (USD)</span>
              <span className='bg-green-200 px-2 flex w-full'>
                $
                <input
                  className='rounded-sm px-1 bg-slate-300 mx-2 w-full'
                  id='price_text_input'
                  type='text'
                  value={price}
                  onChange={() => handlePriceChangeByText()}
                />
              </span>
              <a
                href={
                  '/listado/precio-' +
                  price +
                  '/' +
                  params.page +
                  '/&text=&category='
                }
                className='text-md'
              >
                BUSCAR
              </a>

              <input
                id='price_range_slider'
                type='range'
                min={0}
                max={1000000}
                value={price}
                onChange={() => handlePriceChange()}
              />
            </li>
            <li className='flex flex-col gap-2 bg-slate-100 p-5 rounded-sm'>
              <span className='condensed text-2xl'>Ordenar Por</span>
              <a href={`/listado/precio-menor/${params.page}/&text=&category=`}>
                Precio Más Bajo
              </a>
              <a href={`/listado/precio-mayor/${params.page}/&text=&category=`}>
                Precio Más Alto
              </a>
              <a
                href={`/listado/fecha-reciente/${params.page}/&text=&category=`}
              >
                Más Reciente
              </a>
              <a
                href={`/listado/fecha-antiguo/${params.page}/&text=&category=`}
              >
                Menos Reciente
              </a>
            </li>
          </ul>
        </aside>
        <section className='md:w-[70%] w-full left-[30%] bg-white'>
          {posts.length !== 0 ? (
            posts.map((building) => (
              <List
                key={building.id}
                titulo={building.titulo}
                descripcion={building.descripcion}
                imagen={'/' + building.imagen}
                idPropiedad={building.id}
                precio={building.precio}
              />
            ))
          ) : (
            <div className='mt-16 flex justify-center items-center text-3xl'>
              "No hay más publicaciones"
            </div>
          )}
        </section>
      </article>
    </main>
  );
};
