<template>
	<body>
	<div class="scop">
		<h1>CO'OP - Create Account</h1>
		<form id="formulaire" @submit.prevent="CreateAccount">
		<!-- prevent pour pas que la page ne se recharge -->
			<div>
				<label>Fullname</label>
				<input v-model="fullname" required type="text" placeholder="Type your Fullname...">
			</div>
			<div>
				<label>Mail</label>
				<input v-model="email" type="text" required placeholder="Type your Mail...">
			</div>
			<div>
				<label>Password</label>
				<input v-model="password" type="password" required placeholder="Type your Password...">
			</div>
			<div>
				<button>Create</button>
			</div>
		</form>
		<div>
		You have an account, <router-link to='/se-connecter'><span> Log In.</span></router-link>
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
			CreateAccount() {
				api.post('members',{
					fullname:this.fullname,
					email:this.email,
					password:this.password
				}).then(response => {
					alert('Account Create. Let\'s play to Coop !')
					this.$router.push('/se-connecter');
				}).catch(error => {
					alert(error.response.data.message)
				})
			}
		}
	}
</script>
