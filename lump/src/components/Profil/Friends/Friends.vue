<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="friends" class="profil musics">
		<static></static> 
		<header-profil></header-profil>
		<div class="content">
			<form id="search">
				<span class="iconSearch"></span>
				<input class="
      			bar iconSearch body-text" type ="text" name="query" v-model="searchQuery">
			</form>
		</div>

		<div class="friends-content">
		<span class="deleteIcon" @click="deletemyfriend"></span>
			<friends-grid
				:data="gridData"
				:columns="gridColumns"
				:filter-key="searchQuery">
			</friends-grid>
		</div>

	</div>
</template>


<script>
import HeaderProfil from '../HeaderProfil/HeaderProfil.vue'
import FriendsGrid from '../FriendsGrid/FriendsGrid.vue'
import Static from '../../Static/Static.vue'

export default {
	name: 'friends', 
	components: {
    	'header-profil': HeaderProfil,
    	'static' : Static,
    	'friends-grid': FriendsGrid,

  	},

  	data: function () {
	    return {
		    searchQuery: '',
		    gridColumns: ['amis'],
		    gridData: [
		      { id: 1, amis: 'Coraline LodiLo' },
		      { id: 2, amis: 'Lola CalmeCalme' },
		      { id: 3, amis: 'Enzo Mama' },
		      { id: 4, amis: 'Coraline LodiLo' },
		      { id: 5, amis: 'Lola CalmeCalme' },
		      { id: 6, amis: 'Enzo Mama' },
		      { id: 7, amis: 'Lola CalmeCalme' },
		      { id: 8, amis: 'Enzo Mama' },
		      { id: 9, amis: 'Lola CalmeCalme' },
		      { id: 10, amis: 'Enzo Mama'}
		    ],

			myfriends: [
			{
				id: 1,
				friendName: 'Coraline LodiLo',
				imgFriend: require('images/imgMusicInWait-1.jpg')
			},
			{
				id: 2,
				friendName: 'Lola CalmeCalme',
				imgFriend: require('images/imgMusicInWait-2.jpg')
			},
			{
				id: 3,
				friendName: 'Enzo Mama',
				imgFriend: require('images/imgMusicInWait-3.jpg')
			},
			{
				id: 4,
				friendName: 'Enzo Mama',
				imgFriend: require('images/imgMusicInWait-4.jpg')
			},
			{
				id: 5,
				friendName: 'Coraline LodiLo',
				imgFriend: require('images/imgMusicInWait-1.jpg')
			},
			{
				id: 6,
				friendName: 'Lola CalmeCalme',
				imgFriend: require('images/imgMusicInWait-2.jpg')
			},
			{
				id: 7,
				friendName: 'Enzo Mama',
				imgFriend: require('images/imgMusicInWait-3.jpg')
			},
			{
				id: 8,
				friendName: 'Eliott Aaron',
				imgFriend: require('images/imgMusicInWait-4.jpg')
			},
			{
				id: 9,
				friendName: 'Eliott Aaron',
				imgFriend: require('images/imgMusicInWait-4.jpg')
			},
			{
				id: 10,
				friendName: 'Coraline LodiLo',
				imgFriend: require('images/imgMusicInWait-1.jpg')
			},
			{
				id: 11,
				friendName: 'Lola CalmeCalme',
				imgFriend: require('images/imgMusicInWait-2.jpg')
			}		
			]	    	
		}
	},
	computed: 
	{
		deletemyfriend(gridData) {
			this.$store.commit('SET_FRIEND', gridData)
		}
	},

	// function remove element in friend list
    methods: {   			
	}		
}

</script>