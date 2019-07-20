<template>
    <div>
		<div class="row">
				<div class="col-md-3" v-for="(m,key) in movie_data" :key=key>
					<div class="thumbnail">
						<router-link v-bind:to="'/detail/'+m.mno">
						    <img :src="m.poster" alt="Lights" style="width:200px;height:230px">
							<div class="caption">
							    <p style="font-size: 8pt">{{m.title}}</p>
							</div>
						</router-link> 
					</div>
				</div>
			</div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    movie_data : Array
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
