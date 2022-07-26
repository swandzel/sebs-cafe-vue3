<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.id">
        <router-link :to="link.to">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import "./Navbar.css";

const links = [
  { id: 1, to: "/", name: "Home" },
  { id: 2, to: "/aboutus", name: "O Nas" },
  { id: 3, to: "/naszemenu", name: "Nasze Menu" },
  { id: 4, to: "/zarezerwujstolik", name: "Zarezerwuj Stolik" },
  { id: 5, to: "/kontakt", name: "Kontakt" },
];
</script>
