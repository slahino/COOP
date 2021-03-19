<template>
	<div class="row">
			<div class="column column-75">
				<h2>{{conversation.topic}}</h2>
				<h4>{{conversation.label}}</h4>
			</div>

			<div class="column column-25 actions">
				<router-link :to="{name:'Conversation',params:{id : conversation.id}}"
				class="button">VOIR</router-link>

				<button class="button button-outline" @click="deleteConversation" title="Delete">RETIRER
				</button>
			</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props : ['conversation'],
		methods : {
			deleteConversation() {
				if(confirm('Voulez-vous supprimer la conversation ' +this.conversation.topic+ '?')) {

				api.delete('channels/'+this.conversation.id).then(response => {
					this.$bus.$emit('charger-conversations');
				}).catch(error => {
					console.log(error.response.data);
				});	

				}
					
			}
		}
	}
</script>
<style>
h2 {
	margin: 0;
	display :  inline-block;
	font-weight: bold;
}
.column {
	padding-bottom: 1em;
	border-bottom: 1px solid #cccc;
}
.row {
	margin-bottom: 1em;
}
.actions {
	text-align: right;
}
button {
	margin :  10px;
}
</style>