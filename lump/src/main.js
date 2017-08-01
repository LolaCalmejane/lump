
// Importer jQuery
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
require('bootstrap-sass')


// On importe Vue
import Vue from 'vue'

// On importe Vue Router
import VueRouter from 'vue-router'


// On importe les composants Vue
import App from './App.vue'

Vue.config.productionTip = false


// On importe les composants Vue
import Create from './components/Create/Create.vue'
import Events from './components/Events/Events.vue'
import Login from './components/Login/Login.vue'
import Profil from './components/Profil/Profil.vue'
import Search from './components/Search/Search.vue'



// On utilise Vue Router
Vue.use(VueRouter);


// On configure nos routes
const routes = [
  {
    path: '/Create/',
    component: Create,
    name: 'create'
  },
  {
    path: '/Events/',
    component: Events,
    name: 'events',
  },
  {
    path: '/Login/',
    component: Login,
    name: 'login',
  },
    {
    path: '/Profil/',
    component: Profil,
    name: 'profil',
  },
    {
    path: '/Search/',
    component: Search,
    name: 'search',
  }
]

// On initialise le router
const router = new VueRouter({
  routes
})



// On initialise l'application
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
})