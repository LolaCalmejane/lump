<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<li id="fetchdata">
    	<input type="text"  placeholder="Rechercher"/>
    	<div class="results">
    	</div>
	</li>
</template>

<script>
export default {
	name: 'fetchdata', 
	data (){
		return {
		}
	},
	computed: {
		searchMusic: function () {
			axios.get('http://localhost:3000/api/1.0/music/search')
		}
	},
	methods: {
	
	}
}
</script>