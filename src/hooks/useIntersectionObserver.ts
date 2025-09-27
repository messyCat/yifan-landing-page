import { useEffect, useRef, useState } from 'react';
import { debugLog } from '../config/debug';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0, rootMargin = '200px' } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      debugLog.intersectionObserver('🔍 [Intersection Observer] 等待元素挂载...');
      return;
    }

    debugLog.intersectionObserver('👁️ [Intersection Observer] 开始监测元素', {
      threshold,
      rootMargin,
      element: element.tagName + (element.id ? `#${element.id}` : '')
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        const intersectionRatio = Math.round(entry.intersectionRatio * 100);
        
        debugLog.intersectionObserver('📍 [Intersection Observer] 可见性变化:', {
          isVisible,
          intersectionRatio: `${intersectionRatio}%`,
          hasIntersected,
          boundingRect: {
            top: Math.round(entry.boundingClientRect.top),
            bottom: Math.round(entry.boundingClientRect.bottom)
          }
        });
        
        setIsIntersecting(isVisible);
        
        // 一旦进入过视口就标记为true，不再变回false
        if (isVisible && !hasIntersected) {
          debugLog.intersectionObserver('✨ [Intersection Observer] 第一次进入视口！触发预加载');
          setHasIntersected(true);
        }
      },
      {
        threshold,
        rootMargin, // 提前200px开始预加载
      }
    );

    observer.observe(element);

    return () => {
      debugLog.intersectionObserver('📋 [Intersection Observer] 停止监测');
      observer.disconnect();
    };
  }, [threshold, rootMargin, hasIntersected]);

  return {
    elementRef,
    isIntersecting,
    hasIntersected,
  };
}