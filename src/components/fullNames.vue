<template>
<div>
      <h1>watch</h1>
      <label>First name</label>
      <input type="text " v-model="first">
      <label>Last name</label>
      <input type="text " v-model="last">
      <label>Full name</label>
      <input type="text " :value="fullName"  >
</div>
    
</template>
<script>
export default {
    data(){
        return{
            first:'',
            last:'',
            fullName:''
            

        }
        
    },
    computed: {
        

    },
    watch:{
       first:function(v){
      this.fullName= v  
     },
     last:function(v){
      this.fullName= this.first + ' ' + v 
     }

    }
}
</script>