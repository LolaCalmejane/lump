<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="sidebar">
		<div class="container">
			<div class="navbar-sidebar"> 
				<div class="player">
					<i class="fa fa-align-center fa-lg" @click="showId='player'"></i>
				</div>
				<div class="notifications">
					<i class="fa fa-bell fa-lg" @click="showId='notifications'"></i>
				</div>
				<div class="chat">
					<i class="fa fa-comment fa-lg" @click="showId='chat'"></i>
				</div>
			</div>
			<p v-if="showId === 'player'">Hello</p>
			<p v-if="showId === 'notifications'">i'm here</p>
			<p v-if="showId === 'chat'">and here to</p>
		</div>
	</div>
</template>

<!-- SCRIPT -->
<script>


export default {
  
  name: 'sidebar',
  data: function () {
    return {
      showId:false,
    }    
  }
}
</script>
