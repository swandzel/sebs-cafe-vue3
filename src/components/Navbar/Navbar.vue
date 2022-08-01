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
    <ul :class="{ active: showMobileMenu }">
      <li v-for="link in navlinks" :key="link.id">
        <router-link
          :to="link.to"
          class="nav--link"
          @click="toggleShowMobileMenu"
          >{{ link.name }}</router-link
        >
      </li>
    </ul>
    <div class="nav--burger" @click="toggleShowMobileMenu">
      <i v-if="showMobileMenu" class="fas fa-times"></i>
      <i v-if="!showMobileMenu" class="fas fa-bars"></i>
    </div>
  </nav>
</template>

<script setup>
import "./Navbar.scss";
import { ref } from "vue";
import { navlinks } from "@/variables/nav-links";

defineProps({
  changeNavStyle: Boolean,
});

const showMobileMenu = ref(false);

const toggleShowMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};
</script>
