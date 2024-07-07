<script setup>
import { ref, computed } from "vue"

const props = defineProps(["defaultData"])
const data = defineModel()

const sectionIds = computed(() => {
  return Object.keys(props.defaultData.sections)
})
</script>

<template>
  <template v-for="sectionId in sectionIds">
    ■{{ sectionId }}
    <component v-for="(value, key) in props.defaultData.sections[sectionId].sectionData" :is="value.formType"
      :name="value.formName" :args="value.formArgs" :defaultData="value.data"
      v-model="data.sections[sectionId].sectionData[key].data" />
  </template>
</template>
