import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/outline';
import { useCategories } from '../hooks/index';

export const Nav = (props) => {
  const [searchText, setSearchText] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [responsive, setResponsive] = useState(false);
  const links = props.links;

  const categories = useCategories();

  const handleResponsive = () => {
    setResponsive(!responsive);
  };

  const handleCategoryChange = (event) => {
    var value = event.target.value;
    setSearchCategory(value);
  };

  const handleTextChange = (event) => {
    var value = event.target.value;
    setSearchText(value);
  };

  return (
    <nav className='flex fixed px-2 items-center w-full h-16 z-[1000] bg-slate-100 top-0 left-0 '>
      <MenuIcon
        width={40}
        onClick={() => handleResponsive()}
        className='md:hidden flex z-[1000] select-none'
      />
      <div
        className={`Nav top-0 justify-start fixed gap-8 p-4 md:h-16 h-full left-0 w-[80%] md:w-[100%] z-[100] bg-slate-100 ${
          responsive ? 'flex' : 'hidden md:flex'
        } md:flex-row flex-col`}
      >
        <div className='flex gap-8 justify-start px-4 items-center w-full mt-16  md:mt-0  md:w-1/2 md:flex-row flex-col'>
          <a
            href='/'
            className='w-auto display text-2xl font-semibold text-slate-500'
          >
            {props.brand}
          </a>
          <div className='w-[100%] flex rounded-md bg-white'>
            <a
              className='px-2 hover:bg-blue-100 flex justify-center items-center  rounded-md'
              href={`/listado/search/0/&text=${searchText}&category=${searchCategory}`}
            >
              <SearchIcon width={20} />
            </a>
            <input
              onChange={handleTextChange}
              value={searchText}
              className='p-1 w-[100%]'
              type='search'
              placeholder='Buscar'
            />
            <select
              className='px-2 rounded-md enabled:outline-none'
              name='categoria'
              id='categoria'
              onChange={handleCategoryChange}
              value={searchCategory}
            >
              <option value=''>Categoria</option>
              {categories.map((cat) => (
                <option value={cat.nombre}>{cat.nombre}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='flex gap-8 px-4 justify-center items-center'>
          <ul className='flex justify-evenly w-full gap-8 text-lg text-slate-500 md:flex-row flex-col'>
            {links.map((link) => (
              <li
                key={link.href}
                className='flex text-center md:justify-center items-center'
              >
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
