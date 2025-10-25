<!-- RedPacketHistory.vue -->
<template>
  <div class="history-container">
    <h3>我的红包记录</h3>
    <div v-if="loading" class="loading">加载中...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="record-list">
      <div v-for="record in records" :key="record.id" class="record-item">
        <div class="record-amount">¥{{ record.amount.toFixed(2) }}</div>
        <div class="record-time">{{ formatTime(record.createdAt) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRedPacketStore } from '@/stores/redPacket'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const redPacketStore = useRedPacketStore()
const userStore = useUserStore()

const { records, loading, error } = storeToRefs(redPacketStore)
const { currentUser } = storeToRefs(userStore)

const formatTime = (timestamp: number) => {
  const date = new Date(timestamp)
  return date.toLocaleString()
}

// 获取当前用户的红包记录
const fetchUserRecords = async () => {
  if (currentUser.value) {
    await redPacketStore.fetchRecords(currentUser.value.id)
  }
}

fetchUserRecords()
</script>

<style scoped>
.history-container {
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.record-list {
  max-height: 400px;
  overflow-y: auto;
}

.record-item {
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.record-amount {
  color: #f56c6c;
  font-weight: bold;
}

.record-time {
  color: #999;
  font-size: 0.9em;
}

.loading {
  text-align: center;
  padding: 1rem;
  color: #666;
}

.error {
  color: #f56c6c;
  text-align: center;
  padding: 1rem;
}
</style>