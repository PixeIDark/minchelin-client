import React, { useEffect, useCallback, useRef } from 'react';

interface UseIntersectionOptions extends IntersectionObserverInit {
  onIntersect: (entry: IntersectionObserverEntry) => void;
  onLeave?: (entry: IntersectionObserverEntry) => void;
}

export function useIntersection(
  targetRef: React.RefObject<HTMLElement>,
  { onIntersect, onLeave, root = null, rootMargin = '0px', threshold = 0 }: UseIntersectionOptions
) {
  const observerRef = useRef<IntersectionObserver>();
  const callbackRef = useRef({
    onIntersect,
    onLeave,
  });

  useEffect(() => {
    callbackRef.current = { onIntersect, onLeave };
  }, [onIntersect, onLeave]);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callbackRef.current.onIntersect?.(entry);
      } else {
        callbackRef.current.onLeave?.(entry);
      }
    });
  }, []);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(handleObserver, {
      root,
      rootMargin,
      threshold,
    });

    observerRef.current.observe(element);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [targetRef, handleObserver, root, rootMargin, threshold]);
}
