<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="playlists" class="playlists events"> 
		<header-profil></header-profil>
		<div class="content">
			<form id="search">
				<span class="iconSearch"></span>
				<input class="
      			bar iconSearch body-text" type ="text" name="query" v-model="searchQuery">
			</form>
		</div>

		<!-- context playlist -->
		<div class="content">
		<div class="playlist" v-for='(playlist,index) in playlists'>
			<div class="event-context"> <!-- A RENOMMER CETTE CLASSE -->
				<div :style="{ backgroundImage: 'url(' + playlist.imgProfil + ')' }" class="block-mini-image"> 
			    </div>
		        <div class="left-context">
		            <span class="title ">{{playlist.playlistCreator}}</span>
		            <p class="detail">organise</p>
		         </div>
		         <div class="right-context">
		         	<p class="detail">ajouté le</p>
		            <span class="title ">{{playlist.dateCreation}}</span>
		         </div>
	        </div>
	        <div class="img-playlist" :style="{ backgroundImage: 'url(' + playlist.imgPlaylist + ')' }" > 
	        	<div class="iconPlay"></div>
	        </div>
	        <span class="playlist-name title">{{playlist.playlistName}}</span>
	        <div class="preview-playlist">
		        <div class="songs">
		        	<ul v-for ='(song,index) in playlist.songs' class="song">
		        		<div class="mini-like-button iconLike"></div>
		        		<div class="mini-play-button iconPlay "
		        				v-on:click="myFilter"
    							v-bind:class="{ active: isActive }"></div>
		        		<span class="body-text song-title" v-bind:class="{ active: isActive }" >{{song.title}}</span>
		        		<div class="mini-other-button iconOther"></div>
		        	</ul>
		        </div>
	        </div>
		</div> <!-- end playlist -->
		</div>
	</div>
</template>

<script>

import HeaderProfil from '../HeaderProfil/HeaderProfil.vue'

export default {
	name: 'playlists', 
	components: {
    	'header-profil': HeaderProfil,
  	},
  	methods: {
        myFilter: function(){
            this.isActive = !this.isActive;
            this.$emit('newactive', this.index);
        }
      },
    props: ['index'],
  	data: function () {
	    return {
	    	isActive : false,
		    searchQuery: '',
		    playlists: [
		    	{
		    		id:1,
		    		imgProfil: require('images/profil-img-1.png'),
		    		playlistCreator: "Jude Ademilo",
		    		dateCreation: "17/03/17",
		    		imgPlaylist: require('images/playlist-img-1.png'),
		    		playlistName: "Sun & coconuts",
		    		songs: [
		    			{ title: 'Ulysses and the sea - PAPOOZ' },
		    			{ title: 'Chelou - Halfway to Nowhere' },
		    			{ title: 'The Notorious B.I.G. - Can I Get Witcha (Paxel Remix)' },
		    			{ title: 'Guts - Laissez Lucie faire (Official Audio)' }
		    		]
		    	},
		    	{
		    		id:2,
		    		imgProfil: require('images/profil-img-2bis.png'),
		    		playlistCreator: "Jude Ademilo",
		    		dateCreation: "17/03/17",
		    		imgPlaylist: require('images/playlist-img-2.png'),
		    		playlistName: "Lost in my mind",
		    		songs: [
		    			{ title: 'Paolo Nutini - Scream (Funk My Life Up) [Acoustic]' },
		    			{ title: 'Back In The Game - Wu Tang (Phoniks Remix)' },
		    			{ title: 'Oliver Nelson - Ain\'t A Thing (ft. Kaleem Taylor)' },
		    			{ title: 'Diana Ross - Love Hangover' },
		    		]
		    	},
		    	{
		    		id:3,
		    		imgProfil: require('images/profil-img-3.png'),
		    		playlistCreator: "Jude Ademilo",
		    		dateCreation: "17/03/17",
		    		imgPlaylist: require('images/playlist-img-3.png'),
		    		playlistName: "Sun & coconuts",
		    		songs: [
		    			{ title: 'Ulysses and the sea - PAPOOZ' },
		    			{ title: 'Chelou - Halfway to Nowhere' },
		    			{ title: 'The Notorious B.I.G. - Can I Get Witcha (Paxel Remix)' },
		    			{ title: 'Guts - Laissez Lucie faire (Official Audio)' },
		    		]
		    	},
		    	{
		    		id:4,
		    		imgProfil: require('images/profil-img-4.png'),
		    		playlistCreator: "Jude Ademilo",
		    		dateCreation: "17/03/17",
		    		imgPlaylist: require('images/playlist-img-1.png'),
		    		playlistName: "Sun & coconuts",
		    		songs: [
		    			{ title: 'Ulysses and the sea - PAPOOZ' },
		    			{ title: 'Chelou - Halfway to Nowhere' },
		    			{ title: 'The Notorious B.I.G. - Can I Get Witcha (Paxel Remix)' },
		    			{ title: 'Guts - Laissez Lucie faire (Official Audio)' },
		    		]
		    	}
		    ]

		}
	}	
}

</script>