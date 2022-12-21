import React from 'react';

export const InputText = (props) => {
  return (
    <input
      type='text'
      className='normal text-lg px-2 rounded-lg shadow-xl w-full p-2 h-10'
      placeholder={props.placeHolder}
      id={props.Id}
      {...props}
    />
  );
};
