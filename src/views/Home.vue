<template>
	<body>
		<Header/>
		<h1>Liste des Conversations</h1> 
		
		<CreerConversation/>
		<div class="conversations">
			<template v-for="conversation in $store.state.conversations">
				<Conversation :conversation="conversation"/>
			</template>
		</div>
	</body>
</template>

<script>

	import CreerConversation from '@/components/CreerConversation.vue'
	import Conversation from '@/components/Conversation.vue'
	import Header from '@/components/Header.vue'
	
	export default {
		components: {
			CreerConversation,
			Conversation,
			Header
		}
	}
</script>
<style>
body > h1 {
	margin :  50  px;
}
</style>