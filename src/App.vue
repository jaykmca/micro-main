<template>
  <div id="app">
    <h1>My Vue@2 App One</h1>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <SideBarMenu/> -->
    <aside class="sidebar">
      <SideBarMenu/>
    </aside>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import SideBarMenu from './components/SideBarMenu.vue'
//import { Component, Vue } from "vue-property-decorator";
//import SideBarMenu   from 'web_common/SideBarMenu'


export default {
  name: 'App',
  components: {
     //HelloWorld,
     //SideBarMenu
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> 
