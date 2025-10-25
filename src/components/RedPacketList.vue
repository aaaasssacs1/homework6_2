<template>
	<ul class="list">
		<li v-if="loading" class="hint">加载中...</li>
		<li v-else-if="!packets.length" class="hint">暂无红包</li>
		<RedPacketItem v-for="p in packets" :key="p.id" :packet="p" />
	</ul>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRedPacketStore } from '@/stores/redPacket'
import RedPacketItem from './RedPacketItem.vue'

const redStore = useRedPacketStore()
const loading = computed(() => redStore.loading)
const packets = computed(() => redStore.packets)

onMounted(() => { redStore.fetchPackets() })
</script>

<style scoped>
.list { display: grid; gap: 12px; padding: 0; margin: 0; list-style: none; }
.hint { color: #999; }
</style>


