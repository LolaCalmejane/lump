<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="playlists" class="playlists"> 
		<static></static> 
		<header-profil></header-profil>
		<div class="content">
			 <form action="#" v-on:submit.prevent="createPlaylist(result)">
				<label class="subtitle-gold" for="name">Créer une playlist</label>
				<input class="body-text" type="text" placeholder="Choisir un nom pour la playlist" id="name" v-model.trim="playlistCreate.name" required>
				<button class="">Ajouter</button> 
			 </form>
			<form id="search">
				<span class="iconSearch"></span>
				<input class="bar iconSearch body-text" type ="text" name="query" v-model="searchQuery">			
			</form>

			<!-- context playlist -->
			<div class="playlist" v-for='playlist in Playlists'>
				<div class="event-context"> <!-- A RENOMMER CETTE CLASSE -->
					<div :style="{ backgroundImage: 'url(' + playlist.imgProfil + ')' }" class="block-mini-image"> 
				    </div>
			        <div class="left-context">
			            <span class="title ">{{playlist.userId}}</span>
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
		        <span class="playlist-name title">{{playlist.name}}</span>
		        <div class="preview-playlist">
			        <div class="songs">
			        	<ul v-for ='(music,index) in playlist.musics' class="song">
			        		<div class="mini-like-button iconLike"></div>
			        		<div class="mini-play-button iconPlay" v-if="music" @click="playingItem(music)"></div>
			        		<span class="body-text song-title">{{music.title}}</span>
			        		<div class="mini-other-button iconOther"></div>
			        	</ul>
			        </div>
	        	</div>
			</div><!-- end playlist -->
		</div>
	</div>
</template>

<script>
import HeaderProfil from '../HeaderProfil/HeaderProfil.vue'
import Static from '../../Static/Static.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
	name: 'playlists', 
	components: {
    	'header-profil': HeaderProfil,
    	'static' : Static
  	},
    props: ['index'],
  	data: function () {
	    return {
	    	isActive : false,
		    searchQuery: '',
		    Playlists:[],
	    	Result:[],
	    	thumbnails:'',
	    	title:'',
	    	musics:[],
	    	channel:'',
	    	videoPlayer: false,
	    	videoId:'',		    
		    AddtoPlaylist:[],
		    musics:[],
		    music:'',
		    CreatePlaylist: [],
		    playlistCreate: {
		    	name:''
		    },
		    result:'',
		    Result:[],
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
	},
  	methods: {
        myFilter: function(){
            this.isActive = !this.isActive;
            this.$emit('newactive', this.index);
        },

    createPlaylist(result){
    	console.log(this.playlistCreate)
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/1.0/music/playlist/create',
      data: { 
        authorization: localStorage.getItem('authUser'),
        name: this.playlistCreate.name
      }, 
    })
    .then((response) =>{
        this.CreatePlaylist = response.data.result;
        console.log(this.CreatePlaylist) 

        })
    },
		musicToPlaylist(result, event){
		const i_playlist = event.target.getAttribute('value')
		axios({
		  method: 'post',
		  url: 'http://localhost:3000/api/1.0/music/playlist/add',
		  data: { 
		    authorization: localStorage.getItem('authUser'),
		    id: this.Playlists[i_playlist]._id,
		    music: result.title,
		    videoId: result.videoId

		  }, 
		})
		.then((response) =>{ 
            this.AddtoPlaylist = response.data.result;
            console.log(this.AddtoPlaylist);
            
			})
		 },

		playingItem(result) {
			this.$store.commit('SET_PLAYING_ITEM', result)
			console.log(result);
			this.videoPlayer= true;

		}

 },

 	mounted() {
	    axios.get("http://localhost:3000/api/1.0/music/playlist/list?authorization="+ localStorage.getItem('authUser'))
	        .then((response) =>{ 
	            this.Playlists = response.data;
	            console.log(this.Playlists)
	        });
}

}

</script>