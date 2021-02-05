<template>
	<div class="row">
			<div class="column column-75"><h3>{{membre.fullname}}</h3>
				<a :href="'mailto:'+membre.email">{{membre.email}}
				</a></div>
			<div class="column">

				<router-link :to="{name:'Membres', params: {membre_id:membre.id}}" class="button" title="Profil">Profile
				</router-link>

				<button :disabled="membreConnected" class="button button-outline" @click="deleteMembre" title="Delete">Delete
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