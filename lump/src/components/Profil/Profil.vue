<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
  <div id="profil">
  <section class="header-profil">
    <div class="content">
      <div class="circles-red"></div>
      <div class="infos-profil">
        <h1 class="big-title">{{name}}</h1>
        <div class="img-profil">
          <img src="../../assets/images/profil-img.png" alt="Jude Ademilo">
        </div>
        <div class="datas-profil">
          <p class="subtitle-gold">Description</p>
          <p class=" description body-text">{{description}}</p>
          <div><span class="title">{{numberEvents}}</span><p class="body-text">Événements</p></div>
          <div><span class="title">{{numberFriends}}</span><p class="body-text">Amis</p></div>
          <button><img src="" alt=""><p class="subtitle-white">Modifier le profil</p></button>
        </div>
      </div>
      <nav class="subnav">
        <a class="subtitle-white" href="">Événements</a>
        <a class="subtitle-white" href="">Musiques</a>
        <a class="subtitle-white" href="">Étoiles</a>
        <a class="subtitle-white" href="">Playlists</a>
        <a class="subtitle-white" href="">Agenda</a>
      </nav>
    </div> <!-- end content -->
  </section> <!-- end header profil -->

  <section class="content events">
    <div class="top-events">
      <h2 class="subtitle-gold"> Événement à venir </h2>
      <p class="detail"> | Voir tout</p>
    </div>
    <div class="events-coming">
      <div class="event"v-for='event in events'> 
        <div class="mini-image"></div>
        <div class="event-context">
          <span class="title">{{event.organizer}}</span>
          <p class="body-text">organise</p>
        </div>
        <div class="img-event"><img alt=""></div>
        <span class="title">{{event.title}}</span>
        <span class="body-text">{{event.guestsNumber}} invités</span>
        <span class="body-text">|{{event.date}}</span>
      </div>
    </div>

    <div class="top-events">
      <h2 class="subtitle-gold"> Événement à venir </h2>
      <p class="detail"> | Voir tout</p>
    </div>
    <div class="events-coming">
      <div class="event"v-for='event in events'> 
        <div class="mini-image"></div>
        <div class="event-context">
          <span class="title">{{event.organizer}}</span>
          <p class="body-text">organise</p>
        </div>
        <div class="img-event"><img v-bind:src="event.imgEvent" alt=""></div>
        <span class="title">{{event.title}}</span>
        <span class="body-text">{{event.guestsNumber}} invités</span>
        <span class="body-text">|{{event.date}}</span>
      </div>
    </div>
  </section>

  
  </div> <!-- end profil -->
</template>

<!-- SCRIPT -->
<script>

export default {
  name: 'profil',
  data() {
    return {
      name : 'Jude Ademilo',
      // imgProfil : '',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing.',
      numberEvents : '12',
      numberFriends : '33',
      events: [
      {
        id: 1,
        title: 'Why not dancing',
        guestsNumber: '23',
        organizer: 'Isis Michela',
        timer: 'J-5',
        date : '17/08/2017',
        imgEvent: require('images/profil-img.png')
      },
      {
        id: 2,
        title: 'Aperoo',
        guestsNumber: '6',
        organizer: 'Noemie Neda',
        timer: 'J-9',
        date : '03/06/2017',
        imgEvent: require('images/profil-img.png')
      },
      {
        id: 3,
        title: 'Champagne, tomate...',
        guestsNumber: '31',
        organizer: 'Kyriam Nacim',
        timer: 'J-12',
        date : '08/07/2017',
        imgEvent: 'images/profil-img.png'
      },
      {
        id: 4,
        title: 'Et pourquoi pas',
        guestsNumber: '8',
        organizer: 'Hendi Siam',
        timer: 'Dans 1 mois',
        date : '06/07/2017',
        imgEvent: 'images/profil-img.png'
      }
      ]
    }
  }
}

</script>
