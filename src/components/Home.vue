<template>
<div class="akshau">
    <h1 v-if="show">This is a Home Component</h1>
<h1 v-else>This is a Home Component2</h1>
    <button v-on:click="hello()">clcik</button>
    
</div>
</template>

<script>
export default {
    name:"Home",
   props:{
       data:String,
   },
   data(){
return{show:true}
   },
   methods:{
hello(){
    this.show=!this.show
}
   }
   


}

</script>