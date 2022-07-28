<template>
  <Navbar :changeNavStyle="changeNavStyle" />
  <Header />
  <router-view />
  <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar/Navbar.vue";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import "./App.scss";
import { ref } from "vue";

const changeNavStyle = ref(false);

window.addEventListener("scroll", () => {
  changeNavStyle.value = window.pageYOffset > 80;
});
</script>
