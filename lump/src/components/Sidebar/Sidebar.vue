<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="sidebar">
		<div class="scroll">
			<div class="sidebar-content">
				<!-- SIDEBAR - NAVBAR CONTENT -->
				<div class="navbar-sidebar"> 
					<div class="playerIcon" @click="showId='player'"></div>
					<div class="notificationsIcon" @click="showId='notifications'"></div>
					<div class="chatIcon" @click="showId='chat'"></div>
					<!-- SIDEBAR - NAVBAR CONTENT - LINE -->
					<div class="line"></div>
				</div>
				<!-- SIDEBAR - PLAYER CONTENT -->
				<div v-if="showId === 'player'">
					<!-- TITLE PLAYER -->
					<div class="inListening">
						<div class="inListeningIconPlay"></div>
						<p class="inListening-text subtitle-gold">{{inListeningText}}</p>
					</div>
					<!-- VIDEO-PLAYER -->
					<div class="video-player">
						<div v-if="playingItem">
						 	<iframe :src="'http://www.youtube.com/embed/' + playingItem.videoId + '?modestbranding=0&autohide=1&showinfo=0&rel=0&autoplay=1'" frameborder="0" allowfullscreen></iframe>	
						</div>
						<div v-else>
						 	<iframe :src="'http://www.youtube.com/embed/' +src+ '?modestbranding=0&autohide=1&showinfo=0&rel=0&autoplay=false'" frameborder="0" allowfullscreen></iframe>	
						</div>
						

						

					</div>
					<!-- SONG-INFORMATIONS -->
					<div class="player-content">
						<div class="songInfos">
							<p v-if="playingItem" class="songTitle body-text">{{playingItem.title}}</p>
							<p v-else class="songTitle body-text"> Titre - Artiste </p>
						</div>
						<!-- LIKE/OTHER/STARS -->
						<div class="interaction">
							<div class="likeIcon"></div>
							<div class="otherIcon"></div>
							<div class="starsIcon"></div>
						</div>
						<!-- WAITING LIST -->
						<div class="waitingList">
							<div class="waitingListIconWait"></div>
							<p class="waitingList-text subtitle-gold">{{waitingListText}}</p>
						</div>
					</div>
					<!-- WAITING LIST - CONTENT -->
					<div class="waitingListContent">
					<!-- WAITING LIST - MUSIC IN WAIT -->
						<div class="listMusicInWait">
							<div class="musicInWait" v-for='musicInWait in musicInWaits'>
								<div class="imgMusicInWait">
									<img v-bind:src="musicInWait.imgMusicInWait" alt="">
									<div class="musicInWaitIconPlay"></div>
								</div>
								<div class="musicTitleInWait body-text">{{musicInWait.musicTitleInWait}}</div>
								<div class="deleteIcon" @click="deletemusicInWaits"></div>
							</div>
						</div>
					</div>
					<!-- BOTTOM SIDEBAR -->		
					<div class="player-content">
						<div class="bottom-sidebar">
							<!-- BUTTON ADD MUSIC IN WAITING LIST -->
							<div class="sidebar-content">
								<button class="waitingListButton subtitle-white"  type="button">{{buttonAddMusic}}</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!------------------------------------------------------------------->

			<!-- SIDEBAR - NOTIFICATIONS CONTENT -->
 			<div class="notifications-content" v-if="showId === 'notifications'">
	 				<div class="listNotifications">
	 					<div class="notification" v-for='notification in notifications'>
	 						<div class="imgNotification">
								<img v-bind:src="notification.imgNotificationSender" alt="">
							</div>
							<div class="dataNotification">
								<p class="notificationSenderName title">{{notification.notificationSenderName}}</p>
								<p class="notificationType detail">{{notification.notificationType}} {{notification.notificationEventConcerned}}</p>
							</div>
						</div>
					</div>
				<div class="notification-bottom-sidebar">
						<!-- SIDEBAR - NOTIFICATION CONTENT - VIDEO-PLAYER -->
				<div class="notification-video-player"></div>
					<div class="sidebar-content">
						<div class="notification-interaction">
							<div class="notificationlikeIcon"></div>
							<div class="body-text">{{songTitle}}</div>
							<div class="notification-otherIcon"></div>
						</div>
					</div>
				</div>
			</div>

			<!------------------------------------------------------------------->

			<!-- SIDEBAR - CHAT CONTENT -->
			<div class="chat-content"p v-if="showId === 'chat'">
				<div class="sidebar-content">
					<p>I'm here to</p>
				</div>
			</div>

		</div><!-- END OF THE SCROLL -->
	</div><!-- END OF THE SIDEBAR -->				
</template><!-- END OF THE TEMPLATE -->

<!-- SCRIPT -->
<script>
import { mapGetters } from 'vuex'

export default {
	name: 'sidebar',
	data: function () {
		// sidebar-player-datas
		return {
			showId: 'player',
			src:'',
			inListeningText: 'En écoute',
			songTitle:'Roméo Elvis - J\'ai vu',
			songPlace:'Dans la playlist « let\’s goo »',
			waitingListText:'À écouter plus tard',
			buttonAddMusic:'Ajouter des musiques',
			videoPlayer: false,


			// sidebar-player-datas -waiting list part
			musicInWaits: [
			{
				id: 1,
				musicTitleInWait: 'I know after laughter - Mounika',
				imgMusicInWait: require('images/imgMusicInWait-1.jpg')
			},
			{
				id: 2,
				musicTitleInWait: 'Bossa Muffin - Flavia Coelho',
				imgMusicInWait: require('images/imgMusicInWait-2.jpg')
			},
			{
				id: 3,
				musicTitleInWait: 'Porcelain - Moby',
				imgMusicInWait: require('images/imgMusicInWait-3.jpg')
			},
			{
				id: 4,
				musicTitleInWait: 'Madiba Riddim - Drake ',
				imgMusicInWait: require('images/imgMusicInWait-4.jpg')
			}		
			],

			// sidebar-notification-datas part
			notifications: [
			{
				id: 1,
				notificationSenderName: 'Louise Marrain',
				notificationType: 'Vous invite à sa soirée',
				notificationEventConcerned: '« Come on »',
				imgNotificationSender: require('images/profil-img-2bis.png')
			},
			{
				id: 2,
				notificationSenderName: 'Marie Aulagnier',
				notificationType: 'A aimée votre proposition pour',
				notificationEventConcerned: '« Come on »',
				imgNotificationSender: require('images/profil-img-3.jpg')
			},			
			{
				id: 3,
				notificationSenderName: 'Avril Asnières',
				notificationType: 'Vous invite à son apéritif',
				notificationEventConcerned: '« Come on »',
				imgNotificationSender: require('images/profil-img-2bis.png')
			},
			{
				id: 4,
				notificationSenderName: 'Elsa Salomon',
				notificationType:'A aimée votre proposition pour',
				notificationEventConcerned: '« Come on »',
				imgNotificationSender: require('images/profil-img-3.jpg')
			},
			{
				id: 5,
				notificationSenderName: 'Fanny J',
				notificationType:'Vous invite à sa soirée',
				notificationEventConcerned: '« Alohaa »',
				imgNotificationSender: require('images/profil-img-6.jpg')
			}						
			]
		}    
	},
	computed: {
      ...mapGetters([
        'playingItem'
      ])
    },
	// function remove element in waiting music list
    methods: {
    	deletemusicInWaits: function(musicInWaitId) {
      	this.musicInWaits.splice(musicInWaitId, 1)
    	}
    }   	
}
</script>
