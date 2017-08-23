<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="login" class="login">
		<div class="content">
			<h2>Log In</h2>
			<div class="form-group">
		        <input 
		          type="text" 
		          class="form-control"
		          placeholder="Enter your username"
		          v-model="credentials.username"
		        >
      		</div>
		    <div class="form-group">
		        <input
		          type="password"
		          class="form-control"
		          placeholder="Enter your password"
		          v-model="credentials.password"
		        >
		    </div>
      <button class="btn btn-primary" @click="submit()">Se connecter</button>
		</div>
		<div class="content">
			<h2>Sign up</h2>
			<div class="form-group">
		        <input 
		          type="text" 
		          class="form-control"
		          placeholder="Enter your username"
		          v-model="credentials.username"
		        >
		        <input 
		          type="mail" 
		          class="form-control"
		          placeholder="Enter your mail"
		          v-model="credentials.mail"
		        >
		        <input 
		          type="mail" 
		          class="form-control"
		          placeholder="Confirm your mail"
		          v-model="credentials.mail"
		        >		        
      		</div>
		    <div class="form-group">
		        <input
		          type="password"
		          class="form-control"
		          placeholder="Enter your password"
		          v-model="credentials.password"
		        >
		        <input
		          type="password"
		          class="form-control"
		          placeholder="Confirm your password"
		          v-model="credentials.password"
		        >		        
		    </div>
      <button class="btn btn-primary" @click="submit()">S'inscrire</button>
		</div>
	</div>
</template>




<!-- SCRIPT -->
<script>
	export default {

		data() {
		  return {
		    credentials: {
		      username: '',
		      password: '',
		      mail:''
		    },
		    error: ''
		  }
		},

		methods: {

		  submit() {

		    var credentials = {
		      username: this.credentials.username,
		      password: this.credentials.password,
		      mail: this.credentials.mail
		    }

		    auth.login(this, credentials, 'secretquote')

		  }
		}

}
</script>