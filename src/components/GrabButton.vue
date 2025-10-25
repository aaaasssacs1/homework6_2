<template>
	<button class="grab" :disabled="disabled || loading" @click="onGrab">
		{{ loading ? '抢中...' : (disabled ? disabledText : '抢红包') }}
	</button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRedPacketStore } from '@/stores/redPacket'
import type { RedPacket } from '@/types'

const props = defineProps<{ packet: RedPacket }>()
const userStore = useUserStore()
const redStore = useRedPacketStore()

const loading = computed(() => redStore.loading)
const disabled = computed(() => {
	const now = Date.now()
	return now < props.packet.startAt || now > props.packet.endAt || props.packet.leftCount <= 0
})
const disabledText = computed(() => {
	const now = Date.now()
	if (props.packet.leftCount <= 0) return '已抢完'
	if (now < props.packet.startAt) return '未开始'
	if (now > props.packet.endAt) return '已结束'
	return '不可用'
})

async function onGrab() {
	if (!userStore.currentUserId) return
	await redStore.grab(props.packet.id, userStore.currentUserId)
	await userStore.fetchProfile()
}
</script>

<style scoped>
.grab {
	background: #ff5252;
	color: #fff;
	border: none;
	padding: 10px 14px;
	border-radius: 6px;
	cursor: pointer;
}
.grab:disabled {
	background: #ccc;
	cursor: not-allowed;
}
</style>


