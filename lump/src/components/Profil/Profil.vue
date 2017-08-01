<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
  <div id="profil">
  <div class="header-profil">
    <div class="content">
      <div class="circles-red"></div>
      <div class="infos-profil">
        <h1 class="big-title">{{name}}</h1>
        <div class="img-profil">

          <img v-bind:src="imageSrc"> alt="Jude Ademilo">
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
    </div> <!-- end header profil -->
  </div> <!-- end content -->
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
      imageSrc :'../../assets/images/profil-img'
    }
  }
}



</script>
