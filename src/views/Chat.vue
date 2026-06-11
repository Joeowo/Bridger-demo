<template>
  <div class="chat-page">
    <!-- 顶部导航 -->
    <header class="header">
      <router-link to="/match" class="back-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15,18 9,12 15,6"/>
        </svg>
        返回
      </router-link>
      <span class="chat-title">与 {{ company?.name }} - 张HR 沟通</span>
      <div class="hr-avatar">张</div>
    </header>

    <!-- 聊天区域 -->
    <div class="chat-area">
      <div
        v-for="msg in messages"
        :key="msg.id"
        class="message"
        :class="msg.sender === 'hr' ? 'hr' : 'user'"
      >
        <div class="message-avatar">{{ msg.sender === 'hr' ? '张' : '张' }}</div>
        <div class="message-content">
          <div>{{ msg.content }}</div>
          <div class="message-time">{{ msg.time }}</div>
        </div>
      </div>

      <!-- 正在输入提示 -->
      <div class="typing-indicator" v-if="showTyping">
        <div class="message-avatar">张</div>
        <div class="typing-bubbles">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <!-- 输入区域 -->
    <div class="input-area">
      <div class="input-wrapper">
        <div class="input-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8,14s1.5,2 4,2 4-2 4-2"/>
            <line x1="9" y1="9" x2="9.01" y2="9"/>
            <line x1="15" y1="9" x2="15.01" y2="9"/>
          </svg>
          <input
            type="text"
            v-model="inputText"
            placeholder="输入消息..."
            @keyup.enter="sendMessage"
          >
        </div>
        <button class="send-btn" @click="sendMessage">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22,2 15,22 11,13 2,9"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- 握手按钮区 -->
    <div class="handshake-section">
      <button
        class="handshake-btn"
        :class="handshakeState"
        @click="handleHandshake"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" v-if="handshakeState === 'initial'">
          <path d="M17,21v-2a4,4 0 0,0-4-4H5a4,4 0 0,0-4,4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23,21v-2a4,4 0 0,0-3-3.9M16,3.1a4,4 0 0,1,0,7.8"/>
        </svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" v-else-if="handshakeState === 'sent'">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" v-else>
          <path d="M22,11.08V12a10,10 0 1,1-5.93-9.14"/>
          <polyline points="22,4 12,14.01 9,11.01"/>
        </svg>
        {{ handshakeText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { companies, chatMessages } from '@/data/mock.js'

const route = useRoute()
const companyId = route.params.companyId

const company = computed(() => companies.find(c => c.id === companyId))

const messages = ref([])
const showTyping = ref(false)
const inputText = ref('')
const handshakeState = ref('initial')

const handshakeText = computed(() => {
  switch (handshakeState.value) {
    case 'initial': return '握手约面'
    case 'sent': return '已发送握手请求'
    case 'success': return '握手成功，可约面'
    default: return '握手约面'
  }
})

onMounted(() => {
  const companyMessages = chatMessages[companyId] || []
  messages.value = companyMessages.filter(m => !m.typing)
  showTyping.value = companyMessages.some(m => m.typing)
})

const sendMessage = () => {
  if (!inputText.value.trim()) return

  const now = new Date()
  const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`

  messages.value.push({
    id: Date.now(),
    sender: 'user',
    content: inputText.value,
    time
  })

  inputText.value = ''

  // 模拟回复
  setTimeout(() => {
    showTyping.value = true
    setTimeout(() => {
      showTyping.value = false
      const now = new Date()
      const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
      messages.value.push({
        id: Date.now(),
        sender: 'hr',
        content: '收到您的消息，我们会尽快回复',
        time
      })
    }, 2000)
  }, 500)
}

const handleHandshake = () => {
  if (handshakeState.value === 'initial') {
    handshakeState.value = 'sent'

    setTimeout(() => {
      handshakeState.value = 'success'
    }, 2000)
  }
}
</script>

<style scoped>
.chat-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #F9FAFB;
}

.header {
  background: #FFFFFF;
  border-bottom: 1px solid #E5E7EB;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6B7280;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.back-btn:hover {
  color: #3B82F6;
}

.chat-title {
  flex: 1;
  font-size: 16px;
  font-weight: 600;
}

.hr-avatar {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #E0E7FF, #C7D2FE);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #3B82F6;
  font-size: 14px;
}

.chat-area {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.message {
  display: flex;
  gap: 12px;
  max-width: 80%;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message.hr {
  align-self: flex-start;
}

.message.user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.message-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  flex-shrink: 0;
}

.message.hr .message-avatar {
  background: linear-gradient(135deg, #E0E7FF, #C7D2FE);
  color: #3B82F6;
}

.message.user .message-avatar {
  background: linear-gradient(135deg, #FEF3C7, #FDE68A);
  color: #D97706;
}

.message-content {
  background: #FFFFFF;
  padding: 12px 16px;
  border-radius: 16px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
}

.message.hr .message-content {
  border-top-left-radius: 4px;
}

.message.user .message-content {
  background: #3B82F6;
  color: white;
  border-top-right-radius: 4px;
}

.message-time {
  font-size: 11px;
  color: #6B7280;
  margin-top: 4px;
}

.message.user .message-time {
  color: rgba(255,255,255,0.8);
}

.typing-indicator {
  display: flex;
  gap: 12px;
  align-self: flex-start;
  margin-top: 8px;
}

.typing-bubbles {
  background: #FFFFFF;
  padding: 12px 16px;
  border-radius: 16px;
  border-top-left-radius: 4px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  display: flex;
  gap: 4px;
  align-items: center;
}

.typing-bubbles span {
  width: 8px;
  height: 8px;
  background: #6B7280;
  border-radius: 50%;
  animation: typing 1.4s ease-in-out infinite;
}

.typing-bubbles span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-bubbles span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-8px);
    opacity: 1;
  }
}

.input-area {
  background: #FFFFFF;
  border-top: 1px solid #E5E7EB;
  padding: 16px 24px;
  flex-shrink: 0;
}

.input-wrapper {
  display: flex;
  gap: 12px;
  align-items: flex-end;
}

.input-box {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #F9FAFB;
  border-radius: 24px;
  padding: 10px 16px;
}

.input-box input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 14px;
  outline: none;
  font-family: inherit;
}

.input-box input::placeholder {
  color: #9CA3AF;
}

.send-btn {
  width: 40px;
  height: 40px;
  background: #3B82F6;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}

.send-btn:hover {
  background: #2563EB;
}

.send-btn svg {
  width: 18px;
  height: 18px;
  color: white;
}

.handshake-section {
  background: #FFFFFF;
  border-top: 1px solid #E5E7EB;
  padding: 16px 24px;
  flex-shrink: 0;
}

.handshake-btn {
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.handshake-btn.initial {
  background: #F59E0B;
  color: white;
}

.handshake-btn.initial:hover {
  background: #D97706;
}

.handshake-btn.sent {
  background: #F9FAFB;
  color: #6B7280;
  cursor: default;
}

.handshake-btn.success {
  background: linear-gradient(135deg, #DCFCE7, #D1FAE5);
  color: #10B981;
}

@media (max-width: 768px) {
  .chat-area {
    padding: 16px;
  }

  .message {
    max-width: 90%;
  }

  .input-area, .handshake-section {
    padding: 12px 16px;
  }
}
</style>
