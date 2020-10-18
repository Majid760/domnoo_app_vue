<template>
<div>
    <carousel :per-page="1" :paginationEnabled="false" :mouse-drag="true">
        <slide v-for="(slide,index) in slides" :key="index">
            <div class="slider-bck" :style="{'background':`url(${slide.bck})`}">
                <div class="container slider-container">
                    <div class="text">{{slide.text}}</div>
                    <div class="image"><img :src="slide.img" /></div>
                </div>
            </div>
        </slide>
    </carousel>
</div>
</template>

<script>
import {
    Carousel,
    Slide
} from 'vue-carousel';
import slideBack from '../../assets/images/slide_bck.jpg';
import slideBack2 from '../../assets/images/slide_bck2.jpg';
import pizzaOne from '../../assets/images/pizza_one.png';
import pizzaTwo from '../../assets/images/pizza_three.png';

export default {
    data() {
        return {
            slides: [{
                    text: '20% OFF ON ALL PIZZAS',
                    bck: slideBack,
                    img: pizzaOne
                },
                {
                    text: 'BUY TWO GET ONE FREE',
                    bck: slideBack2,
                    img: pizzaTwo
                }
            ]

        }
    },

    components: {
        Carousel,
        Slide
    },

}
</script>
