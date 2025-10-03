# Debug 模式控制说明

## 🎛️ 全局 Debug 配置

我已经为项目添加了一个全局的 debug 模式控制系统，可以精确控制不同类型的日志输出。

### 📁 新增文件

- **`/src/config/debug.ts`** - 全局 debug 配置文件

### 🔧 配置特性

#### 1. **智能默认配置**

- **开发环境**: 默认启用所有日志
- **生产环境**: 默认关闭所有日志
- **用户自定义**: 支持 localStorage 持久化配置

#### 2. **分类日志控制**

```typescript
{
  imagePreload: true,        // 图片预加载日志
  networkMonitor: true,      // 网络请求监控日志
  intersectionObserver: true, // 视口监测日志
  componentState: true,      // 组件状态变化日志
  enabled: true             // 全局开关（覆盖所有其他设置）
}
```

#### 3. **便捷的日志函数**

```typescript
debugLog.imagePreload("图片预加载信息");
debugLog.networkMonitor("网络请求信息");
debugLog.intersectionObserver("视口监测信息");
debugLog.componentState("组件状态信息");
debugLog.warn("警告信息");
debugLog.error("错误信息");
```

### 🎮 运行时控制

在开发环境下，可以通过浏览器控制台动态控制 debug 配置：

#### 完全关闭所有日志

```javascript
window.setDebugConfig({ enabled: false });
```

#### 只关闭图片预加载日志

```javascript
window.setDebugConfig({ imagePreload: false });
```

#### 只开启网络监控日志

```javascript
window.setDebugConfig({
  enabled: true,
  imagePreload: false,
  networkMonitor: true,
  intersectionObserver: false,
  componentState: false,
});
```

#### 查看当前配置

```javascript
window.debugConfig;
```

#### 恢复默认配置

```javascript
window.setDebugConfig({
  imagePreload: true,
  networkMonitor: true,
  intersectionObserver: true,
  componentState: true,
  enabled: true,
});
```

### 🎨 视觉指示器

debug 模式下，图片右上角会显示状态指示器：

- **蓝色脉冲点**: 正在预加载
- **绿色圆点**: 预加载完成

这些指示器只在 `debugConfig.enabled && debugConfig.imagePreload` 为 true 时显示。

### 💾 配置持久化

所有配置更改会自动保存到 localStorage，页面刷新后仍然有效。

### 🚀 使用示例

**开发时启用所有日志：**

```javascript
// 默认情况，无需额外配置
```

**生产环境性能测试（关闭大部分日志）：**

```javascript
window.setDebugConfig({
  enabled: true,
  imagePreload: false,
  networkMonitor: true, // 只保留网络监控
  intersectionObserver: false,
  componentState: false,
});
```

**完全静默模式：**

```javascript
window.setDebugConfig({ enabled: false });
```

**调试特定功能：**

```javascript
// 只调试图片预加载
window.setDebugConfig({
  enabled: true,
  imagePreload: true,
  networkMonitor: false,
  intersectionObserver: false,
  componentState: false,
});
```

现在你可以根据需要灵活控制日志输出，在开发时获得详细信息，在生产环境保持干净的控制台！
