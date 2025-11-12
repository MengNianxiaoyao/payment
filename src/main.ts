import { createApp } from 'vue'
import App from './App.vue'

const ua = navigator.userAgent.toLowerCase()
const isAlipay = ua.includes('alipayclient') || ua.includes('aliapp(ap)') || ua.includes('alipay')

const alipayUrl: string | undefined = import.meta.env.VITE_ALIPAY_URL

if (isAlipay && alipayUrl) {
  location.replace(alipayUrl)
} else {
  createApp(App).mount('#app')
}