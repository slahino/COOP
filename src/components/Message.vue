 <template>
 	<div class="message">
 		
 		<header class="message-header">
 			<div class="entete">
 				<img class="avatar" :src="avatar"/><b>{{membre.fullname}}</b> 
 			</div>
 			<div class="conversation" v-if="message.conversation">
 				Message posté dans {{message.conversation.topic}}
 			</div>
 			<button class="button" @click="deleteMessage" title="Delete">RETIRER</button>
 		</header>
 		<h4>{{message.message}}</h4>
 		<div class="time">le {{dateMessage}}</div> 	
 	</div>
 </template>

 <script>
 	export default {
 		props: ['message'], 
 		computed : {
 			avatar() {
 				return ("https://gravatar.com/avatar/" +md5(this.membre.email) +"?s=400&d=identicon&r=pg");
 			},
 			membre() {
 				return this.$store.getters.getMembre(this.message.member_id);
 			},
 			dateMessage() {
 				let options = {weekday : 'long', year : 'numeric' , month: 'long', day: 'numeric'};
 				return new Date(this.message.created_at).toLocaleDateString('fr-FR', options);
 			},
 		},
 		methods : {
 			deleteMessage() {
 				if(confirm('Voulez-vous supprimer le message ?')) {
 					api.delete(`channels/${this.message.channel_id}/posts/${this.message.id}`).then(response => {
 						this.message = false;
 					});
 				}			
 			},
 		}
 	}
 </script>
 <style>
 .message {
 	background:  #f0f0f0;
 	padding:  1em;
 	margin:  1em 0;
 	border-radius:  5px;
 	color: #555;
 }
 div.time {
 	font-weight: bold;
 	font-size :  70%;
 	text-align: right;
 }
 header {
 	font-weight: bold;
 	border-bottom: 1px solid white;
 	margin-bottom:  0.5em;
 	font-size :  90%;
 	display : flex;
 }
 div.entete {
 	flex :  1;
 }
 time {
 	font-size :  90%;
 }
 img {
 	width : 30px;
 	margin-right : 10px;
 	border :  2px solid black;
 }
</style>
