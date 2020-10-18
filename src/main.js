import Vue from 'vue'
import App from './App.vue'
import { MdButton,MdDrawer,MdCard} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
Vue.use(MdButton)
Vue.use(MdDrawer)
Vue.use(MdCard)

//vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource)
Vue.http.options.root ='https://domnoo-a0e05.firebaseio.com/'
//vue-scroll-reveal

import VueScrollReveal from 'vue-scroll-reveal'
Vue.use(VueScrollReveal,{
  duration:800,
  scale:1,
  distance:'60px',

})



Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
 

