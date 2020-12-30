<template>
    <header class="header">
        <div class="container">
            <div class="menu-toggle">
                <button class="menu-button">
                    <menu-icon :decorative="true" title="Toggle Menu" />
                    <span>Menu</span>
                </button>
            </div>
            <page-nav :menu-items="menuItems" />
        </div>
    </header>
</template>


<script>
import MenuIcon from 'vue3-material-design-icons/Menu.vue';
import PageNav from '@/components/PageNav';

export default {
    name: 'PageHeader',
    props: ['menuItems'],
    components: {
        MenuIcon,
        PageNav
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/mixins.scss';

    .header {
        height: 100px;
    }

    .container {
        @include container;
    }

    .row {
        @include row;
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
</style>