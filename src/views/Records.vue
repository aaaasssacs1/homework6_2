<template>
	<section class="panel">
		<h3>我的记录</h3>
		<RecordList />
	</section>
</template>

<script setup lang="ts">
import RecordList from '@/components/RecordList.vue'
</script>

<style scoped>
.panel { background: #fff; border-radius: 8px; padding: 16px; box-shadow: 0 2px 6px rgba(0,0,0,0.06); }
</style>


