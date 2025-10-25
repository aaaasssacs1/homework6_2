<template>
	<nav class="nav">
		<div class="brand">红包中心</div>
		<ul class="links">
			<li><router-link to="/">首页</router-link></li>
			<li><router-link to="/packets">红包</router-link></li>
			<li><router-link to="/records">记录</router-link></li>
			<li><router-link to="/admin">管理</router-link></li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
.nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 16px;
	background: #c62828;
	color: #fff;
}
.brand {
	font-weight: 700;
}
.links {
	display: flex;
	gap: 12px;
	list-style: none;
	margin: 0;
	padding: 0;
}
.links a {
	color: #fff;
	text-decoration: none;
}
.links a.router-link-active {
	text-decoration: underline;
}
</style>


