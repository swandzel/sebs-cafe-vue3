<template>
  <button>{{ btnContent }}</button>
</template>

<script setup>
import "./Button.scss";

defineProps({
  btnContent: String,
});
</script>
