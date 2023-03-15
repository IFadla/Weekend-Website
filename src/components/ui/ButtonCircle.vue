<script setup>
import { defineProps } from 'vue'
import arrowIcon from "@/assets/images/components/ui/button/arrow.vue"

const props = defineProps({
	isLink: Boolean,
	url: String,
})
</script>

<template>
	<a v-if="props.isLink" :href="url" class="button__circle" target="_blank">
		<div class="button__circle-box">
			<arrowIcon />
		</div>
	</a>

	<div v-else class="button__circle-box">
		<arrowIcon />
	</div>
</template>