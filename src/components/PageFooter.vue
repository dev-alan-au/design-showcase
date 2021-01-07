<template>
	<footer>
		<div class="container">
			<ul v-if="socialLinks && socialLinks.length">
				<li v-for="{ id, icon, url, name } in socialLinks" :key="id">
					<a :href="url" :title="name">{{ icon }}</a>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script>
export default {
	name: "PageFooter",
	data() {
		return {
			socialLinks: this.$store.state.socialLinks
		};
	},
};
</script>

<style lang="scss">
.container {
	@include container;
}
</style>
