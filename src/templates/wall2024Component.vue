<script setup>
import { store } from "../store"
</script>

<template>
  <template v-if="store.getOptionData('general', 'imposition')">
    <div class="sheet">オン</div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
  </template>
  <template v-else>
    <div class="sheet">オフ</div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
    <div class="sheet"></div>
  </template>
</template>

<style scoped>
.sheet {
  background-color: white;
  width: 210mm;
  height: 297mm;
  margin: 10mm;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
}

@media print {
  .sheet {
    margin: 0;
  }
}
</style>

<style>
@page {
  margin: 0;
  size: A4 portrait;
}
</style>
