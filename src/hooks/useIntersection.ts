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
      typeof window !== 'undefined'
        ? new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                onIntersect(entry);
              } else {
                onLeave?.(entry);
              }
            });
          }, observerOptions)
        : null,
    [onIntersect, onLeave, observerOptions]
  );

  useEffect(() => {
    const element = targetRef.current;
    const observer = observerRef;

    if (!element || !observer) return;

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [targetRef, observerRef]);
}
