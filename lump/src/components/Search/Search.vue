<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<li id="search" v-cloak>
		<input @input="getMusics()" v-on:click="seen = !seen"type="text"  placeholder="Rechercher" v-model="query">
	    <ul class="results" v-if="Result, seen">
	    	<div class="category-search">
	    	 <span class="subtitle-gold label-search">Musics</span> 
		        <li v-for="(result,index) in Result">
		            <div class="imgSong" :style="{ backgroundImage: 'url(' + result.thumbnail + ')'}"></div>
		            <div class="iconPlay" v-if="Result" @click="playingItem(result)"></div>
		            <div class="block-detail">
						<div class="music-details">
							<p>{{result.title}}</p>
			            </div>	
						<div class="button-interaction">
			      			<span class="mini-like-button iconLike" @click.prevent="saveSong(result)"></span>
		      				<div class="dropdown"> <!-- icon other on hover -->
	                            <span data-toggle="dropdown" class="mini-other-button iconOther icon-other dropdown-toggle" type="button">
	                            </span>
	                            <ul role="menu" class="dropdown-menu dropdown-menu-right">
									<div class="dropdown">
									  <button class="dropbtn">Ajouter à mes playlists</button>
									  <div class="dropdown-content">
									    <a href="#" v-for="(playlist, index) in Playlists" v-bind:value="index" @click.prevent="musicToPlaylist(result, $event)">{{playlist.name}}</a>
									  </div>
									</div>
	                                <li><a class="subtitle-white" href="#">Partager</a></li>
	                                <li role="separator" class="divider"></li>
	                                <li><a class="subtitle-white" href="#">Autre</a></li>
	                            </ul>
                            </div>
			        	</div>
		        	</div>	
		        </li>
 			</div>
	        <div class="category-search">
		        <span class="subtitle-gold">Users</span>
		        <li v-for="(result,index) in Success">
		            <div class="imgUser">
		            	<img v-bind:src="imgUser" alt="">
		            </div>
		            <div class="block-detail">
	                    <span class="mini-other-button iconOther icon-other" @click.prevent="saveFriend(result)">
	                    </span>		            	
			            <div class="user-details">
							<p>{{result.login}}</p>
			            	<div class="datas-number">
			            		<p class="detail">13 amis | </p>
			            		<p class="detail">13 évènements </p>
			            	</div>
				        </div>
			        </div>
		        </li>
	        </div>
	    </ul>
	</li>

</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
	name: 'search', 
	data (){
		return {
			Result: [],
			Playlists:[],
			Events: [],
			Success: [],
			AddMusics:[],
			AddFriends:[],
			AddtoPlaylist:[],
			videoId:'',
			//music:'',
			channel:'',
			index:'',
			friend:'',
			thumbnails:'',
			title:'',
			query:'',
			seen : false,
			videoPlayer: false,
            imgUser: require('images/profil-img-5.jpg'),  
		}
	},
	mounted() {
	    axios.get("http://localhost:3000/api/1.0/music/playlist/list?authorization="+ localStorage.getItem('authUser'))
	        .then((response) =>{ 
	            this.Playlists = response.data;
	            console.log(this.Playlists)
	        });

	    axios.get("http://localhost:3000/api/1.0/event/list?authorization="+ localStorage.getItem('authUser'))
	        .then((response) =>{ 
	            console.log(response.data);
	            this.Events = response.data;
	        });
	},	

	methods:{

		getMusics(){
			axios.all([
				axios.get('http://localhost:3000/api/1.0/music/search?authorization='+ localStorage.getItem('authUser')+'&search=' + this.query ),
				axios.get('http://localhost:3000/api/1.0/user/search?authorization='+ localStorage.getItem('authUser')+'&login=' + this.query)
			])
			.then(axios.spread((response1, response2) => {
  				console.log(response1.data);
   				this.Result = response1.data.result;  				
  				console.log(response2.data);
				this.Success = response2.data.result;  				
			}))
		},

		playingItem(result) {
			this.$store.commit('SET_PLAYING_ITEM', result)
			console.log(result);
			this.videoPlayer= true;

		},

		saveSong(result){
			console.log(result, this.result)
		axios({
		  method: 'post',
		  url: 'http://localhost:3000/api/1.0/music/add/music', 
		  data: { 
		    authorization: localStorage.getItem('authUser'),
		    videoId: result.videoId,
		    title: result.title,
		    channel: result.channel,
		    thumbnails: result.thumbnail
		  }, 
		})
		.then((response) =>{ 
            this.AddMusics = response.data.result;
            console.log(this.AddMusics)
			});

		},

		saveFriend(result){
		axios({
		  method: 'post',
		  url: 'http://localhost:3000/api/1.0/friend/add/'+ result._id,
		  data: { 
		    authorization: localStorage.getItem('authUser'),
			id: result._id,
			name: result.login		    
		  }, 
		})
		.then((response) =>{ 
            this.AddFriends = response.data.result;
            console.log(this.AddFriends)
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
		    music: result.title
		  }, 
		})
		.then((response) =>{ 
            this.AddtoPlaylist = response.data.result;
            console.log(this.AddtoPlaylist);
            
			})
		 }
		
	}


	
}

</script>