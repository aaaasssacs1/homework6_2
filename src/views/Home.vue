<template>
	<section class="grid">
		<div class="main-content">
			<BalanceCard />
			<div class="panel">
				<h3>进行中的红包</h3>
				<RedPacketList />
			</div>
		</div>
		<aside class="side-panel">
			<RedPacketHistory />
		</aside>
	</section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import BalanceCard from '@/components/BalanceCard.vue'
import RedPacketList from '@/components/RedPacketList.vue'
import RedPacketHistory from '@/components/RedPacketHistory.vue'

const userStore = useUserStore()
onMounted(() => { userStore.fetchProfile() })
</script>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: 1fr 300px;
	gap: 16px;
}

.main-content {
	display: grid;
	gap: 16px;
}

.panel {
	background: #fff;
	border-radius: 8px;
	padding: 16px;
	box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}

.side-panel {
	position: sticky;
	top: 16px;
	height: fit-content;
}
</style>


