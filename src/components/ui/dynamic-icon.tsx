import React from "react";
import {
  Languages,
  Mic,
  Globe,
  CheckCircle,
  Award,
  Users,
  Zap,
  Target,
  LucideIcon,
  // 可以根据需要添加更多图标
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Star,
  Heart,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Download,
  Upload,
  Settings,
  User,
  Lock,
  Eye,
  EyeOff,
  Trophy,
} from "lucide-react";

// 图标映射对象 - 只会打包这里显式导入的图标
export const iconMap: Record<string, LucideIcon> = {
  // 服务相关图标
  Languages: Languages,
  Mic: Mic,
  Globe: Globe,
  CheckCircle: CheckCircle,
  Award: Award,
  Users: Users,
  Zap: Zap,
  Target: Target,
  Trophy: Trophy,

  // 常用UI图标
  Mail: Mail,
  Phone: Phone,
  MapPin: MapPin,
  Calendar: Calendar,
  Clock: Clock,
  Star: Star,
  Heart: Heart,
  Search: Search,
  Menu: Menu,
  X: X,
  ChevronDown: ChevronDown,
  ChevronUp: ChevronUp,
  ChevronLeft: ChevronLeft,
  ChevronRight: ChevronRight,
  ArrowRight: ArrowRight,
  ArrowLeft: ArrowLeft,
  Download: Download,
  Upload: Upload,
  Settings: Settings,
  User: User,
  Lock: Lock,
  Eye: Eye,
  EyeOff: EyeOff,
};

// 获取可用图标名称列表
export const getAvailableIcons = () => Object.keys(iconMap);

// 动态图标组件
export interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  className = "",
  size,
  color,
  strokeWidth,
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        `Icon '${name}' not found in iconMap. Available icons: ${getAvailableIcons().join(
          ", "
        )}`
      );
    }
    return null;
  }

  return (
    <IconComponent
      className={className}
      size={size}
      color={color}
      strokeWidth={strokeWidth}
    />
  );
};

export default DynamicIcon;
