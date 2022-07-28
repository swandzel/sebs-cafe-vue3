<template>
  <section class="book-a-table" v-motion-fade>
    <h1 className="h2-main">Chcesz zarezerwować stolik w Seb's Cafe?</h1>
    <div className="book-a-table--container">
      <h2>Aby zarezerwować stolik zadzwoń:</h2>
      <p v-motion-pop-visible-once>
        <i class="fas fa-phone-alt"></i> 500-100-999
      </p>
    </div>
  </section>
</template>

<script setup>
import "./BookATable.scss";
</script>
