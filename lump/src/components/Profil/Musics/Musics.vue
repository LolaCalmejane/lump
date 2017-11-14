<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="musics" class="profil musics">
		<static></static> 
		<header-profil></header-profil>
		<div class="content">
			<form id="search">
				<span class="iconSearch"></span>
				<input class="
      			bar iconSearch body-text" type ="text" name="query" v-model="searchQuery">
			</form>
		</div>

		<div class="musics-content">
			<musics-grid
				:data="gridMusics"
				:columns="gridColumns"
				:filter-key="searchQuery">
			</musics-grid>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import HeaderProfil from '../HeaderProfil/HeaderProfil.vue'
import MusicsGrid from '../MusicsGrid/MusicsGrid.vue'
import Static from '../../Static/Static.vue'

export default {
	name: 'musics', 
	components: {
    	'header-profil': HeaderProfil,
    	'musics-grid': MusicsGrid,
    	'static' : Static
  	},
  	data: function () {
	    return {
		    searchQuery: '',
		    gridColumns: ['title', 'channel'],
		    gridMusics: [
		    	{title:'', channel:''}
		    ],
		}
	},
	mounted() {
		axios.get("http://localhost:3000/api/1.0/user/login?authorization="+ localStorage.getItem('authUser'), this.gridMusics)
		.then((response) =>{ 
	   		console.log(response.data);
			this.gridMusics = response.data.result.musics;
        });
	}	
}

</script>