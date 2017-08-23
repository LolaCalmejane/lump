<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<li id="search" v-cloak>
    	<input type="text"  placeholder="Rechercher" v-on:click="seen = !seen"/>
	    <ul v-if="seen">
	    	<div class="category-search">
	    	<span class="subtitle-gold label-search">Musics</span>
		        <li v-for="music in filteredMusics">
		            <div class="imgSong" :style="{ backgroundImage: 'url(' + music.img + ')' }"></div>
		            <div class="iconPlay"></div>
		            <div class="block-detail">
						<div class="music-details">
							<p>{{music.title}}</p>
			            	<p class="detail">{{music.duration}}</p>
			            </div>	
			        	<div class="button-interaction">
			      			<span class="mini-like-button iconLike"></span>
		      				<div class="dropdown"> <!-- icon other on hover -->
	                            <span data-toggle="dropdown" class="mini-other-button iconOther icon-other dropdown-toggle" type="button"></span>
	                            <ul role="menu" class="dropdown-menu dropdown-menu-right">
	                                <li><a class="subtitle-white" href="#">Ajouter à mes playlists</a></li>
	                                <li><a class="subtitle-white" href="#">Ajouter à mes musiques</a></li>
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
	        </div>
	    </ul>
	</li>
</template>

<script>
import axios from 'axios'

export default {
	name: 'search', 
	computed: {

        // A computed property that holds only those articles that match the searchString.
        filteredMusics: function () {
            var musics_array = this.musics,
                searchString = this.searchString;

            if(!searchString){
                return musics_array;
            }

            searchString = searchString.trim().toLowerCase();

            musics_array = musics_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            });

            // Return an array with the filtered data.
            return musics_array;
        },
        filteredUsers: function () {
            var users_array = this.users,
                searchString = this.searchString;

            if(!searchString){
                return users_array;
            }

            searchString = searchString.trim().toLowerCase();

            users_array = users_array.filter(function(item){
                if(item.pseudo.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            });

            // Return an array with the filtered data.
            return users_array;
        }
    },
  	data: function () {
	    return {
	    	seen: false,
		    searchString: '',
		    musics: [
		    	{ 
			      	title: 'Pluie fine - Corine (Polo and Pan remix) ',
			      	duration : '3:00',
			      	img: require('images/imgSong-Corine.png')
		    	},
				{ 
					title: 'Bossa Muffin - Flavia Cohelo', 
					duration : '3:20',
					img: require('images/imgSong-Flavia.png') 
				},
				{ 
					title: 'Good together - honne', 
					duration : '3:90',
					img: require('images/imgSong-Honne.png') 
				},
				{ 
					title: 'I know after laugther - Mounika.', 
					duration : '2:10',
					img: require('images/imgSong-Mounika.png') 
				},
				{ 
					title: 'Porcelain - Moby', 
					duration : '4:30',
					img: require('images/imgMusicInWait-3.jpg')
				},
				{
					title: 'Sunset lover - Petit biscuit', 
					duration : '5:34',
					img: require('images/imgSong-Mounika.png')  
				},
				{ 
					title: 'J\’ai vu - Romeo Elvis', 
					duration : '3:00' ,
					img: require('images/imgSong-Mounika.png') 
				},
				{ 
					title: 'Got Me (Official Lyric Video) - St. South', 
					duration : '3:00',
					img: require('images/imgSong-Mounika.png')  
				},
				{ 
					title: 'Easy - Son Lux', 
					duration : '3:00',
					img: require('images/imgSong-Mounika.png')  
				},
				{ 
					title: 'Alek Lee - Sfarot', 
					duration : '3:00',
					img: require('images/imgSong-Mounika.png')  
				}
		    ],
		    users : [
				{
					pseudo : 'JudeAdemilo',
					img: require('images/profil-img-2bis.png'),
					friendsNumber: '100',
					eventsNumber:'12'

				},
				{
					pseudo : 'IsisDelgado',
					img: require('images/profil-img-2bis.png'),
					friendsNumber: '43',
					eventsNumber:'4'

				},
				{
					pseudo : 'ThéoMarshall',
					img: require ('images/profil-img-2bis.png'),
					friendsNumber: '100',
					eventsNumber:'12'
				},
				{
					pseudo : 'SammyJlt',
					img: require('images/profil-img-2bis.png'),
					friendsNumber: '100',
					eventsNumber:'12'

				},
				{
					pseudo : 'Emilie_45',
					img: require('images/profil-img-2bis.png'),
					friendsNumber: '43',
					eventsNumber:'4'

				},
				{
					pseudo : 'IziaLaPlage',
					img: require ('images/profil-img-2bis.png'),
					friendsNumber: '100',
					eventsNumber:'12'
				},
		    ]
		}
	}	
}

</script>