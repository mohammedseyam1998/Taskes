<template>
  <div id="app">
    <v-button></v-button> <br><br>
    <v-label></v-label><br><br>
    <v-input></v-input><br><br>
    <v-textarea></v-textarea><br><br>
    <v-checkbox></v-checkbox><br><br>
    <v-select></v-select><br><br>
    <v-radio></v-radio>
    <v-vslot>
      <p> Hello mohammed from slot  </p>
      <p v:slot:ds > {{titel}} </p>
      <p v:slot:dss>hhhhhh</p>
    </v-vslot>
    <v-vmodal >
      <p>change the body</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem sunt praesentium consequuntur veritatis quo eveniet laudantium itaque libero culpa molestias, consequatur quaerat! Illo accusantium nostrum sit, odit dolore facilis.</p>
    </v-vmodal>
    <div>
      <h1>Convert dolar to shakel by watch</h1>
      <label>Enter the coin in $</label>
      <input type="text " v-model="dolar">
      <label>equal in shakel</label>
      <input type="text " v-model="shakel">
    </div>
    <v-fullNamec></v-fullNamec>
    <v-fullNames></v-fullNames><br><hr>
      
    <!-- <p>{{count}} </p> -->
    <p> {{addCount}} </p>
    <button @click="increment"> counter</button>
    <p> {{count}} </p>
      <hr>
    
     <v-pProps :age ='age'></v-pProps>
  </div>
  
</template>

<script>
import vslot from './components/vslot'
import vmodal from './components/vmodal'
import fullNmaec from './components/fullNamec'
import fullNmaes from './components/fullNames'
import pProps from './components/pProps'
import {mapGetters , mapMutations, mapState}from 'vuex'




export default {
  data(){
    return {
      titel:'Hello mohammed this is a dynamic slot',
      dolar:0,
      shakel:0,
      age : 19
      
      
    }
  },
  methods:{
    ...mapMutations(['increment'])
  },
  computed:{
    ...mapGetters(['addCount']),
    ...mapState(['count'])
    
    
    },

 
 
  components:{
    'v-vslot':vslot,
    'v-vmodal':vmodal,
    'v-fullNamec':fullNmaec,
    'v-fullNames':fullNmaes,
    'v-pProps':pProps
    

  },
  watch:{
    dolar :function(v){
      this.shakel = v * 3.5 ; 
    },
    shakel :function(v){
      this.dolar = v / 3.5 ; 
    },
   
  }
  

  
}
</script>

<style scope>
p{
  color: rgb(235, 14, 14);
}
#app{
  padding: 10px;
  margin: 10px;
}
</style>
