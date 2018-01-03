<!-- CSS -->
<style lang="scss">@import 'src/assets/scss/main.scss';</style>

<!-- HTML -->

<template>
	<div id ="friend-grid" class="friends-grid">
		 <table>
		    <thead>
		      <tr>
		        <th class="subtitle-gold" v-for="key in columns"
		          @click="sortBy(key)"
		          :class="{ active: sortKey == key }">
		          {{ key | capitalize }}
		          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
		          </span>
		        </th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr v-for="(entry, index) in filteredData" v-bind:value="index">
		        <td v-for="key in columns">
		          {{entry[key]}}
		        </td> 
		        <span class="mini-like-button iconLike" @click.prevent="AddParticipant(result, $event)"></span>
		        <span class="iconDelete"></span>
		      </tr>
		    </tbody>
		  </table>
	</div>
</template>

<!-- SCRIPT -->
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  
	name: 'friends-grid',
	props: {
	    data: Array,
	    columns: Array,
	    filterKey: String
	},
  	data: function () {
    	var sortOrders = {}
    	this.columns.forEach(function (key) {
      		sortOrders[key] = 1
    	})
	    return {
	    	Result: [],
	    	ParticipantToEvent:[],
	    	friend:'',
	    	name:'',
	    	id:'',
	      	sortKey: '',
	     	sortOrders: sortOrders
	    }
	},
  	computed: {
	    filteredData: function () {
			var sortKey = this.sortKey
			var filterKey = this.filterKey && this.filterKey.toLowerCase()
			var order = this.sortOrders[sortKey] || 1
			var data = this.data
			if (filterKey) {
				data = data.filter(function (row) {
					return Object.keys(row).some(function (key) {
						return String(row[key]).toLowerCase().indexOf(filterKey) > -1
					})
				})
			}
			if (sortKey) {
				data = data.slice().sort(function (a, b) {
					a = a[sortKey]
					b = b[sortKey]
					return (a === b ? 0 : a > b ? 1 : -1) * order
				})
			}
			return data
	    },

      ...mapGetters([
        'deletemyfriend'
      ])

	  },
  	filters: {
	    capitalize: function (str) {
	      return str.charAt(0).toUpperCase() + str.slice(1)
	    }
  	},
  	methods: {
	    sortBy: function (key) {
		    this.sortKey = key
		    this.sortOrders[key] = this.sortOrders[key] * -1
	    },

		AddParticipant(result, event){
		const i_participant = event.target.getAttribute('value')
		axios({
		  method: 'post',
		  url: 'http://localhost:3000/api/1.0/event/addParticipant',
		  data: { 
		    authorization: localStorage.getItem('authUser'),
		    id: this.Events[i_participant]._id,
		    participant: '59983a2630d94842ac1a1597'
		  }, 
		})
		.then((response) =>{ 
            this.ParticipantToEvent = response.data.result;
            console.log(this.AddtoPlaylist);
            
			})
		 }
	 },	    
 	mounted() {
		axios.get("http://localhost:3000/api/1.0/user/login?authorization="+ localStorage.getItem('authUser'), this.Result)
		.then((response) =>{ 
	   		console.log(response.data);
			this.Result = response.data.result.friend;
        });
	}	    	    
  	  	
}
</script>