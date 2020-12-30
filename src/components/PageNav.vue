<template>
    <nav>
        <template v-if="menuItems && menuItems.length">
            <ul>
                <li v-for="{ key, route, isActive, name} in menuItems" :key="key">
                    <a :href="route" :class="{active: isActive}">{{ name }}</a>
                </li>
            </ul>
        </template>
    </nav>
</template>

<script>
export default {
    name: 'PageNav',
    props: ['menuItems']
}
</script>

<style lang="scss">
    @import '../assets/scss/settings.scss';
    @import '../assets/scss/mixins.scss';

    .active {
        color: $color-blue;
    }
</style>