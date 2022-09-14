import React, {useState} from 'react';
import cl from './style.module.scss'

const Counter = () => {
  const [state, setState] = useState(0)

  const hancldeClick = () => {
    setState((count)=> count + 1)
  }

  return (
    <div>
      <div className='count'>{state}</div>
      <button className={cl.inc} onClick={hancldeClick}>+</button>
    </div>
  );
};

export default Counter;