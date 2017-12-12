<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->

<template>
  <div id ="header-profil" class="header-profil">
    <div class="content">
      <div class="content-header">
        <div class="img-profil">
          <img src="../../../assets/images/profil-img.png" alt="Jude Ademilo">
          <!--div class="circles-red"></div-->
          <img src="../../../assets/images/img-pointsRouges.png" alt="Points-Rouges">
        </div>
        <div class="datas-profil">
          <div class="data-left">
            <h1 class="big-title">{{Result.login}}</h1>
            <button type="button" class="subtitle-white">Déconnexion</button>
          </div>
          <div class="data-right">
            <div class="data-right-element">
              <h2 class="subtitle-gold">Événements</h2>
              <span class="title">{{numberEvents}}</span>
              <p class="body-text">Événements</p>
            </div>
            <div class="data-right-element">
              <h2 class="subtitle-gold">Amis</h2>
              <span class="title">{{numberFriends}}</span>
              <p class="body-text">Amis</p>
            </div>
          </div>
        </div>
        <nav class="subnav">
          <ul>
            <li><router-link to ="/profil" class="subtitle-white">Événements</router-link></li>
            <li><router-link to="/musics" class="subtitle-white">Musiques</router-link></li>
            <li><router-link to ="/stars" class="subtitle-white">Étoiles</router-link></li>
            <li><router-link to="/playlists" class="subtitle-white">Playlists</router-link></li>
            <li><router-link to="/calendar" class="subtitle-white">Agenda</router-link></li>
            <li><router-link to="/friends" class="subtitle-white">Amis</router-link></li>
          </ul>
        </nav>
      </div>
    </div> <!-- end content -->
  </div>
</template>

<!-- SCRIPT -->
<script>
import axios from 'axios'

export default {
  name: 'header-profil',
  data: function () {
    return {
      Result:[],
      login:'',
      name : 'Jude Ademilo',
      EventList:[],
      // imgProfil : '',
      description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique modi necessitatibus perspiciatis dicta.',
      numberEvents : '12',
      numberFriends : '33',
    }    
  },
  
mounted() {
    axios.get("http://localhost:3000/api/1.0/user/login?authorization="+ localStorage.getItem('authUser'), this.Result)
        .then((response) =>{ 
            console.log(response.data);
            this.Result = response.data.result;
        });
}




}
</script>
