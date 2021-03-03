const usePreparationTime = () => {
  const formatTime = ({ time }) => {
    const aux = time.split(".");
    if ((parseInt(aux[0]) <= 0) && (parseInt(aux[1]) <= 0)) {
      return `0 min`;
    } else if ((parseInt(aux[0]) > 0) && (parseInt(aux[1]) <= 0)) {
      return `${aux[0]} hr`;
    } else if ((parseInt(aux[0]) <= 0) && (parseInt(aux[1]) > 0)) {
      return `${aux[1]} min`;
    } else if ((parseInt(aux[0]) > 0) && (parseInt(aux[1]) > 0)) {
      return `${aux[0]} hr ${aux[1]} min`;
    }
    return `0 min`;
  };

  return { formatTime };
};

export default usePreparationTime;