<template>
	<div class="frame">
    <div class="text">
      <div class="heading-area">
        <h1 v-if="heading || subheading" class="heading">
          <span v-if="heading" v-text="heading"></span>
          <span v-if="subheading" v-text="subheading"></span>
        </h1>
        <div v-if="heading || subheading" class="shadow" aria-hidden="true">
          <span v-if="heading" v-text="heading"></span>
          <span v-if="subheading" v-text="subheading"></span>
        </div>
      </div>
    </div>
		<div class="gallery" v-if="gallery && gallery.images">
			<div
				class="slide"
				v-for="({ url, name }, index) in gallery.images"
				:key="index"
				:class="{ active: activeIndex === index }"
			>
				<img
					:src="`${gallery.basePath ? gallery.basePath : ''}${url}`"
					:alt="name"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "Slideshow",
  props: ['heading', 'subheading'],
	data() {
		return {
			activeIndex: 0,
			timeout: 5000,
			gallery: this.$store.state.galleries.homepageHero,
		};
	},
	mounted() {
		if (this.gallery && this.gallery.images && this.gallery.images.length) {
			setInterval(() => {
				this.activeIndex =
					this.activeIndex >= this.gallery.images.length - 1
						? 0
						: this.activeIndex + 1;
			}, this.timeout);
		}
	},
};
</script>

<style lang="scss" scoped>
.frame {
  display: flex;
  position: relative;
  
  &::before {
    content: '';
    height: 100vh;
  }
}

.text {
  position: relative;
  z-index: 1;
  flex: 0 0 100%;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: $header-height 50px;

  .heading-area {
    flex: 0 0 auto;
    position: relative;
  }

  .heading, .shadow {
    font-family: map-get($fonts, 'hero-heading');
    max-width: 100%;
    font-size: 120px;
    line-height: 1.3em;

    span {
      display: flex;
      padding-right: 50px;

      &:nth-of-type(odd) {
        text-align: right;
        padding-left: 50px;
        padding-right: 0;
      }
    }
  }
}

.heading {
  position: relative;
  z-index: 1;
  color: purple;
}

.shadow {
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  margin-left: 10px;
  margin-top: 10px;
  color: pink;
  pointer-events: none;
}

.gallery {
	position: absolute;
  z-index: 0;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
	pointer-events: none;

	&::before {
		content: "";
		position: absolute;
		z-index: 3;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
    background-color: rgba($color-white, 0.25);
	}
}

.slide {
	position: absolute;
	z-index: 1;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	opacity: 0;
	transition: opacity 1s ease-in-out;

	&.active {
		z-index: 2;
		opacity: 1;
	}

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
}
</style>
