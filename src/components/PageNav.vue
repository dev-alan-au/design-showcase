<template>
    <nav class="site-nav">
        <template v-if="menuItems && menuItems.length">
            <ul>
                <li v-for="{ key, route, isActive, name, icon } in menuItems" :key="key">
                    <a :href="route" :class="{active: isActive}">
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
                        </span>
                        <span class="text">{{ name }}</span>
                    </a>
                </li>
            </ul>
        </template>
    </nav>
</template>

<script>
import HomeIcon from 'vue3-material-design-icons/Home.vue';
import NinjaIcon from 'vue3-material-design-icons/Ninja.vue';
import PackageIcon from 'vue3-material-design-icons/Package.vue';

export default {
    name: 'PageNav',
    props: ['menuItems'],
    components: {
        HomeIcon,
        NinjaIcon,
        PackageIcon
    }
}
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
        transition: transform .5s ease-in-out;
    }

    html[data-menu-visible="true"] {
        .site-nav {
            transform: translateX(0);
        }
    }
</style>