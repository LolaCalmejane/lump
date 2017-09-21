<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
    <div id="allComingEvents">
        <static></static>
        <!-- Grid events coming -->
        <section class="events">
            <div class="content all-coming-events">
                <!-- Events Coming -->
                <div class="top-events">
                    <h2 class="subtitle-gold"> Événement à venir </h2>
                    <p class="detail"> | Voir tout</p>
                </div>
                <div class="events-coming">
                    <div class="event" v-for='comingEvent in comingEvents'>
                        <div class="block-mini-image">
                            <img class="mini-image" v-bind:src="comingEvent.imgProfil" alt="">
                        </div>
                        <div class="event-context">
                            <span class="title ">{{comingEvent.organizer}}</span>
                            <p class="detail">organise</p>
                        </div>
                         <router-link :to="{ name: 'event', params: { comingEventId: comingEvent.id } } ">
                                <div class="img-event">
                                    <img v-bind:src="comingEvent.imgEvent" alt="">
                                    <span>J-12</span>
                                </div>
                            </router-link>
                        <span class="title">{{comingEvent.title}}</span>
                        <span class="bottom-context detail">
                        {{comingEvent.guestsNumber}} invités | {{comingEvent.date}}</span>
                    </div>
                </div>
            </div>
        </section>
    </div> <!-- end -->
</template>

<!-- SCRIPT -->
<script>
import HeaderProfil from '../../Profil/HeaderProfil/HeaderProfil.vue'
import Static from '../../Static/Static.vue'

export default {
    props: ['event'],
    name: 'allComingEvents',
    components: {
        'header-profil': HeaderProfil,
        'static' : Static
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
                },
                {
                id: 5,
                title: 'Why not dancing',
                guestsNumber: '23',
                organizer: 'Christine Pemba Kingala',
                timer: 'J-5',
                date : '17/08/2017',
                imgEvent: require('images/event-img-1.png'),
                imgProfil: require('images/profil-img-1.png')
                },
                {
                id: 6,
                title: 'Aperoo',
                guestsNumber: '6',
                organizer: 'Noemie Neda',
                timer: 'J-9',
                date : '03/06/2017',
                imgEvent: require('images/event-img-2.png'),
                imgProfil: require('images/profil-img-2bis.png')
                },
                {
                id: 7,
                title: 'Champagne, tomates cerises',
                guestsNumber: '31',
                organizer: 'Kyriam Nacim',
                timer: 'J-12',
                date : '08/07/2017',
                imgEvent: require('images/event-img-3.png'),
                imgProfil: require('images/profil-img-3.png')
                },
                {
                id: 8,
                title: 'Et pourquoi pas',
                guestsNumber: '8',
                organizer: 'Hendi Siam',
                timer: 'Dans 1 mois',
                date : '06/07/2017',
                imgEvent: require('images/event-img-4.png'),
                imgProfil: require('images/profil-img-4.png')
                }
            ],

            passedEvents: [
                {
                id: 1,
                title: 'Why not dancing',
                guestsNumber: '23',
                organizer: 'Christine Pemba Kingala',
                timer: 'J-5',
                date : '17/08/2017',
                imgEvent: require('images/event-img-5.png'),
                imgProfil: require('images/profil-img-1.png')
                },
                {
                id: 2,
                title: 'Aperoo',
                guestsNumber: '6',
                organizer: 'Noemie Neda',
                timer: 'J-9',
                date : '03/06/2017',
                imgEvent: require('images/event-img-6.png'),
                imgProfil: require('images/profil-img-2bis.png')
                },
                {
                id: 3,
                title: 'Champagne, tomates cerises',
                guestsNumber: '31',
                organizer: 'Kyriam Nacim',
                timer: 'J-12',
                date : '08/07/2017',
                imgEvent: require('images/event-img-7.png'),
                imgProfil: require('images/profil-img-3.png')
                },
                {
                id: 4,
                title: 'Et pourquoi pas',
                guestsNumber: '8',
                organizer: 'Hendi Siam',
                timer: 'Dans 1 mois',
                date : '06/07/2017',
                imgEvent: require('images/event-img-8.png'),
                imgProfil: require('images/profil-img-4.png')
                }
            ]
        }
    }
}

</script>
