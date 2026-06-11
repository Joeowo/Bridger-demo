<template>
  <div class="matching-animation-page">
    <!-- AI分析过程展示 -->
    <div class="animation-container">
      <div class="ai-header">
        <h1 class="ai-title">AI 智能匹配中</h1>
        <p class="ai-subtitle">正在分析您的简历与岗位的匹配度</p>
      </div>

      <div class="process-wrapper">
        <div class="process-steps">
          <div
            v-for="(step, index) in processSteps"
            :key="index"
            class="process-step"
            :class="{ active: currentStep === index, complete: currentStep > index }"
          >
            <div class="step-left">
              <div class="step-indicator">
                <svg v-if="currentStep > index" class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                <div v-else class="step-dot"></div>
              </div>
              <div class="step-content">
                <div class="step-label">{{ step.label }}</div>
              </div>
            </div>

            <!-- 脉冲动画跟随当前步骤 -->
            <div class="step-pulse" v-if="currentStep === index">
              <div class="pulse-ring"></div>
              <div class="pulse-ring"></div>
              <div class="pulse-ring"></div>
            </div>
          </div>
        </div>

        <!-- 数据气泡区域 -->
        <div class="data-bubbles">
          <div
            v-for="(line, lineIndex) in currentDataLines"
            :key="lineIndex"
            class="data-bubble"
            :style="{ animationDelay: `${lineIndex * 0.15}s` }"
          >
            {{ line }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentStep = ref(-1)
const displayedLines = ref(0)

const processSteps = [
  {
    label: '分析求职者信息',
    dataLines: [
      '识别技能标签: Java, Spring Boot, MySQL',
      '提取工作经历: 某互联网公司 3年',
      '分析项目经验: 电商订单系统、用户中心'
    ]
  },
  {
    label: '搜集岗位信息',
    dataLines: [
      '扫描企业: Shopee, Lazada, Stripe, Notion...',
      '获取职位: Java后端、全栈工程师...',
      '解析要求: 薪资30-70K, 远程工作优先'
    ]
  },
  {
    label: '筛选匹配条件',
    dataLines: [
      '地点匹配: 深圳 ✓ 上海 ✓ 远程 ✓',
      '薪资范围: 符合20-35K以上目标',
      '经验要求: 3-5年 精准匹配'
    ]
  },
  {
    label: '调研历史数据',
    dataLines: [
      '分析面经: Shopee/Stripe面经已收录',
      '录用情况: 优质中小厂录用较少，竞争小',
      '薪资参考: 中小厂薪资普遍高于大厂'
    ]
  },
  {
    label: '深度匹配计算',
    dataLines: [
      'Shopee: 电商经验高度匹配 92%',
      'Lazada: 阿里技术栈契合 90%',
      'Stripe: 系统设计能力强 88%',
      'Notion: 全栈能力符合 86%'
    ]
  },
  {
    label: '生成匹配结果',
    dataLines: [
      '排序完成: 优质中小厂优先展示',
      '输出建议: Shopee需准备英语面试',
      '生成分析报告: 精确匹配完成 ✓'
    ]
  }
]

const currentDataLines = computed(() => {
  if (currentStep.value < 0 || currentStep.value >= processSteps.length) return []
  return processSteps[currentStep.value].dataLines.slice(0, displayedLines.value)
})

onMounted(() => {
  // 逐步展示每个步骤
  const runStep = (stepIndex) => {
    if (stepIndex >= processSteps.length) {
      // 最后一步完成后跳转到匹配页面
      setTimeout(() => {
        router.push('/match')
      }, 1500)
      return
    }

    currentStep.value = stepIndex
    displayedLines.value = 0

    const step = processSteps[stepIndex]
    let lineIndex = 0

    // 逐行显示当前步骤的数据
    const lineInterval = setInterval(() => {
      if (lineIndex < step.dataLines.length) {
        displayedLines.value = lineIndex + 1
        lineIndex++
      } else {
        clearInterval(lineInterval)
        // 数据行全部显示完后，等待一段时间再切换下一步
        setTimeout(() => {
          runStep(stepIndex + 1)
        }, 1200)
      }
    }, 600)
  }

  // 开始第一步
  setTimeout(() => {
    runStep(0)
  }, 500)
})
</script>

<style scoped>
.matching-animation-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #0F172A 0%, #1E293B 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.animation-container {
  max-width: 900px;
  width: 100%;
}

.ai-header {
  text-align: center;
  margin-bottom: 48px;
}

.ai-title {
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}

.ai-subtitle {
  font-size: 16px;
  color: #94A3B8;
}

.process-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.process-step {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  opacity: 0.4;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.process-step.active {
  opacity: 1;
  background: rgba(59, 130, 246, 0.12);
  border-color: rgba(59, 130, 246, 0.4);
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.15);
  transform: scale(1.02);
}

.process-step.complete {
  opacity: 0.5;
  background: rgba(16, 185, 129, 0.08);
  border-color: rgba(16, 185, 129, 0.2);
}

.step-left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.step-indicator {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-dot {
  width: 10px;
  height: 10px;
  background: #64748B;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.process-step.active .step-dot {
  background: #3B82F6;
  box-shadow: 0 0 16px #3B82F6;
  animation: dotPulse 1.2s ease-in-out infinite;
}

@keyframes dotPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.4);
    opacity: 0.7;
  }
}

.check-icon {
  width: 20px;
  height: 20px;
  color: #10B981;
  animation: checkIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes checkIn {
  from {
    transform: scale(0) rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

.step-content {
  flex: 1;
}

.step-label {
  font-size: 15px;
  font-weight: 600;
  color: white;
  letter-spacing: 0.01em;
}

/* 脉冲动画 - 跟随当前步骤 */
.step-pulse {
  width: 24px;
  height: 24px;
  position: relative;
  flex-shrink: 0;
}

.pulse-ring {
  position: absolute;
  inset: 0;
  border: 2px solid #3B82F6;
  border-radius: 50%;
  animation: pulseExpand 1.5s ease-out infinite;
}

.pulse-ring:nth-child(2) {
  animation-delay: 0.3s;
}

.pulse-ring:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes pulseExpand {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

/* 数据气泡区域 */
.data-bubbles {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 24px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.data-bubbles::before {
  content: '实时分析';
  position: absolute;
  top: -12px;
  left: 24px;
  background: linear-gradient(135deg, #3B82F6, #8B5CF6);
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 12px;
  letter-spacing: 0.05em;
}

.data-bubble {
  font-size: 14px;
  color: #E2E8F0;
  padding: 12px 16px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 10px;
  border-left: 3px solid #3B82F6;
  opacity: 0;
  animation: bubbleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  line-height: 1.5;
}

.data-bubble:nth-child(1) {
  border-left-color: #3B82F6;
  background: rgba(59, 130, 246, 0.1);
}

.data-bubble:nth-child(2) {
  border-left-color: #8B5CF6;
  background: rgba(139, 92, 246, 0.1);
}

.data-bubble:nth-child(3) {
  border-left-color: #EC4899;
  background: rgba(236, 72, 153, 0.1);
}

@keyframes bubbleIn {
  from {
    opacity: 0;
    transform: translateX(-16px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .process-wrapper {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .ai-title {
    font-size: 24px;
  }

  .process-step {
    padding: 14px 16px;
  }

  .step-label {
    font-size: 14px;
  }

  .data-bubbles {
    min-height: 200px;
  }

  .data-bubble {
    font-size: 13px;
  }
}
</style>
