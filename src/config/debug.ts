// 全局Debug配置
interface DebugConfig {
  // 图片预加载相关日志
  imagePreload: boolean;
  // 网络请求监控日志
  networkMonitor: boolean;
  // Intersection Observer日志
  intersectionObserver: boolean;
  // 组件状态变化日志
  componentState: boolean;
  // 全局开关（覆盖所有其他设置）
  enabled: boolean;
}

// 默认配置
const defaultConfig: DebugConfig = {
  imagePreload: true,
  networkMonitor: true,
  intersectionObserver: true,
  componentState: true,
  enabled: process.env.NODE_ENV === 'development', // 只在开发环境默认启用
};

// 从localStorage读取用户自定义配置
const getUserConfig = (): Partial<DebugConfig> => {
  try {
    const stored = localStorage.getItem('debug-config');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

// 合并配置
const config: DebugConfig = {
  ...defaultConfig,
  ...getUserConfig(),
};

// 导出调试配置
export const debugConfig = config;

// 便捷的日志函数
export const debugLog = {
  imagePreload: (...args: any[]) => {
    if (debugConfig.enabled && debugConfig.imagePreload) {
      console.log(...args);
    }
  },
  
  networkMonitor: (...args: any[]) => {
    if (debugConfig.enabled && debugConfig.networkMonitor) {
      console.log(...args);
    }
  },
  
  intersectionObserver: (...args: any[]) => {
    if (debugConfig.enabled && debugConfig.intersectionObserver) {
      console.log(...args);
    }
  },
  
  componentState: (...args: any[]) => {
    if (debugConfig.enabled && debugConfig.componentState) {
      console.log(...args);
    }
  },
  
  warn: (...args: any[]) => {
    if (debugConfig.enabled) {
      console.warn(...args);
    }
  },
  
  error: (...args: any[]) => {
    if (debugConfig.enabled) {
      console.error(...args);
    }
  },
  
  group: (label: string) => {
    if (debugConfig.enabled) {
      console.group(label);
    }
  },
  
  groupEnd: () => {
    if (debugConfig.enabled) {
      console.groupEnd();
    }
  }
};

// 提供运行时修改配置的方法
export const setDebugConfig = (newConfig: Partial<DebugConfig>) => {
  Object.assign(debugConfig, newConfig);
  
  // 保存到localStorage
  try {
    localStorage.setItem('debug-config', JSON.stringify(debugConfig));
    console.log('🔧 Debug配置已更新:', debugConfig);
  } catch (error) {
    console.warn('无法保存Debug配置到localStorage:', error);
  }
};

// 开发环境下暴露到全局，方便调试
if (process.env.NODE_ENV === 'development') {
  (window as any).setDebugConfig = setDebugConfig;
  (window as any).debugConfig = debugConfig;
  
  console.log('🐛 Debug模式已启用，可通过以下命令控制日志:');
  console.log('• window.setDebugConfig({ enabled: false }) - 关闭所有调试日志');
  console.log('• window.setDebugConfig({ imagePreload: false }) - 关闭图片预加载日志');
  console.log('• window.setDebugConfig({ networkMonitor: false }) - 关闭网络监控日志');
  console.log('• window.debugConfig - 查看当前配置');
}