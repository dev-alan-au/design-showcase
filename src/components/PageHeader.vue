<template>
	<header
		class="site-header"
		:class="{ 'page-scrolled': pageHasScrolled }"
		@scroll.passive="console.log($event)"
	>
		<div class="container">
			<div class="menu-toggle">
				<button class="menu-button" @click="$emit('update:menuState')">
					<menu-icon :decorative="true" title="Toggle Menu" />
					<span>Menu</span>
				</button>
			</div>
			<div class="site-logo">
				<a href="/"><logo /></a>
			</div>
		</div>
	</header>
</template>

<script>
import MenuIcon from "vue3-material-design-icons/Menu.vue";
import Logo from "@/assets/img/logo-instill.vue";

export default {
	name: "PageHeader",
	props: ["pageHasScrolled"],
	emits: ["update:menuState"],
	components: {
		MenuIcon,
		Logo
	}
};
</script>

<style lang="scss" scoped>
.site-header {
	height: $header-height;
	position: fixed;
	z-index: map-get($z-index, top-nav);
	top: 0;
	left: 0;
	right: 0;
	transition: background-color 0.3s ease-in-out;

	&.page-scrolled {
		background-color: white;
	}
}

.container {
	@include container;
}

.menu-toggle {
	grid-column-start: 1;
	grid-column-end: 2;
	display: flex;
	align-items: center;
}

.menu-button {
	display: inline-flex;
	margin: 0;
	padding: 20px;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background-color: transparent;
	border: 0;
}

.site-logo {
	grid-column-start: 3;
	grid-column-end: 4;
}
</style>
