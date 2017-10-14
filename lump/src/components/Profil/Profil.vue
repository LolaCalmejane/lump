<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
    <div id="profil" class="profil">
        <static></static>
        <header-profil></header-profil>
        <!-- Grid events -->
       <section class="events">
        <h2>{{Result.login}}</h2>
            <div class="content">
                <!-- Events Coming -->
                <div class="top-events">
                    <h2 class="subtitle-gold"> Événement à venir </h2>
                    <router-link to="futurs-evenements" class="detail">| Voir tout</router-link>
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
            <!-- </div> -->

      <!-- Events Passed -->
            <!-- <div class="content"> -->
                <div class="top-events">
                    <h2 class="subtitle-gold"> Événement passés </h2>
                    <router-link to="anciens-evenements" class="detail">| Voir tout</router-link>
                </div>
                <div class="events-passed">
                    <div class="event" v-for='passedEvent in passedEvents'>
                        <div class="block-mini-image"><img class="mini-image" v-bind:src="passedEvent.imgProfil" alt=""></div>
                        <div class="event-context">
                            <span class="title ">{{passedEvent.organizer}}</span>
                            <p class="detail">organise</p>
                        </div>
                        <div class="img-event"> <!-- carré d'un événement -->
                            <img v-bind:src="passedEvent.imgEvent" alt="">
                            <div class="whenHover">
                                <div class="dropdown"> 
                                    <button data-toggle="dropdown" class="icon-other dropdown-toggle" type="button"></button>
                                    <ul role="menu" class="dropdown-menu dropdown-menu-right">
                                        <li><a class="subtitle-white" href="#">Ajouter à mes playlists</a></li>
                                        <li><a class="subtitle-white" href="#">Partager</a></li>
                                        <li role="separator" class="divider"></li>
                                        <li><a class="subtitle-white" href="#">Autre</a></li>
                                    </ul>
                                </div>
                                <!-- icon-play when hover -->
                                <span class="icon-play"></span> 
                                <!-- <div class="rating"> --> <!-- stars ranking -->
                                   <!--  <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span> -->
                                <!-- </div> -->
                            </div>
                        </div>
                        <span class="title">{{passedEvent.title}}</span>
                        <span class="bottom-context detail">
                    {{passedEvent.guestsNumber}} invités | {{passedEvent.date}}</span>
                    </div>
                </div>
            </div>
        </section>
    </div> <!-- end profil -->
</template>

<!-- SCRIPT -->
<script>
import axios from 'axios'
import HeaderProfil from './HeaderProfil/HeaderProfil.vue'
import Static from '../Static/Static.vue'

 console.log(this.Result);

export default {
    props: ['event'],
    name: 'profil',
    components: {
        'header-profil': HeaderProfil,
        'static' : Static
    },
    
    data() {
        return {
            Result: [],
            pauseShow: false,
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
