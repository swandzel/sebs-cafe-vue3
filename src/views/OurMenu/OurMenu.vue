<template>
  <section v-motion-fade class="our-menu">
    <OurMenuItem
      :items="coffeeList"
      name="Kawy"
      photo="naszekawy-1"
      photoAlt="Nasze kawy"
    />
    <OurMenuItem
      :items="teaList"
      name="Herbaty"
      photo="naszeherbaty"
      photoAlt="Nasze herbaty"
    />
    <OurMenuItem
      :items="cakeList"
      name="Ciasta"
      photo="naszeciasta"
      photoAlt="Nasze ciasta"
    />
    <CurrentPromo />
  </section>
</template>

<script setup>
import "./OurMenu.scss";
import CurrentPromo from "@/components/CurrentPromo/CurrentPromo.vue";
import OurMenuItem from "@/components/OurMenuItem/OurMenuItem.vue";
import { cakeList, coffeeList, teaList } from "../../variables/menu";
</script>
