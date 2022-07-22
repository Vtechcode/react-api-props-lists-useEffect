import React from 'react';
import './Saying.css'

const Saying = ({says}) => {
  return (
    <div className='info'>
      <h2 className='anime'>{says.anime}</h2>
      <h2 className='character'>{says.character}</h2>
      <h2 className='quote'>{says.quote}</h2>
    </div>
  );
}

export default Saying;
