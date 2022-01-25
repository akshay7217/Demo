// import Vue from 'vue'
// import App from './App.vue'
// import VueRouter from './vue-router'
// import Compo1 from './components/Compo1.vue'
// import Compo2 from './components/Compo2.vue'
// import { component } from 'vue/types/umd'
// Vue.use(VueRouter);
// const routes=[
//   {path:"/" ,component:Compo1},
//   {path:"/" ,component:Compo2}
// ]
// const router= new VueRouter({
//   routes
// })
// Vue.config.productionTip = false

// new Vue({
//   router:router,
//   render: h => h(App),
// }).$mount('#app')
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// import Home from './components/Home.vue';
import Compo1 from './components/Compo1.vue';
import App from './App.vue'
import Settings from './components/Settings.vue';
import PagenotFound from './components/PagenotFound.vue';

import Compo2 from './components/Compo2.vue';
const router = new VueRouter({
  routes: [
    { path: '/Compo1', component: Compo1 },
    { path: '/Compo2', component: Compo2 },
    { path: '/Settings', component: Settings },
    { path: '*', component: PagenotFound }
  ]
});
Vue.config.productionTip = false
new Vue({
    router:router,
    render: h => h(App),
  }).$mount('#app')
