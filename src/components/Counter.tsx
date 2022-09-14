import React, {useState} from 'react';
import './style.scss'

const Counter = () => {
  const [state, setState] = useState(0)

  const hancldeClick = () => {
    setState((count)=> count + 1)
  }

  return (
    <div className='wrapper'>
      <div className='count'>{state}</div>
      <button className="inc" onClick={hancldeClick}>+</button>
    </div>
  );
};

export default Counter;