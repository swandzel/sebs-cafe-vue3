<template>
  <Navbar :changeNavStyle="changeNavStyle" />
  <Header id="header" />
  <router-view />
  <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar/Navbar.vue";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import "./App.scss";
import { onMounted, ref } from "vue";

const changeNavStyle = ref(true);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries) {
      changeNavStyle.value = entries[0].isIntersecting;
    }
  });

  const header = document.querySelector("#header");
  observer.observe(header);
});
</script>
