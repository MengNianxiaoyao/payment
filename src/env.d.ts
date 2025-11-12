/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ALIPAY_URL: string
  readonly VITE_ALIPAY_QR_URL: string
  readonly VITE_WECHAT_QR_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}