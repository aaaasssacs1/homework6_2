<template>
	<section class="panel">
		<h3>所有红包</h3>
		<RedPacketList />
	</section>
</template>

<script setup lang="ts">
import RedPacketList from '@/components/RedPacketList.vue'
</script>

<style scoped>
.panel { background: #fff; border-radius: 8px; padding: 16px; box-shadow: 0 2px 6px rgba(0,0,0,0.06); }
</style>


