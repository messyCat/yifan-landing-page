import { useEffect, useState } from 'react';
import { imageCache, preloadImages } from '../utils/imageCache';
import { debugLog } from '../config/debug';

interface PreloadOptions {
  delay?: number; // 延迟开始预加载的时间（毫秒）
  priority?: 'low' | 'high'; // 预加载优先级
  enabled?: boolean; // 是否启用预加载
}

export function useImagePreloader(
  imageUrls: string[],
  options: PreloadOptions = {}
) {
  const { delay = 0, priority = 'low', enabled = true } = options;
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isPreloading, setIsPreloading] = useState(false);

  useEffect(() => {
    if (!imageUrls.length || !enabled) {
      debugLog.imagePreload('📸 [图片预加载] 条件不满足:', {
        imageUrls: imageUrls.length,
        enabled,
        reason: !imageUrls.length ? '没有图片URL' : !enabled ? '预加载未启用' : '未知'
      });
      return;
    }

    debugLog.imagePreload('🚀 [图片预加载] 开始预加载', {
      imageCount: imageUrls.length,
      images: imageUrls,
      priority,
      delay: `${delay}ms`,
      cacheStats: imageCache.getStats()
    });

    const performPreload = async () => {
      debugLog.imagePreload('⏳ [图片预加载] 进入预加载阶段');
      setIsPreloading(true);
      
      try {
        await preloadImages(imageUrls);
        
        // 更新已加载的图片集合
        const newLoadedImages = new Set<string>();
        imageUrls.forEach(url => {
          if (imageCache.isCached(url)) {
            newLoadedImages.add(url);
          }
        });
        
        setLoadedImages(newLoadedImages);
        
      } catch (error) {
        debugLog.error('❌ [图片预加载] 预加载过程中出错:', error);
      } finally {
        setIsPreloading(false);
      }
    };
      
    // 使用 requestIdleCallback 在浏览器空闲时预加载
    const schedulePreload = () => {
      if ('requestIdleCallback' in window) {
        debugLog.imagePreload(`⏰ [图片预加载] 使用 requestIdleCallback，延迟 ${delay}ms 开始`);
        requestIdleCallback(() => {
          debugLog.imagePreload('💤 [图片预加载] 浏览器空闲，开始执行预加载');
          setTimeout(performPreload, delay);
        }, { timeout: 5000 }); // 5秒超时
      } else {
        debugLog.imagePreload(`⏰ [图片预加载] 降级使用 setTimeout，延迟 ${delay + 16}ms 开始`);
        // 降级方案：使用 setTimeout
        setTimeout(performPreload, delay + 16); // 16ms 约等于一帧
      }
    };

    schedulePreload();
  }, [imageUrls, delay, priority, enabled]);

  return {
    loadedImages,
    isPreloading,
    isImageLoaded: (url: string) => imageCache.isCached(url),
    getPreloadedImage: (url: string) => imageCache.getCachedImage(url),
    preloadedCount: loadedImages.size,
    cacheStats: imageCache.getStats(),
  };
}