// Code à rajouter dans le fichier "App.vue"
<style lang="scss">@import '/assets/scss/main.scss';</style>

<!-- CSS -->

<!-- HTML -->
<template>
  <div id="app">
    <div class="content">
      <nav class="circleBehind">
        <ul>
          <li id="brand" class="subtitle-white">Lump</li>
          <input type="text" name="search" class="subtitle-white" placeholder="Rechercher">
          <li><router-link to ="/create" class="subtitle-white">Créer</router-link></li>
          <li><router-link to ="/events" class="subtitle-white">A venir</router-link></li>
          <li><router-link to ="/profil" class="subtitle-white">Jude Ademilo</router-link></li>
          <li class="dropdown subtitle-white">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a class="subtitle-white" href="#">Modifier profil</a></li>
                  <li><a class="subtitle-white" href="#">Déconnexion</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a class="subtitle-white" href="#">Paramètres</a></li>
                </ul>
              </li>
        </ul>
      </nav>
    </div>

    <div class="sidebar">
      
    </div>

    <router-view></router-view>

  </div> <!-- fin app -->
</template>

<!-- SCRIPT -->
<script>

export default {
  name: 'app',
  data() {
    return {
       msg: ''
    }
  }
}

</script>
