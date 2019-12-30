<template>
<div>
      <h1>computed</h1>
      <label>comouted</label>
      <input type="text " v-model="first">
      <label>Last name</label>
      <input type="text " v-model="last">
      <label>Full name</label>
      <input type="text " :value="fullName" >
</div>
    
</template>
<script>
export default {
    data(){
        return{
            first:'',
            last:'',
            

        }
        
    },
    computed: {
        fullName:function(){
      return  this.first + ' ' + this.last 

    }
    }
}
</script>