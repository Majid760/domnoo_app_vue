<template>
<header>
    <div class="container clear">
        <div class="logo"><img :src="LogoIcon" /></div>
        <div class="nav"><img :src="LogoMenu" @click="showSidePanel=!showSidePanel" /></div>
        <md-drawer :md-active.sync="showSidePanel" :md-right="true" class="side-drawer" />

    </div>
</header>
</template>

<script>
import Logo from '../../assets/images/logo.png'
import Menu from '../../assets/images/menu.png'

export default {
    data() {
        return {
            LogoIcon: Logo,
            LogoMenu: Menu,
            showSidePanel: false,
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
