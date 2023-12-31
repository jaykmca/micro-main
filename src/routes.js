import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from './components/HomeView.vue';
import About from './components/AboutView.vue';

Vue.use(VueRouter);
const baseUrl='/appone'


const routes = [
    { path: baseUrl +'/home', component: Home, name: 'home'},
    { path: baseUrl + '/about', component: About, name :'about'},
  ];


  const router = new VueRouter({
    
    base: '/appone', // Specify the base URL
    routes,
  });

  export default router;
