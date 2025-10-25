<template>
	<li class="item">
		<div class="meta">
			<div class="title">{{ packet.title }}</div>
			<div class="sub">总额 ¥{{ packet.totalAmount.toFixed(2) }} · 数量 {{ packet.count }}</div>
			<div class="sub">剩余 ¥{{ packet.leftAmount.toFixed(2) }} · {{ packet.leftCount }} 个</div>
			<Countdown :startAt="packet.startAt" :endAt="packet.endAt" />
		</div>
		<GrabButton :packet="packet" />
	</li>
</template>

<script setup lang="ts">
import type { RedPacket } from '@/types'
import Countdown from './Countdown.vue'
import GrabButton from './GrabButton.vue'

defineProps<{ packet: RedPacket }>()
</script>

<style scoped>
.item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
	padding: 12px;
	background: #fff;
	border-radius: 8px;
	box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}
.meta .title { font-weight: 700; margin-bottom: 6px; }
.sub { color: #666; font-size: 12px; }
</style>


