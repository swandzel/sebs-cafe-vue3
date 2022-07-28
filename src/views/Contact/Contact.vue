<template>
  <section class="contact" v-motion-fade>
    <h1 className="h2-main">Skontaktuj się z nami</h1>
    <div className="contact--container">
      <div className="contact--container--info">
        <div
          v-for="item in contact"
          :key="item.id"
          className="contact--container--detail"
        >
          <p>{{ item.title }}</p>
          <p>{{ item.description }}</p>
        </div>
      </div>
      <div className="contact--container--photo">
        <img src="../../assets/images/kontakt.jpg" alt="Seb's Cafe" />
      </div>
    </div>
  </section>
</template>

<script setup>
import "./Contact.scss";
import { contact } from "../../variables/contact";
</script>
