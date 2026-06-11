<template>
  <div class="home-page">
    <!-- Logo背景墙 -->
    <div class="logo-wall">
      <svg viewBox="0 0 100 100" fill="currentColor"><circle cx="50" cy="50" r="40"/></svg>
      <svg viewBox="0 0 100 100" fill="currentColor"><rect x="20" y="20" width="60" height="60" rx="10"/></svg>
      <svg viewBox="0 0 100 100" fill="currentColor"><polygon points="50,15 90,85 10,85"/></svg>
      <svg viewBox="0 0 100 100" fill="currentColor"><rect x="20" y="30" width="60" height="40" rx="5"/><rect x="40" y="70" width="20" height="15"/></svg>
      <svg viewBox="0 0 100 100" fill="currentColor"><circle cx="35" cy="40" r="20"/><path d="M15,85 Q35,60 55,85"/></svg>
      <svg viewBox="0 0 100 100" fill="currentColor"><rect x="25" y="25" width="50" height="50" rx="8"/></svg>
    </div>

    <div class="container">
      <!-- Hero区域 -->
      <div class="hero">
        <h1 class="slogan">让求职更精准</h1>

        <div class="hero-illustration">
          <!-- 求职者 -->
          <div class="person-card">
            <div class="thought-bubble">理想的工作...</div>
            <svg viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="1.5">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4,20c0-4,3.6-7,8-7s8,3,8,7"/>
            </svg>
            <span>求职者</span>
          </div>

          <!-- 桥梁Logo -->
          <div class="bridge-logo">
            <div class="bridge-icon">
              <svg viewBox="0 0 100 60" fill="none">
                <path d="M10,50 L90,50" stroke="#3B82F6" stroke-width="4" stroke-linecap="round"/>
                <path d="M20,50 L20,30" stroke="#3B82F6" stroke-width="3" stroke-linecap="round"/>
                <path d="M40,50 L40,25" stroke="#3B82F6" stroke-width="3" stroke-linecap="round"/>
                <path d="M60,50 L60,25" stroke="#3B82F6" stroke-width="3" stroke-linecap="round"/>
                <path d="M80,50 L80,30" stroke="#3B82F6" stroke-width="3" stroke-linecap="round"/>
                <path d="M20,30 L40,25 L60,25 L80,30" stroke="#3B82F6" stroke-width="2" fill="none"/>
              </svg>
            </div>
            <span class="bridge-name">BRIDGER</span>

            <!-- 上方数据流 -->
            <div class="data-flow top">
              <span class="data-dot"></span>
              <span class="data-dot"></span>
              <span class="data-dot"></span>
              <span class="data-dot"></span>
            </div>

            <!-- 下方数据流 -->
            <div class="data-flow bottom">
              <span class="data-dot"></span>
              <span class="data-dot"></span>
              <span class="data-dot"></span>
              <span class="data-dot"></span>
            </div>
          </div>

          <!-- HR -->
          <div class="person-card">
            <div class="thought-bubble">合适的候选人...</div>
            <svg viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="1.5">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4,20c0-4,3.6-7,8-7s8,3,8,7"/>
            </svg>
            <span>企业HR</span>
          </div>
        </div>
      </div>

      <!-- 右侧面板 -->
      <div class="side-panel">
        <!-- 核心功能介绍 -->
        <div class="features">
          <h3>核心功能</h3>
          <div class="feature-item">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14,2H6C5.1,2 4,2.1 4,3v18c0,0.9 1.1,1 2,1h12c0.9,0 1-1.1 1-2V8L14,2z"/>
                <polyline points="14,2 14,8 20,8"/>
              </svg>
            </div>
            <div class="feature-text">
              <h4>简历智能解析</h4>
              <p>AI自动提取简历关键信息</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12,8v8M8,12h8"/>
              </svg>
            </div>
            <div class="feature-text">
              <h4>AI精准匹配</h4>
              <p>智能推荐最适合的岗位</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17,21v-2a4,4 0 0,0-4-4H5a4,4 0 0,0-4,4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23,21v-2a4,4 0 0,0-3-3.9M16,3.1a4,4 0 0,1,0,7.8"/>
              </svg>
            </div>
            <div class="feature-text">
              <h4>握手约面机制</h4>
              <p>双向确认，提高约面效率</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2,3h6a4,4 0 0,1,4,4v14a3,3 0 0,0-3-3H2z"/>
                <path d="M22,3h-6a4,4 0 0,0-4,4v14a3,3 0 0,1,3-3h7z"/>
              </svg>
            </div>
            <div class="feature-text">
              <h4>行情资讯聚合</h4>
              <p>真实面经与录用情况</p>
            </div>
          </div>
        </div>

        <!-- START按钮 -->
        <div class="start-section">
          <router-link to="/login" class="start-btn">
            <span>开始使用</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9,18 15,12 9,6"/>
            </svg>
          </router-link>
        </div>
      </div>

      <!-- ABOUT US -->
      <div class="about-us">
        <h3>ABOUT US</h3>
        <p>BRIDGER 是一个面向求职者的智能匹配平台，通过AI技术连接求职者与理想职位。我们致力于让求职过程更加精准、高效。</p>
        <div class="team-section">
          <div class="team-block">
            <h4>开发团队</h4>
            <p>由资深工程师组成的团队，专注于AI和产品创新</p>
          </div>
          <div class="team-block">
            <h4>商业计划</h4>
            <p>B端企业服务 + C端增值订阅，双向变现模式</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

