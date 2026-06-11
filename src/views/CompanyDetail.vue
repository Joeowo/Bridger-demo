<template>
  <div class="company-detail-page">
    <!-- 顶部导航 -->
    <header class="header">
      <router-link to="/match" class="back-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15,18 9,12 15,6"/>
        </svg>
        返回匹配列表
      </router-link>
      <span class="logo">BRIDGER</span>
    </header>

    <div class="container" v-if="company">
      <!-- 企业头部 -->
      <div class="company-header">
        <div class="company-logo-large" :style="logoStyle">
          {{ getCompanyShortName(company.id) }}
        </div>
        <div class="company-header-info">
          <h1 class="company-name">{{ company.name }}</h1>
          <div class="company-meta">
            <div class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M16.2,7.8l-2,6.4l-6.4,2l2-6.4l6.4-2"/>
              </svg>
              {{ company.industry }}
            </div>
            <div class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17,21v-2a4,4 0 0,0-4-4H5a4,4 0 0,0-4,4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23,21v-2a4,4 0 0,0-3-3.9M16,3.1a4,4 0 0,1,0,7.8"/>
              </svg>
              {{ company.scale }}
            </div>
            <div class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21,10c0,7-9,13-9,13s-9-6-9-13a9,9 0 0,1,18,0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {{ company.location }}
            </div>
          </div>
          <p class="company-desc">{{ company.description }}</p>
        </div>
      </div>

      <!-- 标签页导航 -->
      <div class="tabs">
        <button class="tab active">岗位详情</button>
        <button class="tab">公司介绍</button>
      </div>

      <!-- 内容网格 -->
      <div class="content-grid">
        <!-- 主内容区 -->
        <div class="main-content">
          <!-- 岗位信息卡片 -->
          <div class="card" v-if="currentJob">
            <div class="job-section">
              <div class="job-header">
                <div>
                  <h2 class="job-title-large">{{ currentJob.title }}</h2>
                  <div class="job-tags">
                    <span class="tag">{{ currentJob.experience }}</span>
                    <span class="tag">{{ currentJob.location }}</span>
                    <span class="tag">本科</span>
                  </div>
                </div>
                <div class="job-salary">
                  <div class="salary-amount">{{ currentJob.salary }}</div>
                  <div class="salary-note">· 15薪</div>
                </div>
              </div>

              <div class="section-block">
                <h4>岗位职责</h4>
                <ul>
                  <li v-for="(item, index) in currentJob.responsibilities" :key="`resp-${index}`">
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div class="section-block">
                <h4>任职要求</h4>
                <ul>
                  <li v-for="(item, index) in currentJob.requirements" :key="`req-${index}`">
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div class="section-block">
                <h4>薪资福利</h4>
                <ul>
                  <li>有竞争力的薪资待遇</li>
                  <li v-for="(item, index) in currentJob.benefits" :key="`benefit-${index}`">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 近期录用情况 -->
          <div class="card">
            <div class="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17,21v-2a4,4 0 0,0-4-4H5a4,4 0 0,0-4,4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23,21v-2a4,4 0 0,0-3-3.9M16,3.1a4,4 0 0,1,0,7.8"/>
              </svg>
              近期录用情况
            </div>
            <p style="font-size: 14px; color: #6B7280;">
              {{ currentMatch?.recentHires || '暂无数据' }}
            </p>
          </div>
        </div>

        <!-- 侧边栏 -->
        <div class="side-content">
          <!-- AI分析卡片 -->
          <div class="card ai-card" v-if="currentMatch">
            <div class="ai-score">{{ currentMatch.matchScore }}%</div>
            <div class="ai-section">
              <div class="ai-section-title">匹配度分析</div>
              <ul class="ai-list">
                <li v-for="(item, index) in currentMatch.aiAnalysis.strongPoints" :key="`strong-${index}`">
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="ai-section">
              <div class="ai-section-title">面试准备建议</div>
              <ul class="ai-list">
                <li v-for="(item, index) in currentMatch.aiAnalysis.suggestions" :key="`sugg-${index}`">
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="ai-section">
              <div class="ai-section-title">竞争力评估</div>
              <ul class="ai-list">
                <li>项目经验与岗位匹配度高</li>
                <li>技术栈覆盖全面</li>
              </ul>
            </div>
          </div>

          <!-- 行情资讯 -->
          <div class="card">
            <div class="card-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2,3h6a4,4 0 0,1,4,4v14a3,3 0 0,0-3-3H2z"/>
                <path d="M22,3h-6a4,4 0 0,0-4,4v14a3,3 0 0,1,3-3h7z"/>
              </svg>
              行情资讯
            </div>

            <div class="news-item" v-for="(news, index) in companyNews" :key="`news-${index}`">
              <span class="news-source" :class="news.platform === '知乎' ? 'zhihu' : 'nowcoder'">
                {{ news.platform }}
              </span>
              <div class="news-title">
                <a :href="news.url" target="_blank">{{ news.title }}</a>
              </div>
              <p class="news-summary">{{ news.summary }}</p>
              <div class="news-meta">发布于 {{ news.publishedAt }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 操作按钮区 -->
    <div class="action-bar">
      <button class="btn btn-outline">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M1,12l4,4l5-9l8,8"/>
        </svg>
        收藏岗位
      </button>
      <button class="btn btn-primary" @click="goToChat">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21,11.5a8.4,8.4 0 0,1-.9,3.8a8.5,8.5 0 0,1-7.6,4.7a8.4,8.4 0 0,1-3.8-.9L3,21l1.9-5.7a8.4,8.4 0 0,1-.9-3.8a8.5,8.5 0 0,1,4.7-7.6a8.4,8.4 0 0,1,3.8-.9h.5a8.5,8.5 0 0,1,8,5.5A8.5,8.5 0 0,1,21,11.5z"/>
        </svg>
        立即沟通
      </button>
      <button class="btn btn-accent" @click="goToChat">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17,21v-2a4,4 0 0,0-4-4H5a4,4 0 0,0-4,4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23,21v-2a4,4 0 0,0-3-3.9M16,3.1a4,4 0 0,1,0,7.8"/>
        </svg>
        握手约面
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { companies, matchResults, socialMediaPosts } from '@/data/mock.js'

const route = useRoute()
const router = useRouter()

const companyId = route.params.id

const company = computed(() => companies.find(c => c.id === companyId))

const currentMatch = computed(() => matchResults.find(m => m.companyId === companyId))

const currentJob = computed(() => {
  if (!company.value || !currentMatch.value) return null
  return company.value.jobs.find(j => j.id === currentMatch.value.jobId)
})

const logoStyle = computed(() => {
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
})

const getCompanyShortName = (id) => {
  const shortNames = {
    'byte-001': '字节',
    'ali-001': '阿里',
    'tencent-001': '腾讯',
    'meituan-001': '美团',
    'pdd-001': '拼多多',
    'jd-001': '京东',
    'netease-001': '网易',
    'xhs-001': '小红书',
    'shopee-001': 'Shopee',
    'lazada-001': 'Lazada',
    'grab-001': 'Grab',
    'stripe-001': 'Stripe',
    'notion-001': 'Notion'
  }
  return shortNames[id] || '公司'
}

const companyNews = computed(() => {
  const newsMap = {
    'byte-001': socialMediaPosts.filter(p => p.title.includes('字节')),
    'ali-001': socialMediaPosts.filter(p => p.title.includes('阿里')),
    'tencent-001': socialMediaPosts.filter(p => p.title.includes('腾讯')),
    'meituan-001': socialMediaPosts.filter(p => p.title.includes('美团')),
    'shopee-001': [
      {
        platform: '牛客网',
        title: 'Shopee后端开发面经分享',
        author: '牛友8726',
        summary: '分享了Shopee新加坡总部的面试经历，技术考察重点是Java并发和分布式系统设计...',
        url: '#',
        publishedAt: '2025-04-01'
      },
      {
        platform: '脉脉',
        title: 'Shopee虾皮薪资待遇讨论',
        author: '职场观察员',
        summary: '讨论了Shopee的薪资结构，30-50K的薪资在互联网公司中很有竞争力...',
        url: '#',
        publishedAt: '2025-03-28'
      }
    ],
    'lazada-001': [
      {
        platform: '知乎',
        title: 'Lazada阿里系电商内推面经',
        author: '技术分享者',
        summary: 'Lazada杭州研发中心的面试经历，重点考察电商业务理解和技术架构能力...',
        url: '#',
        publishedAt: '2025-03-15'
      }
    ],
    'stripe-001': [
      {
        platform: '海外技术社区',
        title: 'Stripe支付系统架构解析',
        author: 'System Design',
        summary: '深入分析Stripe的支付基础设施架构，分布式系统设计和高可用方案...',
        url: '#',
        publishedAt: '2025-02-20'
      }
    ],
    'notion-001': [
      {
        platform: 'Product Hunt',
        title: 'Notion工程文化深度解析',
        author: 'Engineering Lead',
        summary: 'Notion的远程工程文化和最佳实践，全栈开发模式下的协作方式...',
        url: '#',
        publishedAt: '2025-04-05'
      }
    ],
    'pdd-001': [],
    'jd-001': [],
    'netease-001': [],
    'xhs-001': socialMediaPosts.filter(p => p.title.includes('小红书'))
  }
  return newsMap[companyId] || []
})

const goToChat = () => {
  router.push(`/chat/${companyId}`)
}
</script>

<style scoped>
.company-detail-page {
  min-height: 100vh;
  background: #F9FAFB;
  padding-bottom: 80px;
}

.header {
  background: #FFFFFF;
  border-bottom: 1px solid #E5E7EB;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  position: sticky;
  top: 0;
  z-index: 100;
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
}

.company-header {
  background: #FFFFFF;
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  display: flex;
  gap: 24px;
}

.company-logo-large {
  width: 120px;
  height: 120px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 800;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.company-logo-large::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%);
  pointer-events: none;
}

.company-logo-large:hover {
  transform: scale(1.05) rotate(-2deg);
  box-shadow: 0 12px 48px rgba(0,0,0,0.18);
}

.company-header-info {
  flex: 1;
}

.company-name {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
}

.company-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #6B7280;
}

.meta-item svg {
  width: 16px;
  height: 16px;
  color: #3B82F6;
}

.company-desc {
  font-size: 14px;
  color: #6B7280;
  max-width: 700px;
}

.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  border-bottom: 1px solid #E5E7EB;
  padding-bottom: 0;
}

.tab {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  color: #6B7280;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
}

.tab:hover {
  color: #3B82F6;
}

.tab.active {
  color: #3B82F6;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #3B82F6;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 24px;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.side-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.card-title svg {
  width: 20px;
  height: 20px;
  color: #3B82F6;
}

.job-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 16px;
  border-bottom: 1px solid #E5E7EB;
}

.job-title-large {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
}

.job-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  padding: 4px 12px;
  background: #F9FAFB;
  border-radius: 6px;
  font-size: 12px;
  color: #6B7280;
}

.job-salary {
  text-align: right;
}

.salary-amount {
  font-size: 24px;
  font-weight: 700;
  color: #F59E0B;
}

.salary-note {
  font-size: 12px;
  color: #6B7280;
}

