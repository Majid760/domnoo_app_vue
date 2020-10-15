<template>
<div>
    <compHeader></compHeader>
    <div>
        <compFeatured></compFeatured>
        <compMenu></compMenu>
    </div>
    <compFooter></compFooter>
</div>
</template>

<script>
import compHeader from './components/header-footer/Header.vue'
import compFooter from './components/header-footer/Footer.vue'
import compFeatured from './components/featured/index.vue'
import compMenu from './components/menu/index.vue'

export default {
    data() {
        return {

        }
    },
    components: {
        compFooter,
        compHeader,
        compFeatured,
        compMenu
    }

}
</script>

<style>
@import './assets/style.css';
</style>
