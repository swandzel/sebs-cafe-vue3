<template>
  <section class="home">
    <div class="home--container">
      <h2 class="h2-main">Aktualne promocje</h2>
      <CurrentPromo />
      <div class="home--site">
        <HomeCard
          v-for="card in cards"
          :key="card.id"
          :title="card.title"
          :subtitle="card.subtitle"
          :className="card.class"
        />
      </div>
    </div>
  </section>
  <OurCoffee />
</template>

<script setup>
import HomeCard from "@/components/HomeCard/HomeCard.vue";
import CurrentPromo from "@/components/CurrentPromo/CurrentPromo.vue";
import OurCoffee from "@/components/OurCoffee/OurCoffee.vue";
import "./Home.scss";
import { cards } from "@/variables/cards";
</script>
