<template>
	<body>
		<Header/>

    	<div class="membre">
			
				<Membre :membre="membre"/>
		</div>
	</body>
</template>

<script>

	import Membre from '@/components/Membre.vue'
	import Header from '@/components/Header.vue'

	export default {
		components: {
			Membre,
			Header
		}
	}
</script>
