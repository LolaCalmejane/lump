<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->

<template>
  <div id ="header-profil" class="header-profil">
    <div class="content">
      <div class="infos-profil">
        <h1 class="big-title">{{name}}</h1>
        <div class="img-profil">
          <img src="../../../assets/images/profil-img.png" alt="Jude Ademilo">
          <div class="circles-red"></div>
        </div>
        <div class="datas-profil">
          <p class="subtitle-gold">Description</p>
          <p class=" description body-text">{{description}}</p>
          <div><span class="title">{{numberEvents}}</span><p class="body-text">Événements</p></div>
          <div><span class="title">{{numberFriends}}</span><p class="body-text">Amis</p></div>
          <button><img src="" alt=""><p class="subtitle-white">Modifier le profil</p></button>
        </div>
        <nav class="subnav">
        <ul>
          <li><router-link to ="/profil" class="subtitle-white">Evenements</router-link></li>
          <li><router-link to="musics" class="subtitle-white">Musiques</router-link></li>
          <li><router-link to ="/" class="subtitle-white">Etoiles</router-link></li>
          <li><a class="subtitle-white" href="">Playlists</a></li>
          <li><a class="subtitle-white" href="">Agenda</a></li>
          </ul>
        </nav>
      </div>
    </div> <!-- end content -->
  </div>
</template>

<!-- SCRIPT -->
<script>

export default {
  
  name: 'header-profil',
  data: function () {
    return {
      name : 'Jude Ademilo',
      // imgProfil : '',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing.',
      numberEvents : '12',
      numberFriends : '33',
    }    
  }
}
</script>