.logo-wall {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 60px;
  opacity: 0.03;
  z-index: 0;
  pointer-events: none;
}

.logo-wall svg {
  width: 120px;
  height: 120px;
}

.container {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr 380px;
  gap: 40px;
  padding: 60px 80px;
  max-width: 1600px;
  margin: 0 auto;
}

.hero {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.slogan {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-illustration {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
}

.person-card {
  width: 140px;
  height: 180px;
  background: #FFFFFF;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  position: relative;
}

.person-card svg {
  width: 80px;
  height: 80px;
  margin-bottom: 12px;
}

.person-card span {
  font-size: 14px;
  color: #6B7280;
}

.thought-bubble {
  position: absolute;
  top: -40px;
  background: #3B82F6;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  white-space: nowrap;
}

.thought-bubble::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #3B82F6;
}

.bridge-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;
}

.bridge-icon {
  width: 100px;
  height: 60px;
  position: relative;
}

.bridge-icon svg {
  width: 100%;
  height: 100%;
}

.bridge-name {
  font-size: 28px;
  font-weight: 800;
  color: #3B82F6;
  letter-spacing: 4px;
}

.data-flow {
  position: absolute;
  width: 200px;
  height: 2px;
  overflow: visible;
}

.data-flow::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #3B82F6, transparent);
  opacity: 0.2;
}

.data-flow.top {
  top: -20px;
  left: 0;
}

.data-flow.bottom {
  bottom: -20px;
  left: 0;
}

.data-dot {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #3B82F6;
  border-radius: 50%;
  box-shadow: 0 0 8px #3B82F6;
}

.data-flow.top .data-dot {
  animation: flowRight 2s ease-in-out infinite;
}

.data-flow.bottom .data-dot {
  animation: flowLeft 2s ease-in-out infinite;
}

.data-flow .data-dot:nth-child(1) { animation-delay: 0s; }
.data-flow .data-dot:nth-child(2) { animation-delay: 0.4s; }
.data-flow .data-dot:nth-child(3) { animation-delay: 0.8s; }
.data-flow .data-dot:nth-child(4) { animation-delay: 1.2s; }

@keyframes flowRight {
  0% {
    left: 0;
    opacity: 0;
    transform: scale(0.5);
  }
  20% {
    opacity: 1;
    transform: scale(1);
  }
  80% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    left: 100%;
    opacity: 0;
    transform: scale(0.5);
  }
}

@keyframes flowLeft {
  0% {
    right: 0;
    opacity: 0;
    transform: scale(0.5);
  }
  20% {
    opacity: 1;
    transform: scale(1);
  }
  80% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    right: 100%;
    opacity: 0;
    transform: scale(0.5);
  }
}

.side-panel {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.features {
  background: #FFFFFF;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}

.features h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #111827;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #F3F4F6;
}

.feature-item:last-child {
  border-bottom: none;
}

.feature-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #E0E7FF, #EDE9FE);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-icon svg {
  width: 20px;
  height: 20px;
  color: #3B82F6;
}

.feature-text h4 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
}

.feature-text p {
  font-size: 12px;
  color: #6B7280;
}

.start-section {
  text-align: center;
}

.start-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #F59E0B;
  color: white;
  border: none;
  padding: 18px 48px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.3);
  transition: all 0.3s ease;
  text-decoration: none;
}

.start-btn:hover {
  background: #D97706;
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(245, 158, 11, 0.4);
}

.start-btn svg {
  width: 24px;
  height: 24px;
}

.about-us {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background: #FFFFFF;
  border-radius: 16px;
  padding: 32px 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}

.about-us h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #111827;
}

.about-us p {
  color: #6B7280;
  font-size: 14px;
  max-width: 800px;
}

.team-section {
  margin-top: 24px;
  display: flex;
  gap: 32px;
}

.team-block h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.team-block p {
  font-size: 13px;
  color: #6B7280;
}

@media (max-width: 1024px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    padding: 40px;
  }

  .hero {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .side-panel {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .about-us {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  .hero-illustration {
    transform: scale(0.8);
  }
}

@media (max-width: 768px) {
  .slogan {
    font-size: 32px;
  }

  .hero-illustration {
    flex-direction: column;
    gap: 20px;
  }

  .data-flow {
    display: none;
  }

  .container {
    padding: 24px;
  }

  .features, .start-section {
    flex: 1;
    min-width: 250px;
  }
}
</style>
