<template>
  <div class="our-menu-item">
    <h1 class="h2-main">{{ name }}</h1>
    <div class="our-menu-item--photo">
      <img :src="require(`../../assets/images/${photo}.jpg`)" :alt="photoAlt" />
    </div>
    <div class="our-menu-item--products">
      <div class="our-menu-item--names">
        <p v-for="item in items" :key="item.id">{{ item.name }}</p>
      </div>
      <div class="our-menu-item--prices">
        <p v-for="item in items" :key="item.id">
          {{ item.price }}
        </p>
      </div>
    </div>
  </div>
  <div class="our-menu-item--dots">
    <i class="fas fa-coffee"></i>
    <i class="fas fa-coffee"></i>
    <i class="fas fa-coffee"></i>
  </div>
</template>

<script setup>
import "./OurMenuItem.scss";

defineProps({
  items: Object,
  name: String,
  photo: String,
  photoAlt: String,
});
</script>
