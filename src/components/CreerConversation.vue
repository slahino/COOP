<template>
	<div>
		<div id="creer-conversation" v-if="afficher">
			<section>
				<button class="close" 
				@click="masquerFormulaire">x</button>
				<h3>Create a Conversation</h3>

				<form @submit.prevent="creerConversation">
					<fieldset>
						<label>Sujet</label>
						<input v-model="topic" required type="text" placeholder="De quoi voulez-vous discuter?">

						<label>Tags</label>
						<input v-model="label" required type="text" placeholder="Quels sont les concepts abordés?">
						<button>Create a Conversation</button>
						<button type="button" @click="masquerFormulaire" class="button button-clear">Cancel</button>
					</fieldset>
				</form>
			</section>
		</div>

		<button @click="afficherFormulaire"> Crate a new Conversation</button>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				afficher:false,
				topic:'',
				label:''
			}
		},
		mounted() {
			this.$bus.$on('afficher-creer-conversation',this.afficherFormulaire)
		},
		methods :{
			creerConversation() {
				api.post('channels',{
					label : this.label,
					topic : this.topic
				}).then(response =>{
					this.masquerFormulaire();
					this.$bus.$emit('charger-conversations');
				})
			},
			afficherFormulaire() {
				this.afficher = true;
			},
			masquerFormulaire() {
				this.afficher = false;
			}
		}
	}
</script>