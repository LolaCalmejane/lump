<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->
<template>
    <div id="create" class="create">
        <div class="header-create">
            <div class="content">
                <h2 class="big-title">Créer un événement</h2>
            </div>
        </div>
        <div class="content">
        <div class="create-content">
            <div class="left-side"> <!-- Type event select content -->
                <h3 class="subtitle-gold">Type d'événement</h3>
                <div class="event-type"> 
                    <div class="description" v-on:click="toggleActive" v-bind:class="{ active: isActive }">
                        <div>
                            <span class="title">Un apéritif</span>
                            <p class="body-text">Vous organisez une soirée inférieur à 4 heures</p>
                        </div>
                    </div>
                    <div class="description" v-on:click="toggleActive" v-bind:class="{ active: isActive }">
                        <div>
                            <span class="title">Une soirée</span>
                            <p class="body-text">Vous organisez une soirée supérieur à 4 heures</p>
                        </div>
                    </div>
                    <div class="description" v-on:click="toggleActive" v-bind:class="{ active: isActive }">
                        <div>
                             <span class="title" > Autre : {{text_content}}</span>
                             <input class="body-text" type="text" placeholder="Écrivez ici" v-model="text_content" />
                             <span class="detail">Ex : Anniversaire, Nouvel an, Crémaillère, Barbecue, Roadtrip</span>
                         </div>
                    </div>
                </div>
            </div>
            <div class="right-side"><!-- formulaire content -->
                <form action="">
                    <label class="subtitle-gold" for="name">Nom de l'événement</label>
                    <input class="body-text" type="text" placeholder="Nom de l'événement" id="name" />
                    <label class="subtitle-gold" for="description">Description</label>
                    <textarea class="body-text" v-model="description" placeholder="Quelques mots sur votre événement" id="description"></textarea>
                    <label class="subtitle-gold" for="pays">Choisissez le pays </label>
                    <select class="body-text" id="pays"v-model="selected">
                        <option disabled >Please select one</option>
                        <option>France </option>
                        <option>Afghanistan </option>
                        <option>Afrique_Centrale </option>
                        <option>Afrique_du_Sud </option> 
                        <option>Albanie </option>
                        <option>Algerie </option>
                        <option>Allemagne </option>
                        <option>Andorre </option>
                        <option>Angola </option>
                        <option>Anguilla </option>
                        <option>Arabie_Saoudite </option>
                        <option>Argentine </option>
                        <option>Armenie </option> 
                        <option>Australie </option>
                        <option>Autriche </option>
                        <option>Azerbaidjan </option>
                        <option>Bahamas </option>
                        <option>Bangladesh </option>
                        <option>Barbade </option>
                        <option>Bahrein </option>
                        <option>Belgique </option>
                        <option>Belize </option>
                        <option>Benin </option>
                        <option>Bermudes </option>
                        <option>Bielorussie </option>
                        <option>Bolivie </option>
                        <option>Botswana </option>
                        <option>Bhoutan </option>
                        <option>Boznie_Herzegovine </option>
                        <option>Bresil </option>
                        <option>Brunei </option>
                        <option>Bulgarie </option>
                        <option>Burkina_Faso </option>
                        <option>Burundi </option>
                        <option>Caiman </option>
                        <option>Cambodge </option>
                        <option>Cameroun </option>
                        <option>Canada </option>
                        <option>Canaries </option>
                        <option>Cap_Vert </option>
                        <option>Chili </option>
                        <option>Chine </option> 
                        <option>Chypre </option> 
                        <option>Colombie </option>
                        <option>Colombie </option>
                        <option>Congo </option>
                        <option>Congo_democratique </option>
                        <option>Cook </option>
                        <option>Coree_du_Nord </option>
                        <option>Coree_du_Sud </option>
                        <option>Costa_Rica </option>
                        <option>Côte_d_Ivoire </option>
                        <option>Croatie </option>
                        <option>Cuba </option>
                        <option>Danemark </option>
                        <option>Djibouti </option>
                        <option>Dominique </option>
                        <option>Egypte </option> 
                        <option>Emirats_Arabes_Unis </option>
                        <option>Equateur </option>
                        <option>Erythree </option>
                        <option>Espagne </option>
                        <option>Estonie </option>
                        <option>Etats_Unis </option>
                        <option>Ethiopie </option>
                        <option>Falkland </option>
                        <option>Feroe </option>
                        <option>Fidji </option>
                        <option>Finlande </option>
                        <option>France </option>
                        <option>Gabon </option>
                        <option>Gambie </option>
                        <option>Georgie </option>
                        <option>Ghana </option>
                        <option>Gibraltar </option>
                        <option>Grece </option>
                        <option>Grenade </option>
                        <option>Groenland </option>
                        <option>Guadeloupe </option>
                        <option>Guam </option>
                        <option>Guatemala</option>
                        <option>Guernesey </option>
                        <option>Guinee </option>
                        <option>Guinee_Bissau </option>
                        <option>Guinee_Equatoriale </option>
                        <option>Guyana </option>
                        <option>Guyane_Francaise </option>
                        <option>Haiti </option>
                        <option>Hawaii </option> 
                        <option>Honduras </option>
                        <option>Hong_Kong </option>
                        <option>Hongrie </option>
                        <option>Inde </option>
                        <option>Indonesie </option>
                        <option>Iran </option>
                        <option>Iraq </option>
                        <option>Irlande </option>
                        <option>Islande </option>
                        <option>Israel </option>
                        <option>italie </option>
                        <option>Jamaique </option>
                        <option>Jan Mayen </option>
                        <option>Japon </option>
                        <option>Jersey </option>
                        <option>Jordanie </option>
                        <option>Kazakhstan </option>
                        <option>Kenya </option>
                        <option>Kirghizistan </option>
                        <option>Kiribati </option>
                        <option>Koweit </option>
                        <option>Laos </option>
                        <option>Lesotho </option>
                        <option>Lettonie </option>
                        <option>Liban </option>
                        <option>Liberia </option>
                        <option>Liechtenstein </option>
                        <option>Lituanie </option> 
                        <option>Luxembourg </option>
                        <option>Lybie </option>
                        <option>Macao </option>
                        <option>Macedoine </option>
                        <option>Madagascar </option>
                        <option>Madère </option>
                        <option>Malaisie </option>
                        <option>Malawi </option>
                        <option>Maldives </option>
                        <option>Mali </option>
                        <option>Malte </option>
                        <option>Man </option>
                        <option>Mariannes du Nord </option>
                        <option>Maroc </option>
                        <option>Marshall </option>
                        <option>Martinique </option>
                        <option>Maurice </option>
                        <option>Mauritanie </option>
                        <option>Mayotte </option>
                        <option>Mexique </option>
                        <option>Micronesie </option>
                        <option>Midway </option>
                        <option>Moldavie </option>
                        <option>Monaco </option>
                        <option>Mongolie </option>
                        <option>Montserrat </option>
                        <option>Mozambique </option>
                        <option>Namibie </option>
                        <option>Nauru </option>
                        <option>Nepal </option>
                        <option>Nicaragua </option>
                        <option>Niger </option>
                        <option>Nigeria </option>
                        <option>Niue </option>
                        <option>Norfolk </option>
                        <option>Norvege </option>
                        <option>Nouvelle_Caledonie </option>
                        <option>Nouvelle_Zelande </option>
                        <option>Oman </option>
                        <option>Ouganda </option>
                        <option>Ouzbekistan </option>
                        <option>Pakistan </option>
                        <option>Palau </option>
                        <option>Palestine </option>
                        <option>Panama </option>
                        <option>Papouasie_Nouvelle_Guinee </option>
                        <option>Paraguay </option>
                        <option>Pays_Bas </option>
                        <option>Perou </option>
                        <option>Philippines </option> 
                        <option>Pologne </option>
                        <option>Polynesie </option>
                        <option>Porto_Rico </option>
                        <option>Portugal </option>
                        <option>Qatar </option>
                        <option>Republique_Dominicaine </option>
                        <option>Republique_Tcheque </option>
                        <option>Reunion </option>
                        <option>Roumanie </option>
                        <option>Royaume_Uni </option>
                        <option>Russie </option>
                        <option>Rwanda </option>
                        <option>Sahara Occidental </option>
                        <option>Sainte_Lucie </option>
                        <option>Saint_Marin </option>
                        <option>Salomon </option>
                        <option>Salvador </option>
                        <option>Samoa_Occidentales</option>
                        <option>Samoa_Americaine </option>
                        <option>Sao_Tome_et_Principe </option> 
                        <option>Senegal </option> 
                        <option>Seychelles </option>
                        <option>Sierra Leone </option>
                        <option>Singapour </option>
                        <option>Slovaquie </option>
                        <option>Slovenie</option>
                        <option>Somalie </option>
                        <option>Soudan </option> 
                        <option>Sri_Lanka </option> 
                        <option>Suede </option>
                        <option>Suisse </option>
                        <option>Surinam </option>
                        <option>Swaziland </option>
                        <option>Syrie </option>
                        <option>Tadjikistan </option>
                        <option>Taiwan </option>
                        <option>Tonga </option>
                        <option>Tanzanie </option>
                        <option>Tchad </option>
                        <option>Thailande </option>
                        <option>Tibet </option>
                        <option>Timor_Oriental </option>
                        <option>Togo </option> 
                        <option>Trinite_et_Tobago </option>
                        <option>Tristan de cuncha </option>
                        <option>Tunisie </option>
                        <option>Turmenistan </option> 
                        <option>Turquie </option>
                        <option>Ukraine </option>
                        <option>Uruguay </option>
                        <option>Vanuatu </option>
                        <option>Vatican </option>
                        <option>Venezuela </option>
                        <option>Vierges_Americaines </option>
                        <option>Vierges_Britanniques </option>
                        <option>Vietnam </option>
                        <option>Wake </option>
                        <option>Wallis et Futuma </option>
                        <option>Yemen </option>
                        <option>Yougoslavie </option>
                        <option>Zambie </option>
                        <option>Zimbabwe </option>
                    </select>
                    <label class="subtitle-gold" for="adresse">Adresse</label>
                    <input class="body-text" type="text" placeholder="Adresse de l'événement" id="adresse" />
                    <label class="subtitle-gold" for="code-postal">Code postal</label>
                    <input class="body-text" type="text" placeholder="00000" id="adresse" />
                </form>
            </div>
        </div>
        </div>

      
    </div> <!-- end profil -->
</template>

<!-- SCRIPT -->
<script>

export default {
    name: 'create',
    methods: {
        toggleActive: function (){
            this.isActive = !this.isActive;
        }
    },
    data() {
        return {
            text_content: '',
            description:'',
            selected: 'France',
            isActive : false
        }
    }
    
}   

</script>
