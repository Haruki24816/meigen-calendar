<script setup>
import { ref, computed } from "vue"
import Forms from "./components/Forms.vue"

// ↓↓↓

import Desk2024 from "./templates/Desk2024.vue"
import { desk2024DefaultData } from "./templates/Desk2024DefaultData"
import Dummy from "./templates/Dummy.vue"
import { dummyDefaultData } from "./templates/DummyDefaultData"

const templates = [
  [Desk2024, desk2024DefaultData],
  [Dummy, dummyDefaultData]
]

// ↑↑↑

const templateData = {}

for (const templateContent of templates) {
  templateData[templateContent[1].templateId] = {
    templateName: templateContent[1].templateName,
    componentObject: templateContent[0],
    defaultData: templateContent[1]
  }
}

const currentTemplateId = ref(Object.keys(templateData)[0])

const currentTemplate = computed(() => {
  return templateData[currentTemplateId.value].componentObject
})

const defaultData = computed(() => {
  return templateData[currentTemplateId.value].defaultData
})

const data = computed(() => {
  return templateData[currentTemplateId.value].defaultData
})
</script>

<template>
  <select v-model="currentTemplateId">
    <option v-for="(templateContent, templateId) in templateData" :value="templateId">
      {{ templateContent.templateName }}
    </option>
  </select>
  <component :is="currentTemplate" :data="data" />
  <Forms :defaultData="defaultData" v-model="data" />
</template>

<style>
body {
  background-color: lightgray;
}
</style>
