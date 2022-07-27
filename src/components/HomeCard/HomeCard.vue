<template>
  <div class="home-cards--container">
    <div :class="`home-cards home-cards-${className}`">
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
import "./HomeCard.scss";

defineProps({
  title: String,
  subtitle: String,
  className: String,
});
</script>
