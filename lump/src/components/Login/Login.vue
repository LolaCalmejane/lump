<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="login" class="login">
		<div class="content">
			<img src="../../assets/images/login-logo.png" alt="Logo-lump">
			<h2 class="subtitle-white title-connexion">Connexion</h2>
			<div class="form-connexion">
		        <input type="text" class="pseudo" placeholder="Pseudo">
		        <input type="password" class="mdp" placeholder="Mot de passe">
		        <button class="buttonConnexion subtitle-white">Se connecter</button>
      		</div>
      		<div class="ifNot">
	      		<p class="body-text">Vous n’êtes pas encore inscrit ?</p>
	      		<router-link to ="/inscription"><p class="body-text">S’inscrire</p></router-link>
      		</div>
      </div>
	</div>
</template>




<!-- SCRIPT -->
<script>
	export default {
		data() {
			return {
			}
		},

		methods: {

		}

	}
</script>