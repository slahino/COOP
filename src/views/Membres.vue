<template>
	<div class="container" v-if="membre">

		<router-link to='/membre'><span>Retour</span></router-link>
		<h1>{{membre.fulname}}</h1>
		<p>Email : {{membre.email}}</p>
		<p>Inscrit : {{membre.created_at}}</p>
		Membre Profile
	</div>
</template>
<script type="text/javascript">
	export default {
	    data() {
	      return {
	        membre:false
	      }
	    },
	    mounted() {
	    	if(this.$route.params.membre_id) {
	    		this.membre = this.$store.getters.getMembre(this.$route.params.membre_id);
	    		console.log(this.membre);
	    		let d = new Date(this.membre.created_at)
	    		let options = {weekday : 'long', year : 'numeric' , month: 'long', day: 'numeric'};
	    		this.membre.created_at = d.toLocaleDateString('fr-FR', options);
	    	}
	    }
	}
</script>