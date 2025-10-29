import { createApp } from 'vue'
import App from './App.vue'

const ua = navigator.userAgent.toLowerCase()
const isAlipay = ua.includes('alipayclient') || ua.includes('aliapp(ap)') || ua.includes('alipay')

const alipayUrl = import.meta.env.VITE_ALIPAY_URL

// 支付宝内置浏览器仍保持跳转，其余（含微信）渲染页面
if (isAlipay && alipayUrl) {
  location.replace(alipayUrl)
} else {
  createApp(App).mount('#app')
}