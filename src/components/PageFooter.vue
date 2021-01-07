<template>
	<footer class="footer">
		<div class="container">
			<div class="row">
				<ul v-if="socialLinks && socialLinks.length" class="social-media-list">
					<li v-for="{ id, icon, url, name } in socialLinks" :key="id">
						<a :href="url" :title="name">
							<template v-if="icon === 'globe'">
								<computer-icon :decorative="true" :size="svgSize" :title="name" />
							</template>
							<template v-else-if="icon === 'chat'">
								<chat-icon :decorative="true" :size="svgSize" :title="name" />
							</template>
							<template v-else-if="icon === 'instagram'">
								<instagram-icon :decorative="true" :size="svgSize" :title="name" />
							</template>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script>
import ChatIcon from "vue3-material-design-icons/ChatOutline.vue";
import ComputerIcon from "vue3-material-design-icons/LaptopMac.vue";
import InstagramIcon from "vue3-material-design-icons/Instagram.vue";

export default {
	name: "PageFooter",
	components: {
		ChatIcon,
		ComputerIcon,
		InstagramIcon
	},
	data() {
		return {
			svgSize: 18,
			socialLinks: this.$store.state.socialLinks
		};
	},
};
</script>

<style lang="scss" scoped>
.footer {
	background-color: $color-black;
	padding-top: 40px;
	padding-bottom: 40px;
}

.container {
	@include container;
}

.row {
	@include row;
}

.social-media-list {
	grid-column-start: 1;
	grid-column-end: 13;
	@include inline-list;
	justify-content: flex-end;

	li {
		padding: 0;
		margin: 0 0 0 10px;
		display: flex;
		flex: 0 0 30px;
		max-width: 30px;

		&:nth-of-type(1) {
			margin-left: 0;
		}

		a {
			color: $color-white;
			background-color: $color-black;
			max-width: 100%;
			flex: 0 0 100%;
			height: 30px;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			border-radius: 25%;
			transition: color .3s ease-in-out, background-color .3s ease-in-out, transform .5s ease-in-out;

			&:hover {
				background-color: $color-white;
				color: $color-black;
				transform: scale(1.2);
			}
		}
	}

	.material-design-icon {
		height: 18px;
	}
}
</style>
