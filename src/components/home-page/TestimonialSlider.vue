<script setup>
import { onMounted, computed } from 'vue'
import { useDataStore } from '../../stores/dataStore';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

const store = useDataStore()

const dataTestimonial = computed(() => {
	return store.dataTestimonial
})

onMounted(() => {
	store.fetchTestimonial()
});
</script>

<template>
	<div class="testimonialSlider">
		<img class="testimonialSlider__image" src="@/assets/images/views/home-page/oval.png" alt="">

		<Splide 
			:has-track="false" 
			:options="{ 
				perPage: 1,
				pagination:false, 
				gap:'10px',
			}"
		>
			<div class="testimonialSlider__track">
				<SplideTrack class="testimonialSlider__track-slide">
					<SplideSlide v-for="item in dataTestimonial" :key="item.id">
						<div class="testimonialSlider__track-item"> 
							<h1>{{ item.by }}</h1>
							<p>{{ item.testimony }}</p>	
						</div>
					</SplideSlide>
				</SplideTrack>
			</div>

			<div class="splide__arrows">
				<button class="splide__arrow splide__arrow--prev">
  				<button-circle :isLink="false" />
				</button>
				<button class="splide__arrow splide__arrow--next">
  				<button-circle :isLink="false" />
				</button>
			</div>
		</Splide>
	</div>
</template>
