<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

      <div>
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><router-link to="/compo1" class="nav-link">Compo1</router-link></li>
            <li class="nav-item"><router-link to="/compo2" class="nav-link">Compo2</router-link></li>
            <li class="nav-item"><router-link to="/settings" class="nav-link">Settings</router-link></li>
          </ul>
        </div>
      </nav>
   
        <router-view class="view"></router-view>
    </div>
 
    <!-- <settings/> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <home/>
   <sign/>
<users/>
<styling/> 
<singup/>
<databind/> -->
<!-- <formv/>
<empolyee/> -->
<!-- <deletepost/> -->
<!-- <empolyee/> -->
<!-- <Props v-bind:user="users"/> -->
  </div>
</template>
<script>
// import Settings from './components/Settings.vue';
// import FormValidation from './components/formv.vue';
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import Users from './components/Users.vue' 
// import Styling from './components/Styling.vue'
// import Databind from './components/Databind.vue'
// import Props from './components/Props.vue'
// import Singup from './components/Singup.vue'
// import Formv from './components/formv.vue'
// import Empolyee from './components/Empolyee.vue'
//  import Deletepost from './components/Deletepost.vue'
// import Empolyee from './components/Empolyee.vue';

// import Sign from './components/Sign.vue'
export default {
  name: 'App',
  components: {
    // Settings
    // Home,
    // Users,
    // Styling,
    // Databind,
    // Props,
    // Singup,
    // Formv
    // Sign
    // Empolyee,
  // Deletepost
 
  },

};
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
