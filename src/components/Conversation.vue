<template>
	<div class="row">
			<div class="column column-75"><h3>{{conversation.topic}}</h3>
				{{conversation.label}}
			</div>

			<div class="column column-25 actions">
				<router-link :to="{name:'Conversation',params:{id : conversation.id}}"
				class="button">Oeil</router-link>
			</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props : ['conversation']
	}
</script>
<style>
h3 {
	margin: 0;
	display :  inline-block;
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
</style>