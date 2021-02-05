<template>
<div class="container">
	<router-link to='/'><span>Home</span></router-link>
	<h1>Liste des Membres</h1>
	<template v-for="membre in $store.state.membres">
		<Membre :membre="membre"/>
	</template>	
</div>		
</template>
<script type="text/javascript">
	import Membre from '@/components/Membre.vue'

	export default {
		components: {
			Membre
		}
	}
</script>
