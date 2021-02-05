<template>
	<div class="container">
		<h1>{{conversation.topic}}</h1>
		<h3>{{conversation.label}}</h3>
	<div>
	<form @submit.prevent="posterMessage">
					<filedset>
						<input v-model="message" required type="text" placeholder="Your Message">

						<button>Send</button>
					</filedset>
				</form>
			</div>
		</div>
</template>
<script>
	export default {
		data() {
			return {
				conversation:false
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
						this.messages = response.data
					})
				},
				posterMessage() {
					api.post('channels/'+this.conversation.id+'/posts',{ message : this.message }).then(
					response => {
						this.chargerMessages();
					})
				}
			}
		}
</script>