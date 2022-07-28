<template>
  <button
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :tapped="{ scale: 0.95 }"
  >
    {{ btnContent }}
  </button>
</template>

<script setup>
import "./Button.scss";

defineProps({
  btnContent: String,
});
</script>
