<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="calendar">
		<static></static> 
		<header-profil></header-profil>
		<div class="content">
			<div class="co">
			<!--search bar-->
				<form id="search">
					<span class="iconSearch"></span>
					<input class="bar iconSearch body-text" type ="text">
				</form>
			<!--future fonctionnalité-->
				<div class="future-features">
					<p class="calendarIcon"></p>
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
	name: 'calendar', 
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