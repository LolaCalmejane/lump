<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
    <div id="profil" class="profil">
        <header-profil></header-profil>
        <!-- Grid events -->
        <section class="events">
            <div class="content">
                <!-- Events Coming -->
                <div class="top-events">
                    <h2 class="subtitle-gold"> Événement à venir </h2>
                    <p class="detail"> | Voir tout</p>
                </div>
                <div class="events-coming">
                    <div class="event" v-for='event in events'>
                        <div class="block-mini-image"><img class="mini-image" v-bind:src="event.imgProfil" alt=""></div>
                        <div class="event-context">
                            <span class="title ">{{event.organizer}}</span>
                            <p class="detail">organise</p>
                        </div>
                        <div class="img-event">
                            <img v-bind:src="event.imgEvent" alt="">
                            <span>J-12</span>
                        </div>
                        <span class="title">{{event.title}}</span>
                        <span class="bottom-context detail">
                        {{event.guestsNumber}} invités | {{event.date}}</span>
                    </div>
                </div>
            </div>

      <!-- Events Passed -->
            <div class="content">
                <div class="top-events">
                    <h2 class="subtitle-gold"> Événement passés </h2>
                    <p class="detail"> | Voir tout</p>
                </div>
                <div class="events-passed">
                    <div class="event" v-for='event in events'>
                        <div class="block-mini-image"><img class="mini-image" v-bind:src="event.imgProfil" alt=""></div>
                        <div class="event-context">
                            <span class="title ">{{event.organizer}}</span>
                            <p class="detail">organise</p>
                        </div>
                        <div class="img-event"> <!-- carré d'un événement -->
                            <img v-bind:src="event.imgEvent" alt="">
                            <div class="dropdown"> <!-- icon other on hover -->
                                <button data-toggle="dropdown" class="icon-other dropdown-toggle" type="button"></button>
                                <ul role="menu" class="dropdown-menu dropdown-menu-right">
                                    <li><a class="subtitle-white" href="#">Ajouter à mes playlists</a></li>
                                    <li><a class="subtitle-white" href="#">Partager</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a class="subtitle-white" href="#">Autre</a></li>
                                </ul>
                            </div>
                            <span class="icon-play"></span> <!-- icon-play on hover -->
                            <div class="rating"> <!-- stars ranking -->
                                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                            </div>
                        </div>
                        <span class="title">{{event.title}}</span>
                        <span class="bottom-context detail">
                    {{event.guestsNumber}} invités | {{event.date}}</span>
                    </div>
                </div>
            </div>
        </section>
    </div> <!-- end profil -->
</template>

<!-- SCRIPT -->
<script>
import HeaderProfil from './HeaderProfil/HeaderProfil.vue'

export default {
    name: 'profil',
    components: {
        'header-profil': HeaderProfil
    },

    data() {
        return {
            pauseShow: false,
            events: [
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
                imgProfil: require('images/profil-img-2.png')
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
            ]
        }
    }
}

</script>
