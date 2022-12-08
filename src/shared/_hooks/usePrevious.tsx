import { useEffect, useRef } from 'react';

/**
 * Allows to recover the previous state of a state.
 *
 * @param {any} value Value of the state
 * @return {any}
 */
const usePrevious = (value: any): any => {
  const ref = useRef<any | null>(null);

  useEffect(() => {
    if (ref) ref.current = value;
  });

  return ref.current;
};

export default usePrevious;
