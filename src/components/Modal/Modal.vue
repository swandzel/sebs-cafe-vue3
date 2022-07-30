<template>
  <div class="modal" @click.self="$emit('close-modal')">
    <div class="modal--container">
      <div class="modal--nav">
        <Button @click="$emit('close-modal')" btnContent="X"></Button>
      </div>
      <div class="modal--content">
        <div class="modal--content-left">
          <div>
            <h3>Pobierz naszą appkę!</h3>
            <p>I zgarniaj promocje specjalne!</p>
          </div>
          <Button btnContent="Pobierz" />
        </div>
        <div class="modal--content-right">
          <img
            src="../../assets/images/mobile-app.jpg"
            alt="Download our App"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "./Modal.scss";
import Button from "../Button/Button.vue";
</script>
