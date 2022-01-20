<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <home/>
    
<users/>
<styling/> -->
<databind/>
<Props v-bind:user="users"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import Users from './components/Users.vue'
// import Styling from './components/Styling.vue'
import Databind from './components/Databind.vue'
import Props from './components/Props.vue'
export default {
  name: 'App',
  components: {
    // Home,
    // Users,
    // Styling,
    Databind,
    Props
  },
  data(){
     return{
         users:[
             {id:1,name:"akshay",email:"akshay@gmai.com"},
              {id:2,name:"Raj",email:"Raj@gmai.com"},
               {id:3,name:"Satyam",email:"satyam@gmai.com"},
                {id:4,name:"mohan",email:"mohan@gmai.com"}
         ]
       }
  }
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
