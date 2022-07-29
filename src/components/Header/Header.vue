<template>
  <header class="header" v-motion-fade>
    <!-- <div class="header--layer">
      <div v-motion-fade class="header--title">Seb's Cafe</div>
      <div v-motion-fade class="header--cta">best coffee in town</div>
    </div> -->
    <div class="header--layer">
      <div
        v-for="(slide, index) in slides"
        class="header--carousel-item"
        :key="index"
      >
        <Transition name="slide-in" mode="out-in">
          <img v-show="currentSlide === index" :src="slide" />
        </Transition>
      </div>
      <div v-motion-fade class="header--title">Seb's Cafe</div>
      <div v-motion-fade class="header--cta">best coffee in town</div>
    </div>
  </header>
</template>

<script setup>
import "./Header.scss";
import { ref, onMounted } from "vue";

const currentSlide = ref(0);

onMounted(() => {
  setInterval(() => {
    const index =
      currentSlide.value < slides.length - 1 ? currentSlide.value + 1 : 0;
    currentSlide.value = index;
    console.log(currentSlide.value);
  }, 4000);
});

const slides = [
  require("../../assets/images/headers/header-home.jpg"),
  require("../../assets/images/headers/header-kontakt.jpg"),
  require("../../assets/images/headers/header-naszekawy.jpg"),
  require("../../assets/images/headers/header-naszemenu.jpg"),
  require("../../assets/images/headers/header-onas.jpg"),
  require("../../assets/images/headers/header-zarezerwuj.jpg"),
];
</script>
