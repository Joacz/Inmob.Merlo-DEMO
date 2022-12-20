import React from 'react';

export const TextArea = (props) => {
  return (
    <textarea
      id={props.Id}
      placeholder={props.placeHolder}
      className='enabled:outline-none h-48 normal text-lg px-2 rounded-lg shadow-xl w-full p-2 resize-none'
      {...props}
    />
  );
};