.section-block {
  margin-top: 16px;
}

.section-block h4 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
}

.section-block ul {
  list-style: none;
  padding: 0;
}

.section-block li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #6B7280;
}

.section-block li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #3B82F6;
}

.ai-card {
  background: linear-gradient(135deg, #E0E7FF, #EDE9FE);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.ai-score {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  margin: 0 auto 20px;
  font-size: 32px;
  font-weight: 700;
  color: #10B981;
}

.ai-section {
  margin-bottom: 16px;
}

.ai-section:last-child {
  margin-bottom: 0;
}

.ai-section-title {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #3B82F6;
}

.ai-list {
  list-style: none;
  padding: 0;
}

.ai-list li {
  position: relative;
  padding-left: 16px;
  margin-bottom: 6px;
  font-size: 13px;
}

.ai-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #3B82F6;
}

.news-item {
  padding: 16px 0;
  border-bottom: 1px solid #E5E7EB;
}

.news-item:last-child {
  border-bottom: none;
}

.news-source {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: #F9FAFB;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 8px;
}

.news-source.zhihu {
  color: #0084FF;
}

.news-source.nowcoder {
  color: #00C65E;
}

.news-title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  line-height: 1.5;
}

.news-title a {
  color: #111827;
  text-decoration: none;
}

.news-title a:hover {
  color: #3B82F6;
}

.news-summary {
  font-size: 12px;
  color: #6B7280;
  line-height: 1.5;
}

.news-meta {
  font-size: 11px;
  color: #9CA3AF;
  margin-top: 6px;
}

.action-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #FFFFFF;
  border-top: 1px solid #E5E7EB;
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  gap: 16px;
  box-shadow: 0 -4px 12px rgba(0,0,0,0.06);
  z-index: 99;
}

.btn {
  padding: 12px 32px;
  border-radius: 10px;
  font-size: 15px;
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

.btn-accent {
  background: #F59E0B;
  color: white;
}

.btn-accent:hover {
  background: #D97706;
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

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .side-content {
    order: 2;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 20px;
  }

  .company-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .company-meta {
    justify-content: center;
  }

  .job-header {
    flex-direction: column;
    gap: 16px;
  }

  .job-salary {
    text-align: left;
  }

  .action-bar {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
