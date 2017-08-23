<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<li id="fetchdata" v-on:submit.prevent="getMusics()">
    	<input type="text"  placeholder="Rechercher" v-model="query"/>
    	<div class="results" v-if="results">
    		<div v-for="result in results">{{result}}</div>
    	</div>
	</li>
</template>

<script>

export default {
	name: 'fetchdata', 
	data (){
		return {
			query : '',
			results :'',
		}
	},
	methods : {
		getMusics(){

		}
	}
}
</script>