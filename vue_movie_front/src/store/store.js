import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

// Vue=> Router , Vue => Vuex
// Vue.use(VueRouter) , Vue,use(Vuex)
//등록 

Vue.use(Vuex)
//date 공유할 저장 공간 
const store = new Vuex.Store({
    state : {
        movie_data :[],
        fruits:[
            {name:'사과',price:500},
            {name:'배',price:600},
            {name:'수박',price:550},
            {name:'메론',price:400},
            {name:'바나나',price:100},
            {name:'감',price:1000},
            {name:'체리',price:700}
        ]
    },
    mutations :{
        movieFind(payload){
            let _this = this;
            axios.get('http://localhost:3355/movie_list', config,{
                genre : payload
            }).then(function(result){
                _this.movie_data = result.data
            })
        }
    }
})

export default store;