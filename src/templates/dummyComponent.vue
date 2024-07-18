<script setup>
import { ref } from "vue"
import { store } from "../store"

const data = ref(store.templates["dummy"])
</script>

<template>
  【ダミー：{{ data.sections["g"].sectionData.g.data }}】<br>
</template>
