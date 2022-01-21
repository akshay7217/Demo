<template>
    <div>
        <p v-if="error.length">
            <b v-for="e in error" :key="e.error">
                <ul>
                    {{e}}
                </ul>
            </b>
        </p>
        <form @submit="login">
        <input type="text" placeholder="Enter your name"  v-model="username" />
        <br>
                <input type="password" placeholder="Enter your password" v-model="password"/>
                <br>
                <br>
                <button type="submit">Signup</button>
        </form>
    </div>
</template>
<script>
export default {
    name:"Formv",
    data(){
      return{
              username:null,
              password:null,
              error:[]
            
          
      }

    },methods:{
        login(e){
            this.error=[];
            if(this.username && this.password){
                console.log("no error has been found")
            }
            if(!this.username)      {
               this.error.push("please enter username")
            }
            if(!this.password){
                this.error.push("please enter password")
            }
            console.warn( "hello",this.error)
            e.preventDefault();
      
    }
    
    }
}
</script>