<template>
  <div class="home">
  <div class="container">
  	<router-link to='/membre'><span>Membre</span></router-link>
  	<h1>Conversation List</h1>
  	<div>
		<button @click="logOut">Log out</button>
  	</div>
  	<CreerConversation/>
  	<div class="conversations">
  		<template v-for="conversation in $store.state.conversations">
  			<Conversation :conversation="conversation"/>
  		</template>
  	</div>
 </div>
</div>
</template>
<script>

	import CreerConversation from '@/components/CreerConversation.vue'
	import Conversation from '@/components/Conversation.vue'
	
	export default {
		components: {
			CreerConversation,
			Conversation
		},
		methods : {
			logOut() {
			this.$store.commit('logOut');
			this.$router.push('/se-connecter');
			}
		}
	}
</script>
<style>
.conversations {
	margin-top :  2em;
}
</style>