<template>
<div class="akshau">
<h1>Users data</h1>
    <table border="1px solid">
<tr>
    <th>Id</th>
    <th>Name</th>
    <th>Email</th>
</tr>
<tr v-for="user in users" :key="user.id">
    <td>{{user.id}}</td>
    <td>{{user.name}}</td>
    <td>{{user.email}}</td>

</tr>
    </table>

</div>
</template>

<script>
export default {
    name:"Users",
   props:{
       data:String,
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
}

</script>