<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="addfriends" class="addfriends">
	    <div class="header-addfriends">
	        <div class="content">
	        	<router-link to ="/create"><button type="button" class="previousButton subtitle-white">Retour</button></router-link>
	            <h2 class="big-title">Créer un événement</h2>
	        </div>
	    </div>
        <div class="content">
    		<div class="addfriends-content">
        		<div class="left-side"> <!-- Guest list content -->
            		<h3 class="subtitle-gold">Liste d'invités</h3>
            		<div class="list">
	            		<div class="listing" v-for='guest in guests'>
	            			<div class="guestImg">
								<img v-bind:src="guest.guestImg" alt="">
	            			</div>
	            			<div class="guestname body-text">{{guest.guestName}}</div>
	            			<div class="iconCheck"></div>
	            		</div>
	            	</div>
            	</div>
            	<div class="line"></div>
        		<div class="right-side"> <!-- Add Guest in list content -->
            		<form id="search">
						<span class="iconSearch"></span>
						<input class="
		      			bar iconSearch body-text" type ="text" name="query" v-model="searchQuery">
					</form>
					<div class="list">
	            		<div class="listing" v-for='guest in guests'>
	            			<div class="guestImg">
								<img v-bind:src="guest.guestImg" alt="">
	            			</div>
	            			<div class="guestname body-text">{{guest.guestName}}</div>
	            			<div class="iconAdd"></div>
	            		</div>
	            	</div>
            	</div>
            </div>
            <router-link to ="/create"><button type="button" class="nextButton name-title">Suivant</button></router-link>
        </div>    		


	</div>
</template>







<!-- SCRIPT -->
<script>

export default {
    name: 'addfriends',
    methods: {
    },

    data() {
        return {
        	guests: [
                {
                id: 1,
                guestName: 'Jude Ademilo',
                guestImg: require('images/profil-img-1.png')
                },
                {
                id: 2,               
                guestName: 'Kyriam Nacim',
                guestImg: require('images/profil-img-3.png')
                },
                {
                id: 3,
                guestName: 'Maya Delgado',
                guestImg: require('images/profil-img-4.png')
                }
            ],
        }
    }    
}   

</script>