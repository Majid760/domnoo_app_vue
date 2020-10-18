<template>
<div class="anim_container">
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" appear>
        <div class="icon icon_phone" delay="0" left="100">
        </div>
    </transition>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        beforeEnter(el) {
            el.style.left = "-200px";
            el.style.opacity = 0;

        },
        enter(el, done) {
            let delay = parseInt(el.getAttribute('delay'));
            let left = parseInt(el.getAttribute('left'));
            Velocity(
                el, {
                    opacity: 1,
                    left
                }, {
                    delay,
                    duration: 600,
                    complete: done
                }
            )

        }
    }

}
</script>

<style scoped>
.anim_container {
    position: relative;
    height: 200px;
}

.icon {
    background-size: cover !important;
    position: absolute;
}

.icon_phone {
    background: url('../../assets/images/icons/icon-phone.png');
    height: 130px;
    width: 130px;
    top: 30px;
}
</style>
