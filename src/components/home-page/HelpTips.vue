<script setup>
import { onMounted, computed } from 'vue'
import { useDataStore } from '../../stores/dataStore';
const store = useDataStore()

const dataHelp = computed(() => {
	return store.dataHelp
})

onMounted(() => {
	store.fetchHelp()
});
</script>

<template>
	<div class="helpTips">
		<div class="helpTips__items">
      <img class="helpTips__items-image" src="@/assets/images/views/home-page/beans.png" alt="">
			
			<div class="helpTips__items-card" v-for="item in dataHelp" :key="item.id">
				<img :src="item.image" alt="">
				
				<div class="helpTips__items-overlay">
					<p>{{ item.title }}</p>

  				<button-circle :isLink="true" :url="item.image" />
				</div>
			</div>
		</div>
	</div>
</template>