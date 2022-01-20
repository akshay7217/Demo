<template>
    <div>
      <h1 class="abs">{{message}}</h1>
      <textarea type="text" v-model="message"/>
    </div>
</template>
<script>
export default {
    name:"Databind",
data(){
    return{
        message:"hello this is data binding example"
    }
}
}


</script>
<style scoped>
.abs{
    white-space: pre-line;
}
</style>