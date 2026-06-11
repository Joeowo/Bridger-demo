<template>
  <div class="match-page">
    <!-- 顶部导航 -->
    <header class="header">
      <div class="header-left">
        <router-link to="/" class="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15,18 9,12 15,6"/>
          </svg>
          返回
        </router-link>
        <span class="logo">BRIDGER</span>
        <span class="header-title">匹配结果</span>
      </div>
      <div class="header-right">
        <span style="font-size: 13px; color: #6B7280;">张三</span>
        <div class="user-avatar">张</div>
      </div>
    </header>

    <div class="container">
      <!-- 筛选栏 -->
      <div class="filter-bar">
        <div class="filter-item active">
          <label>全部</label>
          <span>{{ matchResults.length }}</span>
        </div>
        <div class="filter-item">
          <label>高匹配</label>
          <span>{{ highMatchCount }}</span>
        </div>
        <div class="filter-item">
          <label>北京</label>
          <span>{{ beijingCount }}</span>
        </div>
        <div class="filter-item">
          <label>上海</label>
          <span>{{ shanghaiCount }}</span>
        </div>
      </div>

      <!-- 匹配列表 -->
      <div class="match-list">
        <div v-for="match in matchResults" :key="match.id" class="match-item">
          <!-- 企业卡片 -->
          <div class="company-card" @click="goToDetail(match.companyId)">
            <div class="card-header">
              <div class="company-logo" :style="getLogoStyle(match.companyId)">
                {{ getCompanyShortName(match.companyId) }}
              </div>
              <div class="company-info">
                <div class="company-name">{{ getCompanyName(match.companyId) }}</div>
                <div class="job-title">{{ getJobTitle(match.companyId, match.jobId) }}</div>
              </div>
              <div class="match-badge">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M10,17L15,12L10,7V17Z"/>
                </svg>
                {{ match.matchScore }}% 匹配
              </div>
            </div>

            <div class="card-details">
              <div class="detail-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                <strong>{{ getJobSalary(match.companyId, match.jobId) }}</strong>
              </div>
              <div class="detail-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21,10c0,7-9,13-9,13s-9-6-9-13a9,9 0 0,1,18,0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {{ getJobLocation(match.companyId, match.jobId) }}
              </div>
              <div class="detail-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16,21V5a2,2 0 0,0-2-2h-4a2,2 0 0,0-2,2v16"/>
                </svg>
                {{ getJobExperience(match.companyId, match.jobId) }}
              </div>
              <div class="detail-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M16.2,7.8l-2,6.4l-6.4,2l2-6.4l6.4-2"/>
                </svg>
                {{ getCompanyScale(match.companyId) }}
              </div>
            </div>

            <div class="card-actions">
              <button class="btn btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1,12l4,4l5-9l8,8"/>
                </svg>
                收藏
              </button>
              <button class="btn btn-accent" @click.stop="goToChat(match.companyId)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17,21v-2a4,4 0 0,0-4-4H5a4,4 0 0,0-4,4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23,21v-2a4,4 0 0,0-3-3.9M16,3.1a4,4 0 0,1,0,7.8"/>
                </svg>
                握手
              </button>
            </div>
          </div>

          <!-- AI气泡 -->
          <AIBubble :analysis="match.aiAnalysis" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import AIBubble from '@/components/AIBubble.vue'
import { matchResults, companies } from '@/data/mock.js'

const router = useRouter()

const highMatchCount = computed(() => matchResults.filter(m => m.matchScore >= 80).length)
const beijingCount = computed(() => matchResults.filter(m => {
  const company = companies.find(c => c.id === m.companyId)
  const job = company?.jobs.find(j => j.id === m.jobId)
  return job?.location?.includes('北京')
}).length)
const shanghaiCount = computed(() => matchResults.filter(m => {
  const company = companies.find(c => c.id === m.companyId)
  const job = company?.jobs.find(j => j.id === m.jobId)
  return job?.location?.includes('上海')
}).length)

const getCompanyName = (companyId) => {
  return companies.find(c => c.id === companyId)?.name || ''
}

const getCompanyShortName = (companyId) => {
  const name = getCompanyName(companyId)
  const shortNames = {
    '字节跳动': '字节',
    '阿里巴巴': '阿里',
    '腾讯': '腾讯',
    '美团': '美团',
    '拼多多': '拼多多',
    '京东': '京东',
    '网易': '网易',
    '小红书': '小红书',
    'Shopee': 'Shopee',
    'Lazada': 'Lazada',
    'Grab': 'Grab',
    'Stripe': 'Stripe',
    'Notion': 'Notion'
  }
  return shortNames[name] || name.substring(0, 2)
}

const getLogoStyle = (companyId) => {
  const styles = {
    'byte-001': 'background: linear-gradient(135deg, #60A5FA, #3B82F6); color: white;',
    'ali-001': 'background: linear-gradient(135deg, #FBBF24, #F59E0B); color: white;',
    'tencent-001': 'background: linear-gradient(135deg, #22D3EE, #06B6D4); color: white;',
    'meituan-001': 'background: linear-gradient(135deg, #FB923C, #F97316); color: white;',
    'pdd-001': 'background: linear-gradient(135deg, #F472B6, #EC4899); color: white;',
    'jd-001': 'background: linear-gradient(135deg, #818CF8, #6366F1); color: white;',
    'netease-001': 'background: linear-gradient(135deg, #34D399, #10B981); color: white;',
    'xhs-001': 'background: linear-gradient(135deg, #FB923C, #EA580C); color: white;',
    // 中小厂配色
    'shopee-001': 'background: linear-gradient(135deg, #EE5D50, #D03825); color: white;',
    'lazada-001': 'background: linear-gradient(135deg, #0F7FFF, #0A5DD6); color: white;',
    'grab-001': 'background: linear-gradient(135deg, #00B14F, #008C3D); color: white;',
    'stripe-001': 'background: linear-gradient(135deg, #635BFF, #4C47E5); color: white;',
    'notion-001': 'background: linear-gradient(135deg, #333333, #1A1A1A); color: white;'
  }
  return styles[companyId] || 'background: linear-gradient(135deg, #60A5FA, #3B82F6); color: white;'
}

const getCompanyScale = (companyId) => {
  return companies.find(c => c.id === companyId)?.scale || ''
}

const getJobTitle = (companyId, jobId) => {
  const company = companies.find(c => c.id === companyId)
  return company?.jobs.find(j => j.id === jobId)?.title || ''
}

const getJobSalary = (companyId, jobId) => {
  const company = companies.find(c => c.id === companyId)
  return company?.jobs.find(j => j.id === jobId)?.salary || ''
}

const getJobLocation = (companyId, jobId) => {
  const company = companies.find(c => c.id === companyId)
  return company?.jobs.find(j => j.id === jobId)?.location || ''
}

const getJobExperience = (companyId, jobId) => {
  const company = companies.find(c => c.id === companyId)
  return company?.jobs.find(j => j.id === jobId)?.experience || ''
}

const goToDetail = (companyId) => {
  router.push(`/company/${companyId}`)
}

const goToChat = (companyId) => {
  router.push(`/chat/${companyId}`)
}
</script>

<style scoped>
.match-page {
  min-height: 100vh;
  background: #F9FAFB;
}

.header {
  background: #FFFFFF;
  border-bottom: 1px solid #E5E7EB;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
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

.logo {
  font-size: 24px;
  font-weight: 800;
  color: #3B82F6;
  letter-spacing: 2px;
}

.header-title {
  font-size: 20px;
  font-weight: 600;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-avatar {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #E0E7FF, #EDE9FE);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #3B82F6;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px;
}

.filter-bar {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 20px 24px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}

.filter-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-item label {
  font-size: 13px;
  color: #6B7280;
}

.filter-item span {
  font-size: 14px;
  font-weight: 500;
  padding: 6px 14px;
  background: #F9FAFB;
  border-radius: 8px;
}

.filter-item.active span {
  background: #3B82F6;
  color: white;
}

.match-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.match-item {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 20px;
}

.company-card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid transparent;
}

.company-card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  border-color: #3B82F6;
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
}

.company-logo {
  min-width: 64px;
  max-width: 110px;
  height: 64px;
  width: auto;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 0 12px;
  text-align: center;
  line-height: 1.2;
  word-break: keep-all;
}

.company-logo::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%);
  pointer-events: none;
}

.company-card:hover .company-logo {
  transform: scale(1.05) rotate(-2deg);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.company-info {
  flex: 1;
}

.company-name {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
}

.job-title {
  font-size: 14px;
  color: #6B7280;
}

.match-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: linear-gradient(135deg, #DCFCE7, #D1FAE5);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #10B981;
}

.match-badge svg {
  width: 16px;
  height: 16px;
}

.card-details {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #6B7280;
}

.detail-item svg {
  width: 16px;
  height: 16px;
  color: #3B82F6;
}

.detail-item strong {
  color: #111827;
}

.card-actions {
  display: flex;
  gap: 12px;
}

.btn {
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background: #3B82F6;
  color: white;
}

.btn-primary:hover {
  background: #2563EB;
}

.btn-outline {
  background: transparent;
  border: 1px solid #E5E7EB;
  color: #111827;
}

.btn-outline:hover {
  border-color: #3B82F6;
  color: #3B82F6;
}

.btn-accent {
  background: #F59E0B;
  color: white;
}

.btn-accent:hover {
  background: #D97706;
}

@media (max-width: 1024px) {
  .match-item {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 20px;
  }

  .card-details {
    flex-direction: column;
    gap: 8px;
  }

  .card-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
