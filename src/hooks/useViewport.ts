import { useState } from 'react';

import useMount from '@hooks/useMount';

export interface IViewPort {
  width: number;
  height: number;
}

const useViewport = (): IViewPort => {
  const [viewport, setViewport] = useState<IViewPort>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useMount(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setViewport({ width, height });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return viewport;
};

export default useViewport;
