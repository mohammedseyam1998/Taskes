<template>
    
        <select>
            <option  v-for="(m ,index) in options" :key = "index"> {{m.text}} </option>
        </select>
    
</template>
<script>

export default {
  data(){
      return {
          options:[{text:'mohammed'},{text:'ahmed'},{text:'ali'},{text:'moahmoud'}]
      }
  }
    
}
</script>