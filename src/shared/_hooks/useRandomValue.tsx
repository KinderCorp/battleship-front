import { useEffect, useState } from 'react';

/**
 * Allows to have a random value without having a difference error between the client and the server.
 *
 * @param {any} randomValue Random value
 * @return {any}
 */
const useRandomValue = (randomValue: any): any => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(randomValue);
  }, [randomValue]);

  return value;
};

export default useRandomValue;
