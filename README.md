# 数字时钟展示项目

这是一个包含10种超级好看数字时钟样式的网页项目，使用 HTML + TailwindCSS + JavaScript 实现。

## 时钟样式预览

### 1. 霓虹发光复古风格 (clock1.html)
- 深色背景配霓虹色数字
- 数字带发光外晕效果
- 复古未来主义字体
- 彩色光晕和阴影动画

### 2. 极简现代扁平风格 (clock2.html)
- 纯白/浅灰背景
- 超细字体，大号数字显示
- 微妙的颜色变化动画
- 干净的几何分割线

### 3. 毛玻璃拟态风格 (clock3.html)
- 半透明毛玻璃卡片效果
- 渐变背景
- 柔和的阴影和高光
- 数字浮在玻璃面板上

### 4. 复古翻牌时钟 (clock4.html)
- 模拟机械翻牌效果
- 3D翻转动画
- 复古色彩搭配
- 逼真的翻页效果

### 5. 赛博朋克矩阵风格 (clock5.html)
- 绿色数字雨背景
- 故障效果动画
- 电路板纹理
- 科幻感HUD界面元素

### 6. 模拟-数字混合风格 (clock6.html)
- 外圈模拟表盘装饰
- 中央大数字显示
- 指针与数字同步
- 金属质感边框

### 7. 渐变波浪动画风格 (clock7.html)
- 流动的渐变背景
- 波浪动画效果
- 数字颜色随时间变化
- 平滑的色彩过渡

### 8. 3D立体等距风格 (clock8.html)
- 立体数字块显示
- 等距视角设计
- 阴影和光照效果
- 几何形状装饰元素

### 9. 粒子系统背景风格 (clock9.html)
- 动态粒子背景
- 数字周围粒子聚集效果
- 交互式鼠标跟随
- 星空/雪花粒子主题

### 10. 终端控制台风格 (clock10.html)
- 黑底绿字复古终端
- 打字机效果数字更新
- 扫描线动画
- 命令行风格界面元素

## 快速开始

### 安装依赖
```bash
pnpm install
```

### 构建CSS
```bash
pnpm run build
```

### 开发模式（监听CSS变化）
```bash
pnpm run dev
```

### 本地服务器运行
```bash
pnpm run serve
```

然后访问 http://localhost:8000

## 直接使用

如果不需要修改样式，可以直接打开 `index.html` 文件，因为CSS已经预先构建好了。

## 项目结构

```
clocks/
├── index.html              # 主页面
├── clock1.html - clock10.html  # 10个时钟页面
├── package.json            # 项目配置
├── tailwind.config.js      # TailwindCSS配置
├── src/
│   └── input.css          # TailwindCSS源文件
├── dist/
│   └── output.css         # 构建后的CSS文件
└── README.md              # 说明文档
```

## 技术特性

- **响应式设计**: 适配桌面和移动设备
- **现代CSS**: 使用TailwindCSS工具类
- **JavaScript动画**: 原生JS实现的动画效果
- **实时更新**: 毫秒级时间更新
- **交互效果**: 鼠标悬停、点击等交互
- **键盘控制**: ESC键返回主页等快捷键

## 浏览器兼容性

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 自定义开发

### 修改样式
1. 编辑 `src/input.css` 文件
2. 运行 `pnpm run build` 重新构建CSS
3. 或运行 `pnpm run dev` 进入监听模式

### 添加新时钟
1. 创建新的HTML文件（如 `clock11.html`）
2. 在 `index.html` 中添加对应的卡片
3. 遵循现有的代码结构和样式规范

## 许可证

MIT License - 可自由使用和修改
