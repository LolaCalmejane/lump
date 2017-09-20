
// Importer jQuery
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
require('bootstrap-sass')

Vue.use(VueLodash, lodash)

// On importe Vue
import Vue from 'vue'

// On importe Vue Router
import VueRouter from 'vue-router'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'

// On importe axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// On importe les composants Vue
import App from './App.vue'

// Importer Font-Awesome
// import all icons if you don't care about bundle size
import 'vue-awesome/icons'
/* Register component */
import Icon from 'vue-awesome/components/Icon'
require('font-awesome/css/font-awesome.css');
// globally (in your main .js file)
Vue.component('icon', Icon)

Vue.config.productionTip = false

// On importe les composants Vue
import Create from './components/Create/Create.vue'
import AddFriends from './components/Create/AddFriends/AddFriends.vue'
import allComingEvents from './components/Events/AllComingEvents/allComingEvents.vue'
import allPassedEvents from './components/Events/AllPassedEvents/allPassedEvents.vue'
import Event from './components/Events/Event/Event.vue'
import Login from './components/Login/Login.vue'
import Inscription from './components/Login/Inscription.vue'
import Profil from './components/Profil/Profil.vue'
import Search from './components/Search/Search.vue'
import Musics from './components/Profil/Musics/Musics.vue'
import Playlists from './components/Profil/Playlists/Playlists.vue'
import FetchData from './components/FetchData/FetchData.vue'
import Static from './components/Static/Static.vue'

// On importe Vuex
import store from './store';

  
  var btoa = require('btoa')
    , bin = "last:lastlast"
    , b64 = btoa(bin)
    ;

  console.log(b64); // "SGVsbG8sIBZM"

// On utilise Vue Router
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// AXIOS HEADER Authorization
axios.defaults.baseURL = 'http://localhost:8080/api/1.0/';

// On configure nos routes
const routes = [
  { path: '/Create/', component: Create, name: 'create' },
  { path: '/FetchData/', component: FetchData, name: 'fetchdata' },
  { path: '/AddFriends/', component: AddFriends, name: 'addfriends' },
  { path: '/Futurs-evenements/',component: allComingEvents, name: 'allComingEvents' },
  { path: '/Anciens-evenements/',component: allPassedEvents, name: 'allPassedEvents' },
  { path: '/Event/:comingEventId', component: Event, name: 'event' },
  { path: '/Login/', component: Login, name: 'login' },
  { path: '/Inscription', component: Inscription, name: 'inscription' },
  { path: '/Profil/', component: Profil, name: 'profil' },
  { path: '/Musics/', component: Musics, name: 'musics' },
  { path: '/Playlists/', component: Playlists, name: 'playlists' },
  { path: '/Search/', component: Search, name: 'search' },
  { path: '/Static/', component: Static, name: 'static' },  
  { path: '*', redirect: 'Login' }
]

// On initialise le router
const router = new VueRouter({
  routes,
  mode:'history'
})

// On initialise l'application
new Vue({
  el: '#app',
  store, 
  template: '<App/>',
  components: { App},
  router,
  
})

