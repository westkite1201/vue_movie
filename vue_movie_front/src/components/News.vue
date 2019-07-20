<template id="news-page">
	<div class="row">

				<table class="table">
					<tr>
						<td>
							<table class="table" v-for="(n,key) in news_data" :key=key>
								<tr>
									<td>{{n.title}}({{n.author}})</td>
								</tr>
								<tr>
									<td>{{n.description}}</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</div>
		</template>
<script>
export default {
  name: 'news',
  props: {
    news_data : Array
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
