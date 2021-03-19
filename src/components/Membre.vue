<template>
	<div v-if="membre">
		<h1>{{membre.fullname}}</h1>
		<ul>
			<li>Email : {{membre.email}}</li>
			<li>Inscrit depuis le {{membre.created_at}}</li>
		</ul>
		<h2>Message</h2>
		<div v-if="loading">
			Chargement des messages, veuillez patienter...
		</div>
		<div v-else v-for="message in messagesTries">
			{{message.message}}
			{{message.created_at}}
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
	    data() {
	      return {
	        membre: false,
	        messages : [],
	        loading : true
	      }
	    },
	    computed : {
	    	messagesTries() {
	    		function compare( a, b ) {
	    			if ( a.created_at < b.created_at){
	    				return 1;
	    			}
	    			if ( a.created_at > b.created_at){
	    				return -1;
	    			}
	    			return 0;
	    		}
	    		return this.messages.sort(compare).slice(0,10);
	    	}
	    },
	    mounted() {
	    	if(this.$route.params.membre_id) {
	    		this.membre = this.$store.getters.getMembre(this.$route.params.membre_id);
	    		let options = {weekday : 'long', year : 'numeric' , month: 'long', day: 'numeric'};
	    		this.membre.created_at = new Date(this.membre.created_at).toLocaleDateString('fr-FR', options);

	    		let cpt=0;
	    		this.$store.state.conversations.forEach(conversation => {
	    			api.get('channels/'+conversation.id+'/posts').then(response => {
	    				response.data.forEach(message => {
	    					if(message.member_id == this.membre.id) {
	    						this.messages.push(message);
	    					}
	    				})
	    				cpt++;
	    				if(this.$store.state.conversations.length === cpt) {
	    					this.loading=false;
	    				}
	    			});
	    		})
	    	}
	    }
	}
</script>