<template>
  <div class="resume-page">
    <!-- 顶部导航 -->
    <header class="header">
      <div class="header-left">
        <router-link to="/match" class="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15,18 9,12 15,6"/>
          </svg>
          返回
        </router-link>
        <span class="logo">BRIDGER</span>
        <span class="header-title">完善简历</span>
      </div>
      <div class="header-right">
        <span style="font-size: 13px; color: #64748B;">张三</span>
        <div class="user-avatar">张</div>
      </div>
    </header>

    <!-- 进度指示器 -->
    <div class="progress-bar">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="progress-step"
        :class="{ active: currentStep >= index, completed: currentStep > index }"
      >
        <div class="step-circle">{{ index + 1 }}</div>
        <span class="step-label">{{ step }}</span>
        <div class="step-line" v-if="index < steps.length - 1"></div>
      </div>
    </div>

    <div class="container">
      <!-- Step 1: 上传简历 -->
      <div class="step-content" v-if="currentStep === 0">
        <div class="card upload-card">
          <div class="upload-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21,15v4a2,2 0 0,1-2,2H5a2,2 0 0,1-2-2v-4"/>
              <polyline points="17,8 12,3 7,8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
          </div>
          <h2 class="upload-title">上传您的简历</h2>
          <p class="upload-desc">支持 PDF、Word、图片格式，AI将自动解析关键信息</p>

          <div
            class="upload-area"
            :class="{ dragging: isDragging }"
            @dragover.prevent="isDragging = true"
            @dragleave.prevent="isDragging = false"
            @drop.prevent="handleDrop"
            @click="triggerFileInput"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2Z"/>
              <polyline points="14,2 14,8 20,8"/>
            </svg>
            <p>点击或拖拽文件到此处</p>
            <span class="upload-hint">支持 PDF、DOC、DOCX、JPG、PNG</span>
          </div>
          <input type="file" ref="fileInput" @change="handleFileSelect" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" hidden>

          <div class="upload-actions">
            <div v-if="uploadedFile" class="uploaded-file">
              <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2">
                <path d="M22,11.08V12a10,10 0 1,1-5.93-9.14"/>
                <polyline points="22,4 12,14.01 9,11.01"/>
              </svg>
              <span>{{ uploadedFile.name }}</span>
            </div>

            <button
              class="btn btn-primary"
              @click="parseResume"
              :disabled="!uploadedFile || isParsing"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" v-if="!isParsing">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2Z"/>
                <polyline points="14,2 14,8 20,8"/>
              </svg>
              <span v-else>解析中...</span>
              {{ isParsing ? 'AI 正在分析您的简历...' : '开始解析' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Step 2: 编辑信息 -->
      <div class="step-content" v-if="currentStep === 1">
        <div class="card edit-card">
          <h2 class="section-title">个人信息</h2>
          <div class="form-grid">
            <div class="form-group">
              <label>姓名</label>
              <input type="text" v-model="resume.personalInfo.name" placeholder="请输入姓名">
            </div>
            <div class="form-group">
              <label>手机号</label>
              <input type="tel" v-model="resume.personalInfo.phone" placeholder="请输入手机号">
            </div>
            <div class="form-group">
              <label>邮箱</label>
              <input type="email" v-model="resume.personalInfo.email" placeholder="请输入邮箱">
            </div>
            <div class="form-group">
              <label>教育背景</label>
              <input type="text" v-model="resume.personalInfo.education" placeholder="如：本科 - 计算机科学与技术 - 某某大学 - 2020届">
            </div>
          </div>

          <h2 class="section-title">专业技能</h2>
          <div class="tags-input">
            <span v-for="(skill, index) in resume.skills" :key="index" class="skill-tag">
              {{ skill }}
              <button @click="removeSkill(index)" class="remove-btn">×</button>
            </span>
            <input
              type="text"
              v-model="newSkill"
              @keyup.enter="addSkill"
              placeholder="添加技能标签"
              class="tag-input"
            >
          </div>

          <h2 class="section-title">工作经历</h2>
          <div class="work-experience">
            <div v-for="(exp, index) in resume.workExperience" :key="index" class="work-item">
              <div class="form-row">
                <div class="form-group">
                  <label>公司名称</label>
                  <input type="text" v-model="exp.company" placeholder="请输入公司名称">
                </div>
                <div class="form-group">
                  <label>职位</label>
                  <input type="text" v-model="exp.position" placeholder="请输入职位">
                </div>
                <div class="form-group">
                  <label>时间段</label>
                  <input type="text" v-model="exp.duration" placeholder="如：2020.07 - 至今">
                </div>
              </div>
              <div class="form-group">
                <label>主要职责</label>
                <textarea v-model="exp.description" rows="3" placeholder="请描述主要工作内容"></textarea>
              </div>
            </div>
            <button class="btn btn-outline" @click="addWorkExperience">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              添加工作经历
            </button>
          </div>

          <div class="button-group">
            <button class="btn btn-outline" @click="prevStep">上一步</button>
            <button class="btn btn-primary" @click="nextStep">下一步</button>
          </div>
        </div>
      </div>

      <!-- Step 3: 求职意向 -->
      <div class="step-content" v-if="currentStep === 2">
        <div class="card intention-card">
          <h2 class="section-title">求职意向</h2>

          <div class="form-grid">
            <div class="form-group">
              <label>目标岗位</label>
              <input type="text" v-model="resume.jobIntention.targetPosition" placeholder="如：Java后端开发工程师">
            </div>
            <div class="form-group">
              <label>目标行业</label>
              <select v-model="resume.jobIntention.targetIndustry">
                <option value="">请选择</option>
                <option value="互联网">互联网</option>
                <option value="金融">金融</option>
                <option value="制造业">制造业</option>
                <option value="其他">其他</option>
              </select>
            </div>
          </div>

          <div class="form-grid">
            <div class="form-group">
              <label>期望工作地点</label>
              <div class="checkbox-group">
                <label v-for="city in cities" :key="city" class="checkbox-label">
                  <input type="checkbox" :value="city" v-model="selectedCities">
                  {{ city }}
                </label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>期望薪资范围 (月薪)</label>
            <div class="salary-range">
              <input type="text" v-model="salaryMin" placeholder="最低" class="salary-input">
              <span>-</span>
              <input type="text" v-model="salaryMax" placeholder="最高" class="salary-input">
              <span>K</span>
            </div>
          </div>

          <div class="form-grid">
            <div class="form-group">
              <label>企业规模偏好</label>
              <div class="radio-group">
                <label class="radio-label">
                  <input type="radio" value="大厂" v-model="resume.jobIntention.companyScale">
                  大厂
                </label>
                <label class="radio-label">
                  <input type="radio" value="中型公司" v-model="resume.jobIntention.companyScale">
                  中型公司
                </label>
                <label class="radio-label">
                  <input type="radio" value="创业公司" v-model="resume.jobIntention.companyScale">
                  创业公司
                </label>
              </div>
            </div>
            <div class="form-group">
              <label>期望工作年限</label>
              <select v-model="resume.jobIntention.workYears">
                <option value="">请选择</option>
                <option value="应届">应届</option>
                <option value="1-3年">1-3年</option>
                <option value="3-5年">3-5年</option>
                <option value="5年以上">5年以上</option>
              </select>
            </div>
          </div>

          <div class="button-group">
            <button class="btn btn-outline" @click="prevStep">上一步</button>
            <button class="btn btn-accent" @click="goToMatch">
              开始匹配
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { sampleResume } from '@/data/mock.js'

const router = useRouter()

const steps = ['上传简历', '编辑信息', '求职意向']
const currentStep = ref(0)
const isDragging = ref(false)
const uploadedFile = ref(null)
const isParsing = ref(false)
const fileInput = ref(null)

const resume = ref({
  personalInfo: { ...sampleResume.personalInfo },
  skills: [...sampleResume.skills],
  workExperience: [...sampleResume.workExperience],
  jobIntention: { ...sampleResume.jobIntention }
})

const newSkill = ref('')
const selectedCities = ref(['北京', '上海', '杭州'])
const salaryMin = ref('20')
const salaryMax = ref('35')

const cities = ['北京', '上海', '杭州', '深圳', '广州', '成都']

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFileSelect = (e) => {
  const file = e.target.files[0]
  if (file) {
    uploadedFile.value = file
  }
}

const handleDrop = (e) => {
  isDragging.value = false
  const file = e.dataTransfer.files[0]
  if (file) {
    uploadedFile.value = file
  }
}

const parseResume = () => {
  isParsing.value = true
  setTimeout(() => {
    isParsing.value = false
    currentStep.value = 1
  }, 2000)
}

const addSkill = () => {
  if (newSkill.value.trim()) {
    resume.value.skills.push(newSkill.value.trim())
    newSkill.value = ''
  }
}

const removeSkill = (index) => {
  resume.value.skills.splice(index, 1)
}

const addWorkExperience = () => {
  resume.value.workExperience.push({
    company: '',
    position: '',
    duration: '',
    responsibilities: []
  })
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
  }
}

const goToMatch = () => {
  router.push('/matching')
}
</script>

<style scoped>
.resume-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%);
  padding-bottom: 60px;
}

.header {
  background: #FFFFFF;
  border-bottom: 1px solid #E5E7EB;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
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
  color: #64748B;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease-out;
  padding: 6px 12px;
  border-radius: 8px;
}

.back-btn:hover {
  color: #3B82F6;
  background: #EFF6FF;
}

.logo {
  font-size: 24px;
  font-weight: 800;
  color: #3B82F6;
  letter-spacing: 2px;
}

.header-title {
  font-size: 18px;
  font-weight: 600;
  color: #0F172A;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-avatar {
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

.progress-bar {
  max-width: 640px;
  margin: 48px auto 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  position: relative;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
  z-index: 1;
}

.step-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #E2E8F0;
  color: #64748B;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.progress-step.active .step-circle {
  background: linear-gradient(135deg, #3B82F6, #2563EB);
  color: white;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
  transform: scale(1.08);
}

.progress-step.completed .step-circle {
  background: linear-gradient(135deg, #10B981, #059669);
  color: white;
}

.step-label {
  font-size: 13px;
  color: #64748B;
  margin-top: 12px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.progress-step.active .step-label {
  color: #3B82F6;
}

.progress-step.completed .step-label {
  color: #10B981;
}

.step-line {
  position: absolute;
  top: 24px;
  left: 50%;
  width: 100%;
  height: 3px;
  background: #E2E8F0;
  z-index: -1;
  border-radius: 2px;
  transition: background 0.4s ease;
}

.progress-step.completed .step-line {
  background: linear-gradient(90deg, #10B981, #34D399);
}

.container {
  max-width: 840px;
  margin: 0 auto;
  padding: 0 24px;
}

.card {
  background: #FFFFFF;
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

/* 上传卡片 */
.upload-card {
  text-align: center;
}

.upload-icon {
  width: 96px;
  height: 96px;
  margin: 0 auto 32px;
  background: linear-gradient(135deg, #DBEAFE, #BFDBFE);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
  position: relative;
  overflow: hidden;
}

.upload-icon::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.3) 100%);
}

.upload-icon svg {
  width: 48px;
  height: 48px;
  color: #2563EB;
  position: relative;
  z-index: 1;
}

.upload-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #0F172A;
  letter-spacing: -0.03em;
}

.upload-desc {
  color: #64748B;
  margin-bottom: 40px;
  font-size: 15px;
  line-height: 1.6;
}

.upload-area {
  border: 2px dashed #CBD5E1;
  border-radius: 20px;
  padding: 72px 48px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  background: linear-gradient(180deg, #F8FAFC, #FFFFFF);
  position: relative;
  overflow: hidden;
}

.upload-area::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.upload-area:hover,
.upload-area.dragging {
  border-color: #3B82F6;
  background: #EFF6FF;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.12);
}

.upload-area:hover::before,
.upload-area.dragging::before {
  opacity: 1;
}

.upload-area svg {
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
  color: #94A3B8;
  transition: color 0.3s ease;
}

.upload-area:hover svg {
  color: #3B82F6;
}

.upload-area p {
  font-size: 17px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.upload-hint {
  font-size: 14px;
  color: #64748B;
}

.uploaded-file {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 14px 24px;
  background: linear-gradient(135deg, #ECFDF5, #D1FAE5);
  border-radius: 14px;
  font-size: 15px;
  color: #059669;
  font-weight: 600;
  box-shadow: 0 2px 12px rgba(16, 185, 129, 0.15);
}

.uploaded-file svg {
  width: 24px;
  height: 24px;
}

.upload-actions {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* 编辑卡片 */
.section-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #F1F5F9;
  color: #0F172A;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-title::before {
  content: '';
  width: 4px;
  height: 24px;
  background: linear-gradient(180deg, #3B82F6, #2563EB);
  border-radius: 2px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 32px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: #334155;
  letter-spacing: 0.01em;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 12px 16px;
  border: 1.5px solid #E2E8F0;
  border-radius: 12px;
  font-size: 15px;
  outline: none;
  transition: all 0.2s ease;
  font-family: inherit;
  background: #F8FAFC;
  color: #1E293B;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #3B82F6;
  background: #FFFFFF;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

.form-group textarea {
  resize: vertical;
  line-height: 1.6;
}

.tags-input {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 14px 16px;
  border: 1.5px solid #E2E8F0;
  border-radius: 14px;
  min-height: 56px;
  background: #F8FAFC;
  transition: all 0.2s ease;
}

.tags-input:focus-within {
  border-color: #3B82F6;
  background: #FFFFFF;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: linear-gradient(135deg, #DBEAFE, #BFDBFE);
  color: #1D4ED8;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.15);
  transition: all 0.2s ease;
}

.skill-tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.remove-btn {
  background: rgba(29, 78, 216, 0.15);
  border: none;
  color: #1D4ED8;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.remove-btn:hover {
  background: rgba(29, 78, 216, 0.25);
}

.tag-input {
  flex: 1;
  min-width: 140px;
  border: none;
  outline: none;
  font-size: 15px;
  background: transparent;
  color: #1E293B;
}

.tag-input::placeholder {
  color: #94A3B8;
}

.work-experience {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.work-item {
  padding: 24px;
  background: linear-gradient(135deg, #F8FAFC, #F1F5F9);
  border-radius: 16px;
  border: 1px solid #E2E8F0;
  transition: all 0.2s ease;
}

.work-item:hover {
  border-color: #CBD5E1;
  box-shadow: 0 4px 16px rgba(0,0,0,0.04);
}

.form-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 16px;
}

.checkbox-group,
.radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 8px 0;
}

.checkbox-label,
.radio-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  cursor: pointer;
  color: #475569;
  font-weight: 500;
  transition: color 0.2s ease;
  padding: 8px 12px;
  border-radius: 8px;
}

.checkbox-label:hover,
.radio-label:hover {
  color: #3B82F6;
  background: #EFF6FF;
}

.checkbox-label input,
.radio-label input {
  width: 18px;
  height: 18px;
  accent-color: #3B82F6;
}

.salary-range {
  display: flex;
  align-items: center;
  gap: 12px;
}

.salary-input {
  width: 88px;
  padding: 12px 16px;
  border: 1.5px solid #E2E8F0;
  border-radius: 12px;
  font-size: 15px;
  text-align: center;
  font-weight: 600;
  background: #F8FAFC;
  color: #1E293B;
  transition: all 0.2s ease;
}

.salary-input:focus {
  outline: none;
  border-color: #3B82F6;
  background: #FFFFFF;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

.salary-range span {
  color: #94A3B8;
  font-weight: 600;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  padding-top: 32px;
  border-top: 2px solid #F1F5F9;
}

.btn {
  padding: 14px 40px;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  letter-spacing: 0.01em;
}

.btn-primary {
  background: linear-gradient(135deg, #3B82F6, #2563EB);
  color: white;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.25);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.35);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.btn-accent {
  background: linear-gradient(135deg, #F59E0B, #D97706);
  color: white;
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.25);
}

.btn-accent:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.35);
}

.btn-outline {
  background: transparent;
  border: 1.5px solid #E2E8F0;
  color: #475569;
}

.btn-outline:hover {
  border-color: #3B82F6;
  color: #3B82F6;
  background: #EFF6FF;
}

@media (max-width: 768px) {
  .header {
    padding: 16px 20px;
  }

  .progress-bar {
    margin: 32px auto 24px;
    padding: 0 16px;
  }

  .step-circle {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }

  .step-line {
    top: 20px;
  }

  .container {
    padding: 0 20px;
  }

  .card {
    padding: 32px 24px;
    border-radius: 20px;
  }

  .upload-icon {
    width: 72px;
    height: 72px;
    margin: 0 auto 24px;
  }

  .upload-icon svg {
    width: 36px;
    height: 36px;
  }

  .upload-title {
    font-size: 22px;
  }

  .upload-area {
    padding: 48px 24px;
  }

  .upload-area svg {
    width: 40px;
    height: 40px;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .button-group {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .upload-actions {
    margin-top: 24px;
  }
}
</style>
