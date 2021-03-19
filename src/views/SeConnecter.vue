<template>
<body>
	<div class="scop">
		<h1>CO'OP - CONNEXION</h1>
		<form @submit.prevent="SeConnecter">
			<!-- prevent pour pas que la page ne se recharge -->
			<div>
				<label>Adresse email</label>
				<input v-model="email" required type="email" placeholder="Taper votre email...">
			</div>
			<div>
				<label>Mot de passe</label>
				<input v-model="password" required type="password" placeholder="Taper votre mot de passe...">
			</div>
			<div>
				<button>Se Connecter</button>
			</div>

		</form>
		<div>
		Vous n'avez pas de compte?<router-link to='/inscription'><span> Inscrivez-vous.</span></router-link>
		</div>
	</div>
</body>	
</template>
<script>
	export default {
		data() {
			return {
				email : 'souaa.yassine@gmail.com',
				password : 'CoopApplication83600.'
			}
		},
		methods : {
			SeConnecter() {
				api.post('members/signin',{
					email:this.email,
					password:this.password
				}).then(response => {
					this.$store.commit('setMembre',response.data.member);
					this.$store.commit('setToken',response.data.token);

					this.$router.push('/');
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