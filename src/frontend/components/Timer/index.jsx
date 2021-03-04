import React from 'react';
import useTimer from '../../hooks/useTimer';

const Timer = () => {
  const { hours, minutes, seconds, setActive } = useTimer({ time: '2.40' });

  return (
    <div>
      {(hours !== 0 || minutes !== 0 || seconds !== 0) && (
        <>
          <h1>
            {' '}
            {hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <button type='button' onClick={() => setActive(true)}>Activar</button>
          <button type='button' onClick={() => setActive(false)}>Desactivar</button>
        </>
      )}
      {hours === 0 && minutes === 0 && seconds === 0 && (
        <h1>Finalizo el tiempo</h1>
      )}
    </div>
  );
};

export default Timer;
