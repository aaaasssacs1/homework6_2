<template>
	<span>{{ text }}</span>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watchEffect } from 'vue'

const props = defineProps<{ startAt: number; endAt: number }>()
const text = ref('')
let timer: number | undefined

function update() {
	const now = Date.now()
	if (now < props.startAt) {
		const ms = props.startAt - now
		text.value = `距开始 ${format(ms)}`
		return
	}
	if (now > props.endAt) {
		text.value = '已结束'
		return
	}
	text.value = `进行中，剩余 ${format(props.endAt - now)}`
}

function format(ms: number) {
	const s = Math.max(0, Math.floor(ms / 1000))
	const h = Math.floor(s / 3600)
	const m = Math.floor((s % 3600) / 60)
	const sec = s % 60
	return `${pad(h)}:${pad(m)}:${pad(sec)}`
}
function pad(n: number) { return n.toString().padStart(2, '0') }

onMounted(() => {
	update()
	timer = window.setInterval(update, 1000)
})
onUnmounted(() => { if (timer) window.clearInterval(timer) })
watchEffect(update)
</script>


