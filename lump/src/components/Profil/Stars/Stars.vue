<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="stars">
		<static></static> 
		<header-profil></header-profil>
		<div class="content">
			<div class="co">
			<!--search bar-->
				<form id="search">
					<span class="iconSearch"></span>
					<input class="bar iconSearch body-text" type ="text" >
				</form>
			<!--future fonctionnalité-->
				<div class="future-features">
					<p class="starsIcon"></p>
					<p class="subtitle-gold">Fonctionalité à venir</p>
				</div>	
			</div>
		</div>
	</div>
</template>


<script>
import HeaderProfil from '../HeaderProfil/HeaderProfil.vue'
import Static from '../../Static/Static.vue'

export default {
	name: 'stars', 
	components: {
    	'header-profil': HeaderProfil,
    	'static' : Static
  	},
  	data: function () {
	    return {
		}
	}	
}
</script>