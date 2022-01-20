<template>
    <div>
  <h1>props</h1>
  <h3 v-for="user in users" :key="user.name">
{{user.name}}
{{user.email}}
{{user.id}}
</h3>
    </div>
</template>
<script>
export default {
    name:"Props",
props:['users']
}


</script>
<style scoped>

</style>