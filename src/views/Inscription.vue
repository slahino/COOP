<template>
<body>
	<div class="scop">
		<h1>CO'OP - INSCRIPTION</h1>
		<form id="formulaire" @submit.prevent="Inscription">
		<!-- prevent pour pas que la page ne se recharge -->
			<div>
				<label>Prenom et Nom</label>
				<input v-model="fullname" required type="text" placeholder="Taper votre prénom et nom...">
			</div>
			<div>
				<label>Adresse email</label>
				<input v-model="email" type="text" required placeholder="Taper votre email...">
			</div>
			<div>
				<label>Mot de passe</label>
				<input v-model="password" type="password" required placeholder="Taper votre mot de passe...">
			</div>
			<div>
				<button>Créer</button>
			</div>
		</form>
		<div>
		Vous avez un Compte ?<router-link to='/se-connecter'><span> Connectez-vous.</span></router-link>
		</div>
	</div>
	</body>
</template>
<script>
	export default {
		data() {
			return {
				fullname : '',
				email : '',
				password : ''
			}
		},
		methods : {
			Inscription() {
				api.post('members',{
					fullname:this.fullname,
					email:this.email,
					password:this.password
				}).then(response => {
					alert('Compte créé avec succès. Retour à la Connexion !')
					this.$router.push('/se-connecter');
				}).catch(error => {
					alert(error.response.data.message)
				})
			}
		}
	}
</script>
<style>
div.scop {
	margin-top: 50vh; 
  	transform: translateY(-50%);
	width :  50%;
	margin-right :  auto;
	margin-left :  auto;
	border :  black 5px solid;
	padding :  50px;
	color :  black;
	font-weight: bold;
	background-color :  white;

}
div.scop > h1{
	color :  black;
	font-weight: bold;
	text-align: center;

}
span{
 color : #9b4dca;
}
span:hover{
 color : #606c76;
}
</style>
