<template>
<div class="call_us_container">
    <div class="container">
        <div class="first" v-scroll-reveal.reset="{delay:200,scale:2}">
            <h1>Hungry ?</h1>
        </div>
        <div class="second" v-scroll-reveal.reset="{delay:600,scale:2}">
            <p>Second</p>
            <compAnim></compAnim>
        </div>
        <div class="third">
            <span>Give us call</span><span>6478-3432</span>
        </div>

    </div>
</div>
</template>

<script>
import compAnim from './anim.vue';
export default {
    components: {
        compAnim,
    }

}
</script>

<style scoped>

</style>
