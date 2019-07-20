<template id="detail-page">
			<div class="row">
				<table class="table">
					<tr>
						<td width=30% class="text-center" rowspan="5">
							<img :src="detail_data[0].poster" width="100%">
						</td>
						<th colspan="2" width=70% class="text-center success">{{detail_data[0].title}}</th>
					</tr>
					<tr>
						<td width=20% class="text-right">감독</td>
						<td width=50% class="text-left">{{detail_data[0].director}}</td>
					</tr>
					<tr>
						<td width=20% class="text-right">출연</td>
						<td width=50% class="text-left">{{detail_data[0].actor}}</td>
					</tr>
					<tr>
						<td width=20% class="text-right">장르</td>
						<td width=50% class="text-left">{{detail_data[0].genre}}</td>
					</tr>
					<tr>
						<td width=20% class="text-right">개봉일</td>
						<td width=50% class="text-left">{{detail_data[0].regdate}}</td>
					</tr>
					<tr>
						<td colspan="3">{{detail_data[0].story}}</td>
					</tr>
				</table>
			</div>
		</template>
<script>

export default {
  name: 'detail',
  props: {
    msg: String,
    detail_data : Array
  },
 mounted:function(){

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
