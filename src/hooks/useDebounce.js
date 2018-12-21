// @flow

import { useEffect, useState } from 'react';

const useDebounce = (input: string, delay: number): string => {
  const [value, setValue] = useState(input);

  useEffect(
    () => {
      const timeout = setTimeout(() => {
        setValue(input);
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    },
    [input, delay]
  );

  return value;
};

export default useDebounce;
