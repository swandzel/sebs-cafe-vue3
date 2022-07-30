<template>
  <Modal
    :style="{ opacity: showModal ? '1' : '0', zIndex: showModal ? '15' : '-1' }"
    @close-modal="closeModal()"
  />
  <Navbar :changeNavStyle="changeNavStyle" />
  <Header />
  <router-view />
  <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar/Navbar.vue";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import Modal from "./components/Modal/Modal.vue";
import "./App.css";
import { ref } from "vue";
const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};
const changeNavStyle = ref(false);

const MouseOut = (event) => {
  if (
    event.clientY <= 0 ||
    event.clientX <= 0 ||
    event.clientX >= window.innerWidth ||
    event.clientY >= window.innerHeight
  ) {
    showModal.value = true;
    document.removeEventListener("mouseout", MouseOut);
  }
};

document.addEventListener("mouseout", MouseOut);

window.addEventListener("scroll", () => {
  changeNavStyle.value = window.pageYOffset > 80;
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
</script>
