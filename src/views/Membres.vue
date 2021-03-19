<template>
	<body>
		<Header/>
		<h1>Liste des Membres</h1>
    	
    	<div class="membres">
			<template v-for="membres in $store.state.membres">
				<Membres :membre="membres"/>
			</template>	
		</div>
	</body>
</template>

<script>

	import Membres from '@/components/Membres.vue'
	import Header from '@/components/Header.vue'

	export default {
		components: {
			Membres,
			Header
		}
	}
</script>
