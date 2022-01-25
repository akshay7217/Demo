<template>
<div>
 <button @click="tab">Node</button>
<button @click="tab:'php'">Node</button>
    <component: is="tab"/>
</div>
</template>
<script>
import Node from './Node.vue'
import Php from './Php.vue'
export default {
    name:"dyncom",
    components:{
        Node,
        Php
    },
    data(){
        return{
            tab:"Php"
        }
    }
}
</script>
