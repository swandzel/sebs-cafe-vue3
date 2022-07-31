<template>
  <header class="header">
    <div class="header--layer">
      <div v-motion-fade class="header--title">Seb's Cafe</div>
      <div v-motion-fade class="header--cta">najlepsza kawa w mieście</div>
    </div>
    <carousel
      :items-to-show="1"
      :autoplay="4000"
      wrapAround
      :mouseDrag="false"
      :touchDrag="false"
    >
      <slide v-for="slide in slides" :key="slide">
        <img :src="slide" alt="Seb's Cafe" />
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>
  </header>
</template>

<script setup>
import "./Header.scss";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

const slides = [
  require("../../assets/images/headers/header-home.jpg"),
  require("../../assets/images/headers/header-kontakt.jpg"),
  require("../../assets/images/headers/header-naszekawy.jpg"),
  require("../../assets/images/headers/header-naszemenu.jpg"),
  require("../../assets/images/headers/header-onas.jpg"),
  require("../../assets/images/headers/header-zarezerwuj.jpg"),
];
</script>
