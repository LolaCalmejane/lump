<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<li id="search" v-cloak>
		<input @input="getMusics()" v-on:click="seen = !seen"type="text"  placeholder="Rechercher" v-model="query"/>
	    <ul class="results" v-if="Result, seen">
	    	<!-- <div class="category-search"> -->
	    	<!-- <span class="subtitle-gold label-search">Musics</span> -->
		        <li v-for="(result,index) in Result">
		            <div class="imgSong" :style="{ backgroundImage: 'url(' + result.thumbnail + ')'}">
		            	
		            </div>
		            <div class="iconPlay" v-if="Result" @click="playVideo"></div>
		            <div class="block-detail">
						<div class="music-details">
							<p>{{result.title}}</p>
			            </div>	
			        	<div class="button-interaction">
			      			<span class="mini-like-button iconLike" v-model.trim='Result' @click.prevent="saveSong()"></span>
		      				<div class="dropdown"> <!-- icon other on hover -->
	                            <span data-toggle="dropdown" class="mini-other-button iconOther icon-other dropdown-toggle" type="button"></span>
	                            <ul role="menu" class="dropdown-menu dropdown-menu-right">
	                                <li><a class="subtitle-white" href="#">Ajouter à mes playlists</a></li>
	                                <li><a class="subtitle-white" href="#">Partager</a></li>
	                                <li role="separator" class="divider"></li>
	                                <li><a class="subtitle-white" href="#">Autre</a></li>
	                            </ul>
                            </div>
			      			
			        	</div>
		        	</div>
		        		        	     <div v-if="videoPlayer">
		        	<iframe :src="'http://www.youtube.com/embed/' + result.videoId + '?modestbranding=0&autohide=1&showinfo=0&rel=0&autoplay=1'" frameborder="0" allowfullscreen></iframe>		
			</div>	  	
		        </li>
 			        	

	        <!-- </div> -->
	        <!-- <div class="category-search">
		        <span class="subtitle-gold">Users</span>
		        <li v-for="user in filteredUsers">
		            <div class="imgSong" :style="{ backgroundImage: 'url(' + user.img + ')' }"></div>
		            <div class="user-details">
						<p>{{user.pseudo}}</p>
		            	<div class="datas-number">
		            		<p class="detail">{{user.friendsNumber}} amis | </p>
		            		<p class="detail">{{user.eventsNumber}} amis </p>
		            	</div>
			        </div>
		        </li>
	        </div> -->
	    </ul>
	</li>
</template>

<script>
import axios from 'axios'

export default {
	name: 'search', 
	data (){
		return {
			Result: [],
			query:'',
			seen : false,
			videoPlayer: false,
		}
	},
	methods:{
		getMusics(){
			axios.get('http://localhost:3000/api/1.0/music/search?authorization=bGFzdDpsYXN0bGFzdA==&search=' + this.query )
			.then((response) =>{
				console.log(response.data);
				this.Result = response.data.result;
			})
		},

		playVideo(result) {
		this.videoPlayer = true;
		},

					
	
		// saveSong(){
		// 	axios.post('http://localhost:3000/api/1.0/music/add/music?authorization=bG9sYWE6bWRw', {
		// 		videoId : this.videoId,
  //               title : this.music,
  //               channel : this.channel,
  //               thumbnails : this.thumbnails
		// 	})
		// 	.then((response)=>{
		// 		console.log(response.data);
		// 		this.Result= response.data.result;
		// 	})

		// }
		
	}
	
}

</script>