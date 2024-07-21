<script setup>
import { store } from "../store"
</script>

<template>
  <div>{{ store.getOptionData("dummySection", "dummyOption") }}</div>
</template>
