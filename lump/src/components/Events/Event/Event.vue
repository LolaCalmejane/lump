<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
	<div id="event" class="event" v-if="comingEvents = comingEvent ">
		<p>{{comingEvent.title}}</p>
	</div><!-- END OF THE EVENT -->
</template><!-- END OF THE TEMPLATE -->	


<!-- SCRIPT -->
<script>

export default {
	name: 'event',
	methods: {
        getEvent() {
            (`Event/${this.$route.params.comingEventId}`)
        }

    },	

	data() {
        return {
        	comingEvents: [
                {
                id: 1,
                title: 'Why not dancing',
                guestsNumber: '23',
                organizer: 'Christine Pemba Kingala',
                timer: 'J-5',
                date : '17/08/2017',
                imgEvent: require('images/event-img-1.png'),
                imgProfil: require('images/profil-img-1.png')
                },
                {
                id: 2,
                title: 'Aperoo',
                guestsNumber: '6',
                organizer: 'Noemie Neda',
                timer: 'J-9',
                date : '03/06/2017',
                imgEvent: require('images/event-img-2.png'),
                imgProfil: require('images/profil-img-2bis.png')
                },
                {
                id: 3,
                title: 'Champagne, tomates cerises',
                guestsNumber: '31',
                organizer: 'Kyriam Nacim',
                timer: 'J-12',
                date : '08/07/2017',
                imgEvent: require('images/event-img-3.png'),
                imgProfil: require('images/profil-img-3.png')
                },
                {
                id: 4,
                title: 'Et pourquoi pas',
                guestsNumber: '8',
                organizer: 'Hendi Siam',
                timer: 'Dans 1 mois',
                date : '06/07/2017',
                imgEvent: require('images/event-img-4.png'),
                imgProfil: require('images/profil-img-4.png')
                }
            ],
            
        	comingEvent: null,
        }
    },

    created() {
    	const eventObj = _.find(this.comingEvents, { id: this.$route.params.comingEventId })
    	this.comingEvent = eventObj
    },

 
}


</script>