import { useEffect } from 'react';

const useMount = (effect: () => void) => {
  return useEffect(() => {
    return () => {
      effect();
    };
    // eslint-disable-next-line
  }, []);
};

export default useMount;
