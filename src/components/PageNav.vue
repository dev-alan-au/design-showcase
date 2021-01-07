<template>
	<nav class="site-nav">
		<ul v-if="menuItems && menuItems.length">
			<li
				v-for="{ key, route, isActive, name, icon } in menuItems"
				:key="key"
			>
				<router-link :to="route" :class="{ active: isActive }">
					<span v-if="icon" class="icon">
						<!-- Reactive overhead when using a dynamic component; using if instead -->
						<template v-if="icon === 'home'">
							<home-icon :decorative="true" />
						</template>
						<template v-else-if="icon === 'ninja'">
							<ninja-icon :decorative="true" />
						</template>
						<template v-else-if="icon === 'package'">
							<package-icon :decorative="true" />
						</template>
						<template v-else-if="icon === 'human'">
							<human-child-icon :decorative="true" />
						</template>
					</span>
					<span class="text">{{ name }}</span>
				</router-link>
			</li>
		</ul>
		<ul v-if="socialLinks && socialLinks.length" class="social-media-list">
			<li v-for="{ id, icon, url, name } in socialLinks" :key="id">
				<a :href="url" :title="name">
					<template v-if="icon === 'globe'">
						<computer-icon :decorative="true" />
					</template>
					<template v-else-if="icon === 'chat'">
						<chat-icon :decorative="true" />
					</template>
					<template v-else-if="icon === 'instagram'">
						<instagram-icon :decorative="true" />
					</template>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
import HomeIcon from "vue3-material-design-icons/Home.vue";
import NinjaIcon from "vue3-material-design-icons/Ninja.vue";
import PackageIcon from "vue3-material-design-icons/Package.vue";
import HumanChildIcon from "vue3-material-design-icons/HumanChild";
import ChatIcon from "vue3-material-design-icons/ChatOutline.vue";
import ComputerIcon from "vue3-material-design-icons/LaptopMac.vue";
import InstagramIcon from "vue3-material-design-icons/Instagram.vue";

export default {
	name: "PageNav",
	data() {
		return {
			menuItems: this.$store.state.menuItems,
			socialLinks: this.$store.state.socialLinks
		};
	},
	components: {
		HomeIcon,
		NinjaIcon,
		PackageIcon,
		HumanChildIcon,
		ChatIcon,
		ComputerIcon,
		InstagramIcon,
	},
};
</script>

<style lang="scss" scoped>
.site-nav {
	width: 300px;
	position: fixed;
	z-index: map-get($z-index, side-nav);
	left: 0;
	top: 0;
	bottom: 0;
	background: blueviolet;
	transform: translateX(-300px);
	transition: transform 0.5s ease-in-out;
}

html[data-menu-visible="true"] {
	.site-nav {
		transform: translateX(0);
	}
}
</style>
