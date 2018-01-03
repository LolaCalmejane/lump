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
			<friends-grid
				:data="gridFriend"
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
import axios from 'axios'


export default {
	name: 'friends', 
	components: {
    	'header-profil': HeaderProfil,
    	'static' : Static,
    	'friends-grid': FriendsGrid,
  	},

  	data: function () {
	    return {
	    	Result:[],
	    	Events: [],
		    searchQuery: '',
		    gridColumns: ['name'], 
		    gridFriend: [
		    {name:''}
		    ],   	
		}
	},	

	mounted() {
		axios.get("http://localhost:3000/api/1.0/user/login?authorization="+ localStorage.getItem('authUser'), this.Result)
		.then((response) =>{ 
	   		console.log(response.data);
			this.gridFriend = response.data.result.friend;
        });
        axios.get("http://localhost:3000/api/1.0/event/list?authorization="+ localStorage.getItem('authUser'))
            .then((response) =>{ 
                console.log(response.data);
                this.Events = response.data;
            });        
	}

}

</script>