import {useState} from 'react';

const Error = ({mensaje}) => {
  return (
    <div className=' bg-red-600 text-white uppercase text-center font-bold p-1 mb-5 rounded-md animate-bounce'> 
    <p>{mensaje}</p>
    </div>
  )
};

export default Error;
