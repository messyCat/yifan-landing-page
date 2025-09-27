// 网络请求监控工具
import { debugLog } from '../config/debug';

class NetworkMonitor {
  private imageRequests: Map<string, { count: number; timestamps: number[]; sources: string[] }> = new Map();

  constructor() {
    this.init();
  }

  private init() {
    // 监控所有图片请求
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const [url] = args;
      if (typeof url === 'string' && this.isImageUrl(url)) {
        this.recordRequest(url, 'fetch');
      }
      return originalFetch.apply(window, args);
    };

    // 监控 Image 对象请求
    const originalImage = window.Image;
    window.Image = class extends originalImage {
      constructor(width?: number, height?: number) {
        super(width, height);
        
        const originalSrcSetter = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src')?.set;
        if (originalSrcSetter) {
          Object.defineProperty(this, 'src', {
            set: function(value: string) {
              if (value && NetworkMonitor.instance.isImageUrl(value)) {
                NetworkMonitor.instance.recordRequest(value, 'Image');
              }
              originalSrcSetter.call(this, value);
            },
            get: function() {
              return this.getAttribute('src') || '';
            }
          });
        }
      }
    };

    debugLog.networkMonitor('🔍 [NetworkMonitor] 网络监控已启动');
  }

  private isImageUrl(url: string): boolean {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.ico'];
    const urlLower = url.toLowerCase();
    return imageExtensions.some(ext => urlLower.includes(ext)) || 
           url.includes('image') || 
           url.includes('photo') ||
           url.includes('picture');
  }

  private recordRequest(url: string, source: string) {
    const current = this.imageRequests.get(url) || { count: 0, timestamps: [], sources: [] };
    current.count++;
    current.timestamps.push(Date.now());
    current.sources.push(source);
    
    this.imageRequests.set(url, current);

    debugLog.networkMonitor(`🌐 [NetworkMonitor] 图片请求:`, {
      url: url.substring(url.lastIndexOf('/') + 1), // 只显示文件名
      fullUrl: url,
      count: current.count,
      source,
      isRepeated: current.count > 1,
      previousSources: current.sources.slice(0, -1)
    });

    // 如果是重复请求，发出警告
    if (current.count > 1) {
      debugLog.warn(`⚠️ [NetworkMonitor] 重复图片请求 (第${current.count}次):`, {
        url: url.substring(url.lastIndexOf('/') + 1),
        sources: current.sources,
        timestamps: current.timestamps.map(t => new Date(t).toLocaleTimeString())
      });
    }
  }

  // 获取请求统计
  getStats() {
    const stats = {
      totalUrls: this.imageRequests.size,
      totalRequests: 0,
      repeatedRequests: 0,
      details: [] as any[]
    };

    this.imageRequests.forEach((data, url) => {
      stats.totalRequests += data.count;
      if (data.count > 1) {
        stats.repeatedRequests++;
      }
      
      stats.details.push({
        url: url.substring(url.lastIndexOf('/') + 1),
        fullUrl: url,
        count: data.count,
        sources: data.sources,
        isRepeated: data.count > 1
      });
    });

    return stats;
  }

  // 打印完整报告
  printReport() {
    const stats = this.getStats();
    debugLog.group('📊 [NetworkMonitor] 图片请求报告');
    debugLog.networkMonitor('总体统计:', {
      唯一图片数量: stats.totalUrls,
      总请求次数: stats.totalRequests,
      重复请求的图片: stats.repeatedRequests,
      缓存命中率: `${Math.round((1 - stats.repeatedRequests / stats.totalUrls) * 100)}%`
    });
    
    debugLog.networkMonitor('详细信息:', stats.details);
    
    const repeatedRequests = stats.details.filter(d => d.isRepeated);
    if (repeatedRequests.length > 0) {
      debugLog.warn('🚨 需要优化的重复请求:', repeatedRequests);
    }
    
    debugLog.groupEnd();
  }

  // 清除记录
  clear() {
    this.imageRequests.clear();
    debugLog.networkMonitor('🗑️ [NetworkMonitor] 请求记录已清除');
  }

  static instance = new NetworkMonitor();
}

// 导出单例和便捷函数
export const networkMonitor = NetworkMonitor.instance;

export const printNetworkReport = () => networkMonitor.printReport();
export const clearNetworkStats = () => networkMonitor.clear();