<template>
	<section class="panel">
		<h3>创建红包</h3>
		<form class="form" @submit.prevent="onSubmit">
			<label>标题 <input v-model="title" required /></label>
			<label>总额 <input v-model.number="totalAmount" type="number" step="0.01" min="0.01" required /></label>
			<label>数量 <input v-model.number="count" type="number" min="1" required /></label>
			<label>开始时间 <input v-model="startAtStr" type="datetime-local" required /></label>
			<label>结束时间 <input v-model="endAtStr" type="datetime-local" required /></label>
			<button type="submit" :disabled="loading">{{ loading ? '提交中...' : '创建' }}</button>
		</form>
		<div class="hint" v-if="error">{{ error }}</div>
	</section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRedPacketStore } from '@/stores/redPacket'

const redStore = useRedPacketStore()
const loading = computed(() => redStore.loading)
const error = computed(() => redStore.error)

const title = ref('新年红包')
const totalAmount = ref(20)
const count = ref(5)

const now = new Date()
const startAtStr = ref(new Date(now.getTime() + 5_000).toISOString().slice(0,16))
const endAtStr = ref(new Date(now.getTime() + 60 * 60_000).toISOString().slice(0,16))

async function onSubmit() {
	await redStore.createPacket({
		title: title.value,
		totalAmount: Number(totalAmount.value),
		count: Number(count.value),
		startAt: new Date(startAtStr.value).getTime(),
		endAt: new Date(endAtStr.value).getTime(),
	})
	alert('创建成功')
}
</script>

<style scoped>
.panel { background: #fff; border-radius: 8px; padding: 16px; box-shadow: 0 2px 6px rgba(0,0,0,0.06); }
.form { display: grid; gap: 12px; max-width: 400px; }
label { display: grid; gap: 6px; font-size: 14px; color: #444; }
input { padding: 8px 10px; border: 1px solid #ddd; border-radius: 6px; }
.hint { margin-top: 8px; color: #c62828; }
</style>


