import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
  const [resolved, setResolved] = useState(null);

  useEffect(() => {
    const process = async () => {
      try {
        const resolved = await promiseCreator();
        setResolved(resolved.data.articles);
      } catch (e) {
        console.log(e);
      }
    };
    process();
  }, [deps]);

  return [resolved];
}
