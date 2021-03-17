<template>
	<div class="container">
		<div>
			<router-link to='/'>
				<span>Conversation</span>
			</router-link> > {{conversation.topic}}
		</div>

		<h1>{{conversation.topic}}</h1>
		<h3>{{conversation.label}}</h3>

		<div v-for="message in messages">
			{{message.message}}
		</div>

	<div>
	<form @submit.prevent="posterMessage">
					<fieldset>
						<input v-model="message" required type="text" placeholder="Your Message...">

						<button>Envoyer</button>
					</fieldset>
				</form>
			</div>
		</div>
</template>
<script>
	export default {
		data() {
			return {
				conversation:false,
				message: "",
            	messages: [],
			}
		},
		mounted() {
			if(this.$route.params.id) {
				api.get('channels/'+this.$route.params.id).then(response =>
				{
					this.conversation = response.data;
					this.chargerMessages();
				})
			}
		},
		methods : {
			chargerMessages() {
				api.get('channels/'+this.conversation.id+'/posts').then(
					response => {
						let messages = response.data.reverse();
						this.messages = response.data
					})
				},
				posterMessage() {
					api.post('channels/'+this.conversation.id+'/posts',{ message : this.message }).then(
					response => {
						setTimeout(() => {
							this.$refs["bottom"].scrollIntoView();
						}, 500);
						this.chargerMessages();
						this.message = "";
					})
				}
			}
		}
</script>