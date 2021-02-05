<template>
<body>
	<div class="scop">
		<h1>CO'OP - Log in</h1>
		<form @submit.prevent="SeConnecter">
			<!-- prevent pour pas que la page ne se recharge -->
			<div>
				<label>Mail</label>
				<input v-model="email" required type="email" placeholder="Type your Mail...">
			</div>
			<div>
				<label>Password</label>
				<input v-model="password" required type="password" placeholder="Type your Password...">
			</div>
			<div>
				<button>Log in</button>
			</div>

		</form>
		<div>
		You don't have an account,<router-link to='/create-account'><span> Sign In.</span></router-link>
		</div>
	</div>
</body>	
</template>
<script>
	export default {
		data() {
			return {
				email : 'azertyuiop@8520.com',
				password : 'azertyuiop'
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
body {
	background-color: beige;
}
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
span{
 color : #9b4dca;
}
span:hover{
 color : #606c76;
}
div.scop > h1{
	color :  black;
	font-weight: bold;
	text-align: center;

}
</style>