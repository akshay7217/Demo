<template>
    <div>
        <input type="text" placeholder="Enter your name" v-model="Signup.username" />
        <br>
                <input type="password" placeholder="Enter your password" v-model="Signup.password"/>
                <br>
                <p>Hobbies<p/>
                <input type="checkbox" id="cricket" value="cricket" v-model="Signup.hobbies"/>
                <label for="cricket">Cricket</label>
 <input type="checkbox" id="football" value="football" v-model="Signup.hobbies"/>
                <label for="football">Football</label>
                <br>
                              <p>Gender<p/>
                <input type="radio" id="male" value="male" v-model="Signup.gender"/>
                <label for="male">male</label>
 <input type="radio" id="female" value="female" v-model="Signup.gender"/>
                <label for="female">female</label>
                <br>
                <button v-on:click="SignupUser">Signup</button>
    </div>
</template>
<script>
export default {
    name:"Singup",
    data(){
      return{
          Singup:{
              username:null,
              password:null,
              hobbies:[],
              gender:null
          }
      }

    },
}
</script>