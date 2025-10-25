<template>
	<div class="app">
		<NavBar />
		<main class="container">
			<router-view />
		</main>
	</div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<style scoped>
.app {
	min-height: 100vh;
	background: #f7f7f7;
}
.container {
	max-width: 960px;
	margin: 0 auto;
	padding: 16px;
}
</style>


