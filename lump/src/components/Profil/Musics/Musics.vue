<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="musics" class="profil musics">
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
				:data="gridData"
				:columns="gridColumns"
				:filter-key="searchQuery">
			</musics-grid>
		</div>
	</div>
</template>

<script>

import HeaderProfil from '../HeaderProfil/HeaderProfil.vue'
import MusicsGrid from '../MusicsGrid/MusicsGrid.vue'

export default {
	name: 'musics', 
	components: {
    	'header-profil': HeaderProfil,
    	'musics-grid': MusicsGrid
  	},
  	data: function () {
	    return {
		    searchQuery: '',
		    gridColumns: ['titre', 'date', 'durée'],
		    gridData: [
		      { titre: 'Pluie fine - Corine (Polo and Pan remix) ', date: '17/05/2016', durée : '3:00' },
		      { titre: 'Bossa Muffin - Flavia Cohelo', date: '17/05/2016', durée : '3:00' },
		      { titre: 'Good together - honne', date: '17/05/2016', durée : '3:00' },
		      { titre: 'I know after laugther - Mounika.', date: '17/05/2016', durée : '3:00' },
		      { titre: 'Porcelain - Moby', date: '17/05/2016', durée : '3:00' },
		      { titre: 'Sunset lover - Petit biscuit', date: '17/05/2016', durée : '3:00' },
		      { titre: 'J\’ai vu - Romeo Elvis', date: '17/05/2016', durée : '3:00' },
		      { titre: 'Got Me (Official Lyric Video) - St. South', date: '17/05/2016', durée : '3:00' },
		      { titre: 'Easy - Son Lux', date: '17/05/2016', durée : '3:00' },
		      { titre: 'Alek Lee - Sfarot', date: '17/05/2016', durée : '3:00' }
		    ]
		}
	}	
}

</script>