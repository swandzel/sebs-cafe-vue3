<template>
  <nav v-motion-slide-top class="nav" :class="{ 'nav--fixed': changeNavStyle }">
    <router-link to="/">
      <div class="nav--logo">
        <img src="../../assets/images/logo.png" alt="Seb's Cafe" />
        <div>
          <p>Seb's Cafe</p>
          Est. 2021
        </div>
      </div>
    </router-link>
    <ul>
      <li v-for="link in navlinks" :key="link.id">
        <router-link :to="link.to" class="nav--link">{{
          link.name
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import "./Navbar.scss";
import { navlinks } from "@/variables/nav-links";

defineProps({
  changeNavStyle: Boolean,
});
</script>
