<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="inscription" class="inscription">
		<div class="content">
			<img src="../../assets/images/login-logo.png" alt="Logo-lump">
			<h2 class="subtitle-white title-subscribe">Inscription</h2>
			<form action="#" v-on:submit.prevent="createUser()">
				<div class="form-inscription">
			        <input type="text" class="pseudo" placeholder="Pseudo"  v-model.trim="login">
			        <input type="email" class="email" placeholder="Email" v-model.trim="email">
			        <input type="password" class="mdp" placeholder="Mot de passe" v-model.trim="password">
			        <button class="buttonSubscribe subtitle-white">S'inscrire</button>
	      		</div>
	      		<div class="ifNot">
		      		<p class="body-text">Vous avez déjà un compte ?</p>
		      		<router-link to ="/login"><p class="body-text">Se connecter</p></router-link>
	      		</div>
	      	</form>
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
			password:'',
			login: '',
			email:'',
			callback: false,
			}
		},

		methods: {
			createUser(){
			axios.post('http://localhost:3000/api/1.0/user/create', {
				email: this.email,
				login:this.login,
				password:this.password 
			})
		.then((response) =>{
			console.log(response.data);
			 this.Result = response.data.result;

		})

			}
		}
	}
</script>