<template>
  <div class="home">
	  		<table class="table">
				<tr>
					 <td>
						 Search:<input type=text size=20 class="input-sm" v-model="fd">
						 <input type=button value="검색" class="btn btn-sm btn-success"
						 	 v-on:click="newsAllData">
					 </td>
					</tr>
				</table>
    <News v-bind:news_data = "news_data"/>
  </div>
</template>

<script>
// @ is an alias to /src
import News from '@/components/News.vue'
import axios from 'axios'
import Spinner from 'vue-simple-spinner'
export default {
  name: 'detail',
  
  components: {
    News,
  },
    data(){
		return {
			news_data : [],
			fd:'영화'
		}
	},
	created:function(){
        this.newsAllData();
	},
	methods:{
		newsAllData(){
		let _this = this;
            axios.get('http://localhost:3355/news',{
				params:{
					fd : _this.fd
				}
			}).then(function(result){
				_this.news_data = result.data
			})
		}
	}
}
</script>