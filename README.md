# 聚合支付页面

这是一个使用 Vue 3 和 Vite 构建的聚合支付页面。

## 功能

- **智能识别环境**：自动检测用户是在微信、支付宝还是普通浏览器中打开页面。
- **支付宝支付**：在支付宝应用中，它会直接尝试跳转到支付链接。在其他环境中，它会显示一个二维码供用户扫描。
- **微信支付**：在微信应用中，它会弹出一个模式窗口，提示用户保存二维码并扫描。在其他环境中，它会显示一个可供扫描的二维码。
- **响应式设计**：该页面适用于不同的屏幕尺寸。

## 安装与启动

1.  **安装依赖**

    ```bash
    pnpm install
    ```

2.  **启动开发服务器**

    ```bash
    pnpm run dev
    ```

3.  **构建生产版本**

    ```bash
    pnpm run build
    ```

## 配置

应用程序的配置是通过 `.env` 文件处理的。

对于本地开发，您需要创建一个 `.env.local` 文件并添加以下变量：

```
VITE_ALIPAY_URL="YOUR_ALIPAY_URL"
VITE_ALIPAY_QR_URL="YOUR_ALIPAY_QR_CODE_URL"
VITE_WECHAT_QR_URL="YOUR_WECHAT_QR_CODE_URL"
```

- `VITE_ALIPAY_URL`：您的支付宝收款链接。
- `VITE_ALIPAY_QR_URL`：您的支付宝收款二维码图片的 URL。
- `VITE_WECHAT_QR_URL`：您的微信收款二维码图片的 URL。

对于生产环境，您需要创建一个 `.env` 文件并添加相同的变量。
