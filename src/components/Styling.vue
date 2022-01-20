<template>
    <div>
        <h1 class="Ext">class styling</h1>
         <h1 v-bind:style="{color:ak}">inbuilt css</h1>
    </div>
</template>
<script>
export default {
    name:"Styling",
  data()
  {
return{
    ak:'blue'
}
  }
}


</script>
<style scoped>
.Ext{
    color: Red;

}
</style>