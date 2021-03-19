<template>
	<div>
		<div id="overlay" v-if="afficher">
			<div id="creer-conversation">
				<div class="popup">
					<section>
						<a class="close" href="#noWhere" @click="masquerFormulaire"><img alt="Fermer" title="Fermer la fenêtre" class="btn_close" src="https://img.icons8.com/plasticine/2x/close-window.png"></a>
						
						<form @submit.prevent="creerConversation">
							<fieldset>
								<label class="subject">Sujet</label>
								<input v-model="topic" required type="text" placeholder="De quoi voulez-vous discuter?">

								<label class="tags">Étiquettes</label>
								<input v-model="label" required type="text" placeholder="Quels sont les concepts abordés?">
								<button>Créer</button>
							</fieldset>
						</form>
					</section>
				</div>
			</div>
		</div>
		<button class="afficher" @click="afficherFormulaire"><a class="overlay" href="#overlay">Créer une Conversation</a></button>
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
<style>
#overlay{
	display: none;
	position: fixed;
	top:0; right:0; bottom:0; left:0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1000;
	
}
#overlay:target{
	display: block;
}
.popup{
	background: #fff;
	padding: 20px;
	border: 20px solid #ddd;
	position: relative;
	margin: 10% auto;
	width: 40%;
	box-shadow: 0px 0px 20px #000;
	border-radius: 10px;
}
img.btn_close {
	float: right;
	margin: -55px -55px 0 0;
	width : 60px;
}
button.afficher a {
	color :  white;
}

button.afficher {
	border-radius :  0px;
	margin-left : 50px; 
	margin-bottom :  50px;
}
</style>