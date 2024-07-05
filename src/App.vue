<script setup>
import { ref } from "vue"
import Forms from "./components/Forms.vue"

// ↓↓↓

import Desk2024 from "./templates/Desk2024.vue"

const templates = [
  Desk2024
]

// ↑↑↑

const currentTemplate = ref(templates[0])
const DefaultData = ref({})
const data = ref({})
</script>

<template>
  <component :is="currentTemplate" v-model="DefaultData" :data="data" />
  <Forms :DefaultData="DefaultData" v-model="data" />
</template>

<style>
body {
  background-color: lightgray;
}
</style>
