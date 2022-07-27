<template>
  <nav class="nav">
    <div class="nav--logo"></div>
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
</script>
