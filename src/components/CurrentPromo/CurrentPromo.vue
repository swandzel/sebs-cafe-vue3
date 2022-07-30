<template>
  <section v-motion-slide-visible-once-left class="current-promo">
    <div class="current-promo--container">
      <div class="current-promo--promo">
        <div class="current-promo--promo-info">
          <h2>Do każdego croissant'a średnia kawa za 1zł!</h2>
          <h3>Codziennie od 8 do 12.</h3>
          <Button btnContent="Dowiedz się więcej" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "../Button/Button.vue";
import "./CurrentPromo.scss";
</script>
