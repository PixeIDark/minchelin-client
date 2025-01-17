import React, { useEffect, useCallback } from 'react';

export function useIntersection(
  targetRef: React.RefObject<HTMLElement>,
  onIntersect: () => void,
  enabled = true,
  options = { threshold: 0.1 }
) {
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && enabled) {
        onIntersect();
      }
    },
    [onIntersect, enabled]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
    const element = targetRef.current;

    if (!element) return;
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [targetRef, handleObserver, options]);
}
