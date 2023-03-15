<script setup>
import HelpTips from '../components/home-page/HelpTips.vue'
import TestimonialSlider from '../components/home-page/TestimonialSlider.vue'

</script>

<template>
  <main class="home">
    <img class="home__image-bg" src="@/assets/images/views/home-page/hero-bg.png" alt="">

    <section class="home__hero">
      <div class="home__hero-head">
        <h1>WEEKEND FROM HOME</h1>
        <P>Stay active with a little workout.</P>
      </div>

      <div class="home__hero-cta">
        <img src="@/assets/images/views/home-page/lego-1.png" alt="">

        <div class="home__hero-button">
          <button-CTA text="Let's Go" url="https://www.weekendinc.com/" />
        </div>
      </div>
    </section>

    <section class="home__testimonial">
      <img class="home__testimonial-image" src="@/assets/images/views/home-page/lego-2.png" alt="">

      <div class="home__testimonial-information" data-aos="fade-up" data-aos-duration="500">
        <p><span>Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties.<br/> Merriam-Webster.com Dictionary.</p>
        <p>-weekend team</p>
      </div>

      <div class="home__testimonial-slider" data-aos="fade-up" data-aos-duration="500">
        <h2>Testimonial</h2>

        <TestimonialSlider />
      </div>
    </section>

    <section class="home__objection">
      <div class="home__objection-desc" data-aos="fade-up" data-aos-duration="500">
        <h2>POV</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>

      <div class="home__objection-desc" data-aos="fade-up" data-aos-duration="500">
        <h2>Resource</h2>
        <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
      </div>

      <div class="home__objection-desc home__objection-desc--helpTips" data-aos="fade-up" data-aos-duration="500">
        <h2>Help & Tips</h2>

        <HelpTips />
      </div>

      <div class="home__objection-desc" data-aos="fade-up" data-aos-duration="500">
        <h2>You’re all set.</h2>
        <p>The wise man therefore always holds in these matters to this principle of selection.</p>
      </div>

      <img class="home__objection-image" src="@/assets/images/views/home-page/lego-3.png" alt="">
    </section>
  </main>
</template>
