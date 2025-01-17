import React, { useEffect, useMemo } from 'react';

interface UseIntersectionOptions extends IntersectionObserverInit {
  onIntersect: (entry: IntersectionObserverEntry) => void;
  onLeave?: (entry: IntersectionObserverEntry) => void;
}

export function useIntersection(
  targetRef: React.RefObject<HTMLElement>,
  { onIntersect, onLeave, ...observerOptions }: UseIntersectionOptions
) {
  const observerRef = useMemo(
    () =>
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect(entry);
          } else {
            onLeave?.(entry);
          }
        });
      }, observerOptions),
    [onIntersect, onLeave, observerOptions]
  );

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    observerRef.observe(element);

    return () => {
      observerRef.disconnect();
    };
  }, [targetRef, observerRef]);
}
