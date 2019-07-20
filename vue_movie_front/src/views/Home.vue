<template>
  <div class="home">
    <Home msg="Welcome to Your Vue.js App"
          v-bind:movie_data = "movie_data"/>
    <div>
          <Spinner size="huge" message="Loading..." v-if="isLoading"/>
    </div>


    <ul class="pager">
				<li class="previous"><button v-on:click="prevPage">이전</button></li>
				<li class="next"><button v-on:click="nextPage">다음</button></li>
		</ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import axios from 'axios'
import Spinner from 'vue-simple-spinner'

export default {
  name: 'home',
  
  components: {
    Home,
    Spinner
  },

  data(){
		return {
      isLoading : false,
			movie_data:[],
			page:1
		}
	},

  created: function(){
      this.movieListData()
  },

  methods:{
      movieListData(){
          let _this = this;
          _this.isLoading = true;
          axios.get('http://localhost:3355/movie_list',{
              params:{
               page:_this.page   
              }
          }).then(function(result){
              _this.movie_data = result.data
              _this.isLoading = false;
          })
      },
      prevPage(){
        this.page = this.page > 0 ? this.page -1 : this.page;
        this.movieListData();

      },
      nextPage(){
        this.page = this.page < 90 ? this.page + 1 : this.page;
        this.movieListData();

      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
