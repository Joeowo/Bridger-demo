<template>
  <div class="login-page">
    <div class="container">
      <div class="logo-area">
        <div class="logo">BRIDGER</div>
        <div class="tagline">让求职更精准</div>
      </div>

      <div class="card">
        <h2 class="card-title">登录</h2>

        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label>手机号</label>
            <div class="input-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22,16.92v3a2,2 0 0,1-2.18,2a19.8,19.8 0 0,1-8.63-3.07a19.5,19.5 0 0,1-6-6a19.8,19.8 0 0,1-3.07-8.67A2,2 0 0,1,4.11,2h3a2,2 0 0,1,2,1.72a12.84,12.84 0 0,0,.7,2.81a2,2 0 0,1-.45,2.11L8.09,9.91a16,16 0 0,0,6,6l1.27-1.27a2,2 0 0,1,2.11-.45a12.84,12.84 0 0,0,2.81.7A2,2 0 0,1,22,16.92z"/>
              </svg>
              <input type="tel" v-model="phone" placeholder="请输入手机号">
            </div>
          </div>

          <div class="form-group">
            <label>验证码</label>
            <div class="code-input">
              <div class="input-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7,11V7a5,5 0 0,1,10,0v4"/>
                </svg>
                <input type="text" v-model="code" placeholder="请输入验证码">
              </div>
              <button type="button" class="send-code-btn" @click="sendCode" :disabled="countdown > 0">
                {{ countdown > 0 ? `${countdown}s后重发` : '获取验证码' }}
              </button>
            </div>
          </div>

          <button type="submit" class="submit-btn">登录</button>
        </form>

        <router-link to="/" class="back-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15,18 9,12 15,6"/>
          </svg>
          返回首页
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const phone = ref('138****8888')
const code = ref('')
const countdown = ref(0)

const sendCode = (btn) => {
  countdown.value = 60
  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
    }
  }, 1000)
}

const handleSubmit = () => {
  // Demo: 直接跳转到简历页面
  router.push('/resume')
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F9FAFB;
}

.container {
  width: 100%;
  max-width: 400px;
  padding: 24px;
}

.logo-area {
  text-align: center;
  margin-bottom: 32px;
}

.logo {
  font-size: 48px;
  font-weight: 800;
  color: #3B82F6;
  letter-spacing: 4px;
  margin-bottom: 8px;
}

.tagline {
  font-size: 14px;
  color: #6B7280;
}

.card {
  background: #FFFFFF;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.card-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #111827;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrapper svg {
  position: absolute;
  left: 14px;
  width: 18px;
  height: 18px;
  color: #6B7280;
  pointer-events: none;
}

.input-wrapper input {
  width: 100%;
  padding: 12px 14px 12px 44px;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  font-family: inherit;
}

.input-wrapper input:focus {
  border-color: #3B82F6;
}

.code-input {
  display: flex;
  gap: 12px;
}

.code-input .input-wrapper {
  flex: 1;
}

.send-code-btn {
  padding: 12px 16px;
  background: transparent;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  font-size: 13px;
  color: #3B82F6;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.send-code-btn:hover:not(:disabled) {
  background: #EFF6FF;
  border-color: #3B82F6;
}

.send-code-btn:disabled {
  color: #6B7280;
  cursor: not-allowed;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background: #3B82F6;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 8px;
}

.submit-btn:hover {
  background: #2563EB;
}

.back-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 24px;
  color: #6B7280;
  text-decoration: none;
  font-size: 14px;
}

.back-link:hover {
  color: #3B82F6;
}

.back-link svg {
  width: 16px;
  height: 16px;
}
</style>
