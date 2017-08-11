<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="musics" class="profil">
		<header-profil></header-profil>
		<div class="content">
			<h1>Bonjour</h1>
		</div>
	</div>
</template>

<script>

import HeaderProfil from '../HeaderProfil/HeaderProfil.vue'

export default {
	name: 'musics', 
	components: {
    	'header-profil': HeaderProfil
  	}
}

</script>