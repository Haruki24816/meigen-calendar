<script setup>
import { ref } from "vue"
import Forms from "./components/Forms.vue"

// ↓↓↓

import Desk2024 from "./templates/Desk2024.vue"
import { desk2024DefaultData } from "./templates/Desk2024DefaultData"

const templates = [
  [Desk2024, desk2024DefaultData]
]

// ↑↑↑

const currentTemplate = ref(templates[0][0])
const defaultData = ref(templates[0][1])
const data = ref({})
</script>

<template>
  <Forms :defaultData="defaultData" v-model="data" />
  <component :is="currentTemplate" :data="data" />
</template>

<style>
body {
  background-color: lightgray;
}
</style>
