<template>
<body>
<Header/>
<div>
		<h1>{{conversation.topic}}</h1>
		<h3>{{conversation.label}}</h3>

		<template v-for="message in messages">
		<div>
			<Message :message="message"></Message>
 		</div>
		</template>

		<div>
		<form @submit.prevent="posterMessage">
						<fieldset>
							<input v-model="message" required type="text" placeholder="Votre Message...">
							<button>Envoyer</button>
						</fieldset>
		</form>
		</div>
</div>
</body>
</template>

<script>

	import Header from '@/components/Header.vue'
	import Message from '@/components/Message.vue'

	export default {
		components: {
			Header,
			Message
		},
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
 			deleteMessage() {
				if(confirm('Voulez-vous supprimer le message ?')) {
					api.delete(`channels/${this.message.channel_id}/posts/${this.message.id}`).then(response => {
						this.message = false;
					});
           		}			
			},
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