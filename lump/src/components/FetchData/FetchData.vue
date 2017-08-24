<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="fetchdata">
		<form action="#" v-on:submit.prevent="getMusics()">
    		<input type="text"  placeholder="Rechercher" v-model="query"/>
    	</form> 
    	<div class="results" v-if="Result"></div>
    	<div v-for="(result,index) in Result">
    		<p>{{result.title}}</p>
    		<!-- <div class="imgSong" :style="{ backgroundImage: 'url(' + result.image+ ')' }"></div> -->
    	</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {

	name: 'fetchdata', 
	data (){
		return {
			Result: [],
			query:'',

		}
	},
	methods:{
		getMusics(){
			axios.get('http://localhost:3000/api/1.0/music/search?authorization=dGhvbWFzMzp0ZXN0&search=' + this.query )
		.then((response) =>{
			console.log(response.data);
			 this.Result = response.data.result;
		})

		}
	},
}
</script>