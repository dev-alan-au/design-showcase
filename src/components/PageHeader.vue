<template>
    <header class="site-header" :class="{'page-scrolled': pageHasScrolled}" @scroll.passive="console.log($event)">
        <div class="container">
            <div class="menu-toggle">
                <button class="menu-button" @click="$emit('update:menuState')">
                    <menu-icon :decorative="true" title="Toggle Menu" />
                    <span>Menu</span>
                </button>
            </div>
            <div class="site-logo">
                <a href="/">Logo</a>
            </div>
        </div>
    </header>
</template>


<script>
import MenuIcon from 'vue3-material-design-icons/Menu.vue';

export default {
    name: 'PageHeader',
    props: ['pageHasScrolled'],
    emits: ['update:menuState'],
    components: {
        MenuIcon
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/mixins.scss';

    .site-header {
        height: 100px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: background-color .3s ease-in-out;

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