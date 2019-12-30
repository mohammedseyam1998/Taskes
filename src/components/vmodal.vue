<template>


    <div >
        <button  @click="active = '1'">show the modal</button>
        <div class="mo-dal" v-if="active === '1'">
        <div >
        <div class="h-modal" >
            <h3  >The titel of modal here</h3>

        </div><hr>
        <slot ></slot><hr>
        <div class="f-modal">
            <h3> footer of modal here </h3>
            <button  @click="active='0'">Close</button>
        </div>
        </div>
        </div>
    </div>

</template>
<script>
export default {
    data(){
        return{
            active: '0'
        }

    },
    methods:{
        Toggle:function(event){
            event.target.classList.toggle("selected")
        }
    }
    
    
}



</script>
<style>
.mo-dal{
    min-height: 100px;
    width: 300px;
    background-color: rgb(10, 56, 56);
    padding: 10px;
    position: absolute;
    top:100px;
    right: 500px;
}
h3{
    color:  #f8f9fa;
}

hr{
    
     border: 1px solid #c3e6cb !important;
}
button{
    background-color: aqua;
}
.selected{
    background-color: rgb(236, 10, 10);
}

</style>