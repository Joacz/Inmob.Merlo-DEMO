import React, { useState } from 'react';
import { Nav } from '../components';
import jsonLinks from '../assets/json/links.json';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
  const links = jsonLinks.links;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [sending, setSending] = useState('');

  const sendEmail = async (e) => {
    try {
      setSending('Enviando correo, por favor espere un momento...');
      await axios.post('http://192.168.40.100:8080/api/email/send', e);
      await navigate(-1);
    } catch {
      setSending('Error al enviar el correo');
    }
  };

  return (
    <main className='w-full flex lg:flex-row flex-col justify-center items-start background-img'>
      <Nav links={links} brand='MENLO' />
      <div className='bg-opacity-60 backdrop-blur-sm rounded-sm shadow-xl text-xl mt-32 p-4 m-4 flex flex-col gap-6 lg:w-2/5 justify-center items-center bg-slate-50'>
        <h1 className='text-5xl text-slate-700 normal font-medium'>
          CONTACTAR
        </h1>

        <form
          onSubmit={handleSubmit(sendEmail)}
          action='/'
          className='bg-slate-800 text-slate-100 p-8 rounded-sm flex flex-col gap-8 justify-center items-center'
        >
          <div className='flex flex-col gap-4 w-full'>
            <h2 className='text-center condensed text-2xl text-green-700'>
              {sending}
            </h2>
            <span className=' display text-center'>INGRESE SUS DATOS</span>
            <div className='flex justify-center gap-2 w-full '>
              <div className='flex flex-col justify-center items-center gap-2 w-full '>
                <input
                  type='text'
                  className='normal text-lg px-2 rounded-lg shadow-xl w-full p-2'
                  placeholder='Correo'
                  id='from'
                  {...register('from', {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                {errors.from && (
                  <p className='condensed text-red-700'>
                    Por favor proveer un correo válido.
                  </p>
                )}
              </div>
              <div className=' w-full flex flex-col justify-center items-center gap-2'>
                <input
                  type='text'
                  className='normal text-lg px-2 rounded-lg shadow-xl w-full p-2'
                  placeholder='Nombre y Apellido'
                  id='name'
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <p className='condensed text-red-700'>
                    Por favor proveer un Nombre.
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <div className='w-full flex flex-col justify-center items-center gap-2'>
              <span className='display text-center'>
                DETALLES DE LA CONSULTA
              </span>
              <input
                type='text'
                className='w-full normal text-lg px-2 rounded-lg shadow-xl p-2 font-bold'
                placeholder='Asunto'
                id='subject'
                {...register('subject', { required: true })}
              />
              {errors.subject && (
                <p className='condensed text-red-700'>Se necesita un Asunto</p>
              )}
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <textarea
                className='w-full enabled:outline-none resize-none normal text-lg px-2 rounded-lg shadow-xl p-2 h-52'
                placeholder='Detalles'
                id='details'
                {...register('details', { required: true })}
              />
              {errors.details && (
                <p className='condensed text-red-700'>
                  Escriba los detalles del mensaje
                </p>
              )}
            </div>
          </div>
          <button
            type='submit'
            className='hover:text-white hover:bg-green-900 bg-green-600 w-full text-center px-4 py-1 rounded-lg text-2xl text-white'
          >
            Enviar
          </button>
          <div className='flex text-lg w-full'>
            <p className='condensed'>
              Todas tus consultas serán enviadas al correo{' '}
              <mark className='condensed'>menlo.inomobiliaria@demo.com.ar</mark>{' '}
              y revisados en un período de 1 a 4 días. Si necesita atención
              INMEDIATA le recomendamos que nos llame al telefono{' '}
              <mark className='condensed'>+54 300 399 1234</mark>
            </p>
          </div>
        </form>
      </div>
      <div className='bg-opacity-60 backdrop-blur-sm rounded-sm shadow-xl text-xl mt-32 p-4 m-4 flex flex-col gap-6 lg:w-3/5 justify-center items-center bg-slate-50'>
        <div className='bg-slate-800 p-8'>
          <h1 className='text-5xl w-full z-30 mix-blend-difference text-white'>
            INMOBILIARIA MENLO
          </h1>
          <p className='z-30 mix-blend-difference text-white'>
            Brindamos el mejor servicio inmobiliario de la Argentina, desde hace
            más de 100 años. Nosotros queremos que vos seas el que nos diga qué
            hacer para mejorar, por eso, podés contactarnos, tenemos un servicio
            las 24 horas del día dedicado a las llamadas telefónicas y los
            correos de los usuarios y clientes de Menlo Inmobiliaria
          </p>
        </div>
        <div className='bg-slate-800 p-8 w-full'>
          <h1 className='text-5xl z-30 mix-blend-difference text-white'>
            ¿CÓMO NOS MANEJAMOS?
          </h1>
          <p className='z-30 mix-blend-difference text-white'>
            Nuestro servicio es tanto on-line como en persona. Si desea hacer
            una compra en línea tendrá que comunicarse via WhatsApp, Email o
            Teléfono. Puede hacer el pago a través de Rapipago, Mercado Pago, o
            transferencia bancaria. Nuestro servicio está respaldado como uno de
            los más seguros del país. Si desea hacerlo en persona, se puede
            acercar a nuestro local.
          </p>
        </div>{' '}
        <div className='bg-slate-800 p-8 w-full'>
          <h1 className='text-5xl z-30 mix-blend-difference text-white'>
            REALIZAMOS ENVÍOS
          </h1>
          <p className='z-30 mix-blend-difference text-white'>
            Realizamos el envío de tus materiales a todo el país. Si compraste
            materiales de construcción y deseás que los enviemos a tu domicilio,
            enviamos un camión con los materiales.
          </p>
        </div>
      </div>
    </main>
  );
};
