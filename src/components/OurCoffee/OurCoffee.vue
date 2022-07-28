<template>
  <section class="our-coffee">
    <div v-motion-pop-visible-once class="our-coffee--container">
      <h2>Zabierz do domu naszą kawę i ciesz się nią kiedy tylko chcesz!</h2>
      <Button btnContent="Sprawdź nasze kawy" />
    </div>
  </section>
</template>

<script setup>
import Button from "../Button/Button.vue";
import "./OurCoffee.scss";
</script>
