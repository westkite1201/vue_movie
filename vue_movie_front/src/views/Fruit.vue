<template>
  <div class="home">
    <FruitsList/>
  </div>
</template>

<script>
// @ is an alias to /src
import FruitsList from '@/components/FruitsList.vue'
import axios from 'axios'

export default {
  name: 'Fruit',
  
  components: {
   FruitsList
  },
    data(){
		return {

		}
	},
	created:function(){
      
	},
	methods:{
	
		}
	}

</script>