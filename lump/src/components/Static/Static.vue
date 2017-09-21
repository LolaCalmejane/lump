<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- CSS -->

<!-- HTML -->
<template>
    <div id="static">
        <nav class="global-nav circleBehind">
            <div class="content">
                <ul>
                    <router-link to ="/profil" class="subtitle-white"><img id="brand" src="../../assets/images/img-logo.png" alt="Logo"></router-link>
                    <div>
                        <search></search>
                        <li><router-link to ="/create" class="subtitle-white">Créer</router-link></li>
                        <li><router-link to ="/futurs-evenements" class="subtitle-white">Événements</router-link></li>
                        <li><router-link to ="/profil" class="subtitle-white">Jude Ademilo</router-link></li>
                    </div>
                    <!--li class="dropdown subtitle-white">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span class="caret"></span></a>
                    <!--ul class="dropdown-menu dropdown-menu-right">
                        <!--li><a class="subtitle-white" href="#">Modifier profil</a></li-->
                        <!--li><a class="subtitle-white" href="#">Déconnexion</a></li-->
                        <!--li role="separator" class="divider"></li-->
                        <!--li><a class="subtitle-white" href="#">Paramètres</a></li-->
                    <!--/ul-->
                    <!--/li-->
                </ul>
            </div>
        </nav>
        <sidebar></sidebar>
    </div> <!-- fin app -->
</template>

  

<!-- SCRIPT -->
<script>
import Sidebar from '../Sidebar/Sidebar.vue'
import Search from '../Search/Search.vue'

export default {
    name: 'static', 
    components: {
        'sidebar': Sidebar,
        'search' : Search
    }
}

</script>
