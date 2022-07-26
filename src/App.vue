<template>
  <Navbar />
  <Header />
  <router-view />
  <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar/Navbar.vue";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import "./app.css";

console.log("hello script setup");
</script>
