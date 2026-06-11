<template>
  <div class="ai-bubble">
    <div class="ai-header">
      <div class="ai-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
        </svg>
      </div>
      <span class="ai-title">AI 分析</span>
    </div>
    <div class="ai-content">
      <div class="ai-section" v-if="analysis.strongPoints?.length">
        <div class="ai-section-title">匹配点</div>
        <ul class="ai-list">
          <li v-for="(point, index) in analysis.strongPoints" :key="`strong-${index}`">{{ point }}</li>
        </ul>
      </div>
      <div class="ai-section" v-if="analysis.suggestions?.length">
        <div class="ai-section-title">建议准备</div>
        <ul class="ai-list">
          <li v-for="(suggestion, index) in analysis.suggestions" :key="`suggestion-${index}`">{{ suggestion }}</li>
        </ul>
      </div>
      <div class="ai-disclaimer">仅供参考，建议结合实际情况判断</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  analysis: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped>
.ai-bubble {
  background: linear-gradient(135deg, #E0E7FF, #EDE9FE);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
}

.ai-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.ai-icon {
  width: 28px;
  height: 28px;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ai-icon svg {
  width: 16px;
  height: 16px;
  color: #3B82F6;
}

.ai-title {
  font-size: 13px;
  font-weight: 600;
  color: #3B82F6;
}

.ai-content {
  font-size: 13px;
  line-height: 1.6;
  color: #111827;
}

.ai-section {
  margin-bottom: 12px;
}

.ai-section:last-child {
  margin-bottom: 0;
}

.ai-section-title {
  font-weight: 600;
  margin-bottom: 6px;
  color: #3B82F6;
}

.ai-list {
  list-style: none;
  padding-left: 0;
}

.ai-list li {
  position: relative;
  padding-left: 16px;
  margin-bottom: 4px;
}

.ai-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #3B82F6;
}

.ai-disclaimer {
  font-size: 11px;
  color: #6B7280;
  margin-top: 8px;
  font-style: italic;
}
</style>
