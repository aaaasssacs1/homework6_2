<template>
	<ul class="list">
		<li v-if="loading" class="hint">加载中...</li>
		<li v-else-if="!records.length" class="hint">暂无记录</li>
		<li v-for="r in records" :key="r.id" class="item">
			<div>¥ {{ r.amount.toFixed(2) }}</div>
			<div class="sub">红包 {{ r.packetId }} · {{ new Date(r.createdAt).toLocaleString() }}</div>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRedPacketStore } from '@/stores/redPacket'
import { useUserStore } from '@/stores/user'

const redStore = useRedPacketStore()
const userStore = useUserStore()

const loading = computed(() => redStore.loading)
const records = computed(() => redStore.records)

onMounted(() => { redStore.fetchRecords(userStore.currentUserId) })
</script>

<style scoped>
.list { display: grid; gap: 12px; padding: 0; margin: 0; list-style: none; }
.item { background: #fff; border-radius: 8px; padding: 12px; box-shadow: 0 2px 6px rgba(0,0,0,0.06); }
.sub { color: #666; font-size: 12px; }
.hint { color: #999; }
</style>


