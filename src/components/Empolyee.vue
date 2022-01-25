<template>
    <div>
      <form @submit="Users" method="post">
        <input type="text"  name="author" placeholder="Enter author" v-model="users.author" />
        <br>
                <input type="text"  name="title" placeholder="Enter Title"  v-model="users.title" />
                <br>
                <br>
                <button type="submit">Add emoloyee</button>
        </form>
        
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    name:"Empolyee",
    data(){
        return {
            users:{
                  author:null,
                  title:null

            }
        }
    
    },methods:{
Users(e){
  this.axios.post("http://localhost:3000/posts",this.users).then((response)=>{
      console.warn("response",response)
      alert("users added")

  })
    e.preventDefault()
    console.warn(this.users)

    
}
    }
}
</script>