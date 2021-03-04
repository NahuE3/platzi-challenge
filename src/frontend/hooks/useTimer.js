import { useEffect, useState } from "react";

const getTime = ({ time, type }) => {
  const aux = time.split(".");
  if (type === 'hours') {
    return parseInt(aux[0], 10);
  }
  if (type === 'minutes') {
    return parseInt(aux[1], 10);
  }
  return 0;
}

const useTimer = ({ time }) => {
  const [active, setActive] = useState(false);
  const [hours, setHours] = useState(getTime({ time, type: 'hours' }) || 0);
  const [minutes, setMinutes] = useState(getTime({ time, type: 'minutes' }) || 0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!active) return;
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(myInterval);
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return { hours, minutes, seconds, setActive };
}

export default useTimer;