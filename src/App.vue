<template>
  <div>
    <!-- 微信内置浏览器弹窗提示 -->
    <div v-if="showWeChatModal" class="modal-overlay">
      <div class="modal">
        <div class="modal-title">请扫描二维码付款</div>
        <div v-if="showModalText" class="modal-text">检测到你正在使用微信内置浏览器，请保存下方二维码后扫码完成付款。</div>
        <div class="qr-placeholder">
          <img :src="wechatQr" alt="微信二维码" />
        </div>
        <span class="btn btn-wechat" @click.prevent="closeWeChatModal">我知道了</span>
      </div>
    </div>
    <div class="container">
      <h1>聚合支付</h1>
      <p>请选择以下任一方式进行支付</p>
      <div class="payment-row">
        <div class="payment-option">
          <div class="payment-title">支付宝支付</div>
          <div class="qr-placeholder">
            <img :src="alipayQr" alt="支付宝二维码" />
          </div>
          <span class="btn" @click.prevent="openAlipay">打开支付宝付款</span>
        </div>
        <div class="payment-option">
          <div class="payment-title">微信支付</div>
          <div class="qr-placeholder">
            <img :src="wechatQr" alt="微信二维码" />
          </div>
          <span class="btn btn-wechat" @click.prevent="openWeChatModal(false)">请扫描二维码付款</span>
        </div>
      </div>
      <div class="footer">
        <p>扫描二维码或点击按钮进行支付</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const alipayUrl = import.meta.env.VITE_ALIPAY_URL
const alipayQr = import.meta.env.VITE_ALIPAY_QR_URL
const wechatQr = import.meta.env.VITE_WECHAT_QR_URL

const ua = navigator.userAgent.toLowerCase()
const isWeChat = ua.includes('micromessenger')
const showWeChatModal = ref(isWeChat)
const showModalText = ref(isWeChat)

function openWeChatModal(showText) {
  showWeChatModal.value = true
  showModalText.value = showText
}

function closeWeChatModal() {
  showWeChatModal.value = false
}

function openAlipay() {
  window.location.href = alipayUrl
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f9fa;
  padding: 20px;
  max-width: 100%;
  overflow-x: hidden;
}
.container {
  max-width: 600px;
  margin: 50px auto;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
}
h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}
.payment-options {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
}
.payment-option {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.qr-placeholder {
  width: 220px;
  height: 220px;
  background-color: #f1f1f1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  overflow: hidden;
}
.qr-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 200px;
  max-height: 200px;
}
.btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #1677ff;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  margin-top: 10px;
  transition: background-color 0.2s;
}
.btn:hover {
  cursor: pointer;
}
.btn-wechat {
  background-color: #07c160;
}
.btn:hover {
  opacity: 0.9;
}
.payment-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;
}
.payment-title {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;
}
.footer {
  margin-top: 40px;
  font-size: 14px;
  color: #666;
}

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 1000;
}
.modal {
  width: 100%;
  max-width: 420px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
.modal-text {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
}
</style>