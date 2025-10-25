<template>
	<div class="card">
		<div class="title">余额</div>
		<div class="amount">¥ {{ balance.toFixed(2) }}</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const balance = computed(() => userStore.profile?.balance ?? 0)
</script>

<style scoped>
.card {
	background: #fff;
	border-radius: 8px;
	padding: 16px;
	box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}
.title { color: #666; margin-bottom: 6px; }
.amount { font-size: 24px; font-weight: 700; }
</style>


