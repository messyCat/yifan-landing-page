// 全局图片缓存管理器
import { debugLog } from '../config/debug';

class ImageCacheManager {
  private cache = new Map<string, HTMLImageElement>();
  private loading = new Set<string>();

  // 预加载图片并存储到缓存
  async preloadImage(url: string): Promise<HTMLImageElement> {
    // 如果已经在缓存中，直接返回
    if (this.cache.has(url)) {
      debugLog.imagePreload('🎯 [ImageCache] 图片已在缓存中:', url);
      return this.cache.get(url)!;
    }

    // 如果正在加载，等待加载完成
    if (this.loading.has(url)) {
      debugLog.imagePreload('⏳ [ImageCache] 图片正在加载，等待中:', url);
      return new Promise((resolve, reject) => {
        const checkInterval = setInterval(() => {
          if (this.cache.has(url)) {
            clearInterval(checkInterval);
            resolve(this.cache.get(url)!);
          } else if (!this.loading.has(url)) {
            clearInterval(checkInterval);
            reject(new Error('图片加载失败'));
          }
        }, 50);
      });
    }

    // 开始加载新图片
    debugLog.imagePreload('📥 [ImageCache] 开始预加载图片:', url);
    this.loading.add(url);

    return new Promise((resolve, reject) => {
      const img = new Image();
      
      // 设置重要的属性以确保缓存工作
      img.crossOrigin = 'anonymous';
      img.decoding = 'async';
      
      const startTime = performance.now();

      img.onload = () => {
        const loadTime = Math.round(performance.now() - startTime);
        debugLog.imagePreload('✅ [ImageCache] 图片预加载成功:', {
          url,
          loadTime: `${loadTime}ms`,
          dimensions: `${img.naturalWidth}x${img.naturalHeight}`,
          cached: loadTime < 10 ? '可能来自缓存' : '新下载'
        });

        // 存储到缓存
        this.cache.set(url, img);
        this.loading.delete(url);
        resolve(img);
      };

      img.onerror = () => {
        const loadTime = Math.round(performance.now() - startTime);
        debugLog.error('❌ [ImageCache] 图片预加载失败:', {
          url,
          loadTime: `${loadTime}ms`
        });
        
        this.loading.delete(url);
        reject(new Error(`Failed to load image: ${url}`));
      };

      // 开始加载
      img.src = url;
    });
  }

  // 获取缓存的图片
  getCachedImage(url: string): HTMLImageElement | undefined {
    return this.cache.get(url);
  }

  // 检查图片是否已缓存
  isCached(url: string): boolean {
    return this.cache.has(url);
  }

  // 检查图片是否正在加载
  isLoading(url: string): boolean {
    return this.loading.has(url);
  }

  // 清理缓存
  clearCache(): void {
    debugLog.imagePreload('🗑️ [ImageCache] 清理图片缓存');
    this.cache.clear();
    this.loading.clear();
  }

  // 获取缓存统计
  getStats() {
    return {
      cachedCount: this.cache.size,
      loadingCount: this.loading.size,
      cachedUrls: Array.from(this.cache.keys())
    };
  }
}

// 导出全局单例
export const imageCache = new ImageCacheManager();

// 便捷函数
export const preloadImages = async (urls: string[]): Promise<HTMLImageElement[]> => {
  debugLog.imagePreload('🚀 [ImageCache] 批量预加载图片:', { count: urls.length, urls });
  
  const promises = urls.map(url => imageCache.preloadImage(url));
  const results = await Promise.allSettled(promises);
  
  const successful = results.filter(r => r.status === 'fulfilled').length;
  const failed = results.filter(r => r.status === 'rejected').length;
  
  debugLog.imagePreload('🎉 [ImageCache] 批量预加载完成:', {
    总数: urls.length,
    成功: successful,
    失败: failed,
    成功率: `${Math.round((successful / urls.length) * 100)}%`
  });

  return results
    .filter((r): r is PromiseFulfilledResult<HTMLImageElement> => r.status === 'fulfilled')
    .map(r => r.value);
};