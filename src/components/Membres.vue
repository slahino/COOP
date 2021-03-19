<template>
	<div class="row">
			<div class="column column-75">
				<h2>{{membre.fullname}}</h2>
				<h4><a :href="'mailto:'+membre.email">{{membre.email}}</a></h4>
			</div>
			<div class="column">

				<router-link :to="{name:'Membre', params: {membre_id:membre.id}}" class="button" title="Profil">PROFIL
				</router-link>

				<button :disabled="membreConnected" class="button button-outline" @click="deleteMembre" title="Delete">RETIRER
				</button>
			</div>
		</div>
</template>

<script>
	export default {
		props: ['membre'],
		computed : {
			membreConnected() {
				return this.$store.state.membre.id == this.membre.id 
			}
		},
		methods : {
			deleteMembre() {
				if(confirm('Voulez-vous supprimer le membre ' +this.membre.fullname+ '?')) {

				api.delete('members/'+this.membre.id).then(response => {
					this.$bus.$emit('charger-membres');
				}).catch(error => {
					console.log(error.response.data);
				});	

				}
					
			}
		}
	}
</script>