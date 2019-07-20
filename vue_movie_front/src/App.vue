<template>
     <div id="app">
      <nav class="navbar navbar-expand-sm navbar-fixed-top bg-dark navbar-dark">
        <div class="container-fluid">
          <div class="navbar-header">
          <router-link class="navbar-brand" :to="{name:'home'}">SIST Movie Center</router-link>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><router-link :to="{name:'home'}">Home</router-link></li>
            <li><router-link :to="{name:'find'}">영화 찾기</router-link></li>
            <li><router-link :to="{name:'news'}">영화 뉴스</router-link></li>
            <li><router-link :to="{name:'reserve'}">영화 예매</router-link></li>
          </ul>
        </div>
      </nav>

      
		<div class="container">
			<div class="jumbotron">
					<transition name="page" mode="out-in">
					  <router-view></router-view>
				  </transition>
				<!--iframe , include -->
			</div>
		</div>
   </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

	.page-enter-active, .page-leave-active {transition: opacity 1s, transform 1s;}
	.page-enter, .page-leave-to {opacity: 0;transform: translateX(-30%);}

</style>
