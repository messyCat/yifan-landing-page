/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // 颜色系统 - 继承现有设计系统
            colors: {
                // 设计系统核心颜色
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // 保留原有的颜色系统
                orange: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    500: '#f97316',
                    600: '#ea580c',
                    700: '#c2410c',
                },
                blue: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                },
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    400: '#9ca3af',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                },
                green: {
                    600: '#16a34a',
                },
                black: '#000000',
                white: '#ffffff',
            },
            // 边框半径
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            // 自定义最小高度 - 保留现有设计
            minHeight: {
                '522': '522px',
            },
            // 自定义过渡时间
            transitionDuration: {
                '50': '50ms',
            },
            // 自定义 letter-spacing
            letterSpacing: {
                'tighter': '-0.2em',
                'tight': '-0.1em',
                'normal': '0em',
                'wide': '0.1em',
                'wider': '0.2em',
                'widest': '0.4em',
            },
            // 自定义容器尺寸
            maxWidth: {
                '3xl': '48rem',
                '4xl': '56rem',
                '7xl': '80rem',
            },
            // 自定义 line-height
            lineHeight: {
                'normal': '1',
                'wide': '1.05',
            },
            // Chart 颜色 - 保留现有图表配色
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    safelist: [
        "bg-orange-100",
        "text-orange-700"
    ],
    plugins: [],
}

/* 配置说明
safelist：允许使用 Tailwind CSS 的类，即使它们不在您的 CSS 中定义。【避免动态className被treeshaking掉】
*/