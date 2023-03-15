<script setup>
import { defineProps } from 'vue'

const props = defineProps({
	text: String,
	url: String,
})

</script>

<template> 
	<a :href="props.url" class="button__cta" target="_blank">
		<div class="button__cta-box">
			<p>{{ props.text }}</p>
		</div>
	</a>
</template>