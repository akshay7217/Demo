<template>
    <div>
     <h1>Delete API in Vue</h1>
     <table>
         <tr>
             <th>Name</th>
             <th>Author</th>
             <th>Id</th>
             <th>Action</th>
         </tr>
         <tr v-for="user in users" v-bind:key="user.id">
             <td>{{user.title}}</td>
               <td>{{user.author}}</td>
                 <td>{{user.id}}</td>
                 <td><button v-on:click="DeleteUser(user.id)"> Delete </button></td>
         </tr>
     </table>
      
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    name:"deletepost",
    data(){
        return {
            users:null
        }
    
    }
    ,methods:{
getUser(){
         this.axios.get("http://localhost:3000/posts").then((response)=>{
      console.warn(response)
      this.users=response.data

  })
},
    DeleteUser(id){
         this.axios.delete("http://localhost:3000/posts/"+id).then((response)=>{
      console.warn(response)
   this.getUser()
   alert("Users deleted")

  })
    }
  
    },  mounted(){
        this.getUser()
    },
    
    
}
</script>