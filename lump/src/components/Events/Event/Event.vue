<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="event" class="event">
        <static></static> 
		<!-- EVENT - IMAGE BACKGROUND-->
		<!-- <div class="event-image" :style="{ backgroundImage: 'url(' + comingEvent.imgEvent + ')'}"> -->
		<div class="filter-bg"></div>
			<!-- EVENT - HEADER CONTENT -->
			<div class="content-event">
			<!-- <router-link to ="/profil"><button type="button" class="previousButton subtitle-white">Retour</button></router-link> -->
				<div class="timer" > 
					<!-- <p class="name-title">{{comingEvent.timer}}</p> -->
					<p class="body-text">pour voter</p>
				</div>	
				<div class="event-composants">
					<div class="event-organizer name-title " > 
						<p>{{Events[2].userId}}</p>
					</div>
					<div class="event-title big-title"> 
						 <p>{{Events[2].name}}</p>
					</div>
					<div class="event-description"> 
						 <p class="subtitle-gold">Description</p>
						 <p class="body-text">{{Events[2].description}}</p>
					</div>
					<div class="event-details-content">
						<div class="eventMoreDetails">
							<p class="subtitle-gold">Invités</p>
							<!-- <p class="body-text">{{comingEvent.guestsNumber}} invités</p> -->
						</div>
						<div class="eventMoreDetails">
							<p class="subtitle-gold">Participants</p>
							<!-- <p class="body-text">{{comingEvent.participants}} participants</p> -->
						</div>
						<div class="eventMoreDetails">
							<p class="subtitle-gold">Lieu</p>
							<p class="body-text">{{Events[2].adresse}}</p>
						</div>
						<div class="eventMoreDetails">
							<p class="subtitle-gold">Heure</p>
							<p class="body-text">{{Events[2].duration}}</p>
						</div>									
						<div class="eventMoreDetails">
							<p class="subtitle-gold">Date</p>
							<p class="body-text">{{Events[2].date}}</p>
						</div>						
					</div>
					<button type="button" class="imGoingButton name-title">Je participe</button>
				</div><!-- END OF THE EVENT COMPOSANTS (ORGANIZER NAME, DATE, PLACE...) -->
			<!-- </div>END OF THE EVENT CONTENT HEADER -->
		</div><!-- END OF THE IMAGE BACKGROUND -->

		<!-- EVENT CONTENT FLUX MUSIC PROPOSITIONS -->
		<div class="content">
			<form id="search">
				<span class="iconSearch"></span>
				<input class="bar iconSearch body-text" type ="text" name="query" v-model="searchQuery">
			</form>
			<div class="flux-prop" v-for="event in Events[2].musics[1]">
				<div class="flux-content">
					<!-- <div :style="{ backgroundImage: 'url(' + comingEvent.imgProfil + ')' }" class="block-mini-image">  -->
				    <!-- </div> -->
			        <div class="left-content">
			            <span class="title ">{{Events[2].userId}}</span>
			            <p class="detail">a proposé</p>
			        </div>
		        </div>
		        <!-- <div class="imgSong" :style="{ backgroundImage: 'url(' + comingEvent.imgSong + ')' }"><div class="iconPlay"></div></div> -->
				<div class="proposal-details">
					<div class="proposal-first">
			        	<div class="userProposalTitle">{{Events[2].musics[1].title}}</div>
			        	<div class="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div>
					</div>
					<div class="proposal-second">
						<!-- <div class="body-text detail">Ajouté le {{comingEvent.date}}</div> -->
						<!-- <div class="body-text detail">Moyenne : {{comingEvent.average}}</div> -->
					</div>
		        	<ul class="proposal-third">
		      			<li class="mini-like-button iconLike" v-if="Events[2].musics[1]" @click="playingItem(Events[2].musics[1])"></li>
		      			<li class="mini-other-button iconOther"></li>
		        	</ul>
	        	</div>		        	
	        </div><!-- END OF FLUX PROP -->		
		</div><!-- END OF THE CONTENT FLUX MUSIC PROPOSITIONS -->			
	</div><!-- END OF THE EVENT -->
</template><!-- END OF THE TEMPLATE -->	


<!-- SCRIPT -->
<script>
import axios from 'axios'
import Static from '../../Static/Static.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'event',
    components: {
        'static' : Static
    },    
	methods: {
        getEvent() {
            (`Event/${this.$route.params.eventId}`)
        },
        playingItem(result) {
            this.$store.commit('SET_PLAYING_ITEM', result)
            console.log(result);
            this.videoPlayer= true;

        }        

    },	

	data() {
        return {
            name:'',
            adresse:'',
            description:'',
            date:'',
            type:'',
            music:'',
            musics:'',
            pays:'',
            userId:'',
            codePostal:'',
            duration:'',
            Result:[],
            Events:[],
            searchQuery:'',
        	comingEvents: [
                {
                id: 1,
                title: 'Why not dancing',
                guestsNumber: '23',
                participants:'10',
                hour:'20:30',
                organizer: 'Christine Pemba Kingala',
                place: '224 rue du Faubourg-Saint-Antoine, 75012 Paris',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                timer: 'J-5',
                date : '17/08/2017',
                nameUserProposal: 'Jude Ademilo',
                userProposal : 'Corine - Pluie Fine (Polo & Pan Remix)',
                average:'2,5',
                imgEvent:require('images/img-flux-event.png'),
                imgSong : require('images/imgSong-Corine.png'),
                imgProfil : require('images/profil-img-1.png')
                },
                {
                id: 2,
                title: 'Aperoo',
                guestsNumber: '6',
                participants:'10',
                hour:'20:30',
                organizer: 'Noemie Neda',
                place: '224 rue du Faubourg-Saint-Antoine, 75012 Paris',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                timer: 'J-9',
                date : '03/06/2017',
                nameUserProposal: 'Noemie Neda',
                average:'2,5',
                userProposal : 'FLAVIA COELHO "Bossa Muffin" (official video)',
                imgEvent:require('images/img-flux-event-2.jpg'),
                imgSong : require('images/imgSong-Flavia.png'),
                imgProfil: require('images/profil-img-2bis.png')
                },
                {
                id: 3,
                title: 'Champagne, tomates cerises',
                guestsNumber: '31',
                hour:'20:30',
                participants:'10',
                organizer: 'Kyriam Nacim',
                place: '224 rue du Faubourg-Saint-Antoine, 75012 Paris',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                timer: 'J-12',
                date : '08/07/2017',
                nameUserProposal: 'Kyriam Nacim',
                userProposal : 'HONNE - Good Together',
                average:'2,5',
                imgEvent:require('images/img-flux-event-3.jpg'),
                imgSong : require('images/imgSong-Honne.png'),
                imgProfil: require('images/profil-img-3.png')
                },
                {
                id: 4,
                title: 'Et pourquoi pas ?',
                guestsNumber: '8',
                hour:'20:30',
                participants:'10',
                organizer: 'Hendi Siam',
                place: '224 rue du Faubourg-Saint-Antoine, 75012 Paris',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing.',
                timer: 'J-15',
                date : '06/07/2017',
                nameUserProposal: 'Jude Ademilo',
                userProposal : 'Mounika. - I Know After Laughter',
                average:'2,5',
                imgEvent:require('images/img-flux-event-4.jpg'),
                imgSong : require('images/imgSong-Mounika.png'),
                imgProfil: require('images/profil-img-4.png')
                }
            ],

        	comingEvent: null,
        }
    },

    mounted() {
        axios.get("http://localhost:3000/api/1.0/event/list?authorization="+ localStorage.getItem('authUser'))
            .then((response) =>{ 
                console.log(response.data);
                this.Events = response.data;
            });
    }

 
}


</script>