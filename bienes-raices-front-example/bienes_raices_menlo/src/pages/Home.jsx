import { Card, Nav } from '../components/index';
import menlo from '/img/menlo.jpg';
import instagram from '/img/instagram.png';
import facebook from '/img/facebook.png';
import twitter from '/img/twitter.png';
import whatsapp from '/img/whatsapp.png';
import React from 'react';
import {useBuildings} from '../hooks/index';
import '../assets/css/Home.css';
import jsonLinks from '../assets/json/links.json';

export const Home = () => {
  const links = jsonLinks.links;
  
  const posts = useBuildings(
    'http://192.168.40.100:8080/api/propiedades/fecha/reciente?page=' + 0
  );

  return (
    <main className='w-full text-justify'>
      <Nav links={links} brand='MENLO' />
      <div className='title-container relative shadow-xl'>
        <div className='bg-slate-800 p-8 bg-opacity-80 shadow-xl'>
          <h1 className='text-8xl mix-blend-difference'>INMOBILIARIA MENLO</h1>
          <div className='flex gap-4 flex-col'>
            <span className='mix-blend-difference display subtitle'>
              Construcciones y Escrituras.
            </span>
            <span className='mix-blend-difference display subtitle'>
              El mejor servicio en la Argentina.
            </span>
          </div>
          <div className='background-img top-0 -z-50 left-0 absolute w-full h-full' />
        </div>
      </div>
      <article className='products my-10 flex flex-col gap-10'>
        <h2 className='text-6xl mb-10'>ARTÍCULOS EN VENTA</h2>
        <section className='cards gap-10'>
          {posts.slice(0, 6).map((building) => (
            <Card
              key={building.id}
              imagen={building.imagen}
              titulo={building.titulo}
              ubicacion={building.ubicacion}
              detalles={building.descripcion}
              idPropiedad={building.id}
            />
          ))}
        </section>
        <a
          href='/listado/fecha-reciente/0/&text=&category='
          className='text-4xl'
        >
          Ver Más...
        </a>
        <h2 className='text-6xl mt-16 mb-4' id='about'>
          SOBRE NOSOTROS
        </h2>
        <section className='w-4/5 gap-8 flex flex-col items-center justify-center text-xl section-about'>
          <div className='grid grid-cols-2 w-[80%] p-8 about-container'>
            <p className='mr-2'>
              Somos una Inmobiliaria ubicada en la ciudad de Rosario, provincia
              de Santa Fe. Nos dedicamos a la venta de inmuebles mayormente de
              lujo y grandes terrenos. Tenemos una experiencia de más de 100
              años en la venta de inmuebles, y la fabricación de artículos de
              construcción.
            </p>
            <p>
              Vendemos artículos de alta calidad, enfocados en darle lo mejor al
              cliente. Contamos con sucursales en todo el país. Nuestro objetivo
              es expandirnos de forma internacional. Nuestra cuna siempre será
              la Argentina.
            </p>
          </div>
          <div className=' gap-8  w-[80%] p-8 about-container'>
            <img
              src={menlo}
              alt='menlo'
              className='h-96 m-4 float-right mr-2 object-cover rounded-sm'
            />
            <p>
              En el 1920 <strong>Charlli Alberti Menlo</strong> construyó esta
              inmobiliaria desde cero con el sueño de llegar a donde hoy no
              encontramos, ofreciendo la mejor calidad en ventas de inmueble en
              todo Rosario, Santa Fe y la Argentina entera. Todo esto desde la
              visión de darle lo mejor al cliente. Charlli Alberti Menlo dedicó
              34 años de su vida en la creación de esta empresa, empezando con
              una pequeña propiedad en Rosario, junto a su esposa. Nuestra
              visión sigue siendo la misma. desde 1920.
            </p>
            <p>
              En el año 1932, Charlli Alberti Menlo funda la sucursal que
              tenemos el día de hoy. Logró recaudar varias propiedades a lo
              largo del país, para este entonces contaba con sucursales en Santa
              Fe Capital, Rosario, la provincia de Córdoba y Buenos Aires.
            </p>
            <p>
              En el año 1973, Charlli Alberti Menlo fallece... Dejando una de
              las inmobiliarias más grandes del país en manos de su hijo José
              Hernan Menlo, a los 20 años, el cual decide seguir expandiendo la
              empresa. En 20 años logra expandirla a casi todo el país, hoy en
              día ésta expansión sigue. Desde siempre con la misma visión,
              brindar el mejor servicio inmobiliario, en todo el país, para
              todos los Argentinos y Argentinas.
            </p>
          </div>
        </section>
        <h2 className='text-6xl mt-16 mb-4' id='location'>
          ¿DÓNDE ESTAMOS?
        </h2>
        <section className='flex flex-col justify-center items-center gap-8 w-[90%]'>
          <p className='condensed text-2xl'>
            Nos encontramos en Rosario, calle Santa Fe 1323
          </p>
          <div>
            <iframe
              className='rounded-xl md:w-[800px] h-[500px] w-full'
              frameborder='0'
              src='https://www.bing.com/maps/embed?h=600&w=800&cp=-32.944743127094895~-60.64103364944458&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8'
              scrolling='no'
            ></iframe>
          </div>
        </section>
        <h2 className='text-6xl mt-16 mb-4' id='social'>
          NUESTRAS REDES
        </h2>
        <footer className='flex flex-col gap-8 p-4 text-center justify-center items-center border-slate-300 border bg-slate-100 py-20 w-full rounded-lg'>
          <div className='flex gap-8 md:flex-row flex-wrap justify-between px-4 items-center'>
            <a
              href=''
              className='flex justify-center items-center gap-4 text-xl'
            >
              <img className='w-12' src={whatsapp} alt='' />
              Whatsapp
            </a>
            <a
              href=''
              className='flex justify-center items-center gap-4 text-xl'
            >
              <img className='w-12' src={instagram} alt='' />
              Instagram
            </a>
            <a
              href=''
              className='flex justify-center items-center gap-4 text-xl'
            >
              <img className='w-12' src={facebook} alt='' />
              Facebook
            </a>
            <a
              href=''
              className='flex justify-center items-center gap-4 text-xl'
            >
              <img className='w-12' src={twitter} alt='' />
              Twitter
            </a>
          </div>
          <span className='condensed text-lg'>
            <strong className='condensed'>Derechos reservados a Joagz</strong> |
            Github:
            <a href='https://github.com/Joacz' className='text-indigo-500'>
              {' '}
              https://github.com/Joacz
            </a>{' '}
            | WhatsApp:
            <span className='text-green-800 condensed'> +54 3424680690</span> |
            <span className='condensed'>
              {' '}
              Menlo es una compañia ficticia, ninguna de la información
              publicada es veridica
            </span>
          </span>
        </footer>
      </article>
    </main>
  );
};
