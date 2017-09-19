<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="login" class="login">
		<div class="">
			<img src="../../assets/images/login-logo.png" alt="Logo-lump">
			<h2 class="subtitle-white title-connexion">Connexion</h2>
			<form v-on:submit.prevent="connexion(Result)">
				<div class="form-connexion">
			        <input type="text" v-model.trim="loginIt.login" class="pseudo" placeholder="Pseudo" required>
			        <input type="password" class="mdp" v-model.trim="loginIt.password" placeholder="Mot de passe" required>
			        <button class="buttonConnexion subtitle-white">Se connecter</button>
	      		</div>
	      	</form>
	      		<div class="ifNot">
		      		<p class="detail">Vous n’êtes pas encore inscrit ?</p>
		      		<router-link to ="/inscription"><p class="body-text">S’inscrire</p></router-link>
	      		</div>
	      	
      </div>
	</div>
</template>

<!-- SCRIPT -->
<script>
import axios from 'axios'

	export default {
		data() {
			return {
				Result: [],
				loginIt : {
					login:'',
					password:''
				}
			}
		},
		methods: {
            connexion(Result) {
                axios.get("http://localhost:3000/api/1.0/user/login?authorization="+ btoa(this.loginIt.login+':'+this.loginIt.password), this.Result)
            	.then((response) =>{ 
            		console.log(response.data);
					this.Result = response.data.result;
					this.$store.commit('SET_PROFIL_DATAS', this.Result)
				});
			}
		
        }
    }
</script>