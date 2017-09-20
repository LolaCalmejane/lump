<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
    <div id="allPassedEvents" class="events">
        <static></static>
        <!-- Grid events coming -->
        <div class="content all-passed-events">
                <div class="top-events">
                    <h2 class="subtitle-gold"> Événement passés </h2>
                    <p class="detail"> | Voir tout</p>
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
    </div> <!-- end profil -->
</template>

<!-- SCRIPT -->
<script>
import HeaderProfil from '../../Profil/HeaderProfil/HeaderProfil.vue'
import Static from '../../Static/Static.vue'

export default {
    props: ['event'],
    name: 'allPassedEvents',
    components: {
        'static' : Static
    },
    
    data() {
        return {
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
            ]
        }
    }
}

</script>
