<template>
  <div class="home">
    <div>
          <Spinner size="huge" message="Loading..." v-if="isLoading"/>
    </div>

    <DetailPage v-bind:detail_data = "detail_data"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DetailPage from '@/components/DetailPage.vue'
import axios from 'axios'
import Spinner from 'vue-simple-spinner'
export default {
  name: 'detail',
  
  components: {
    DetailPage,
    Spinner
  },

  data(){
	return {
        isLoading : false,
        detail_data:[],
        mno: 1,
	}
  },
  mounted:function(){
      this.mno = this.$route.params.mmo
      this.movieDetailData();
  },
  methods:{
      movieDetailData(){
          let _this = this;
          _this.isLoading = true;
          axios.get('http://localhost:3355/movie_detail',{
              params:{
               mno:_this.$route.params.mno 
              }
          }).then(function(result){
              _this.detail_data = result.data
              _this.isLoading = false;
          })
      },
  }
}
</script>