<script setup>
import { ref } from "vue"

const props = defineProps(["defaultData"])
const sectionIds = ref(Object.keys(props.defaultData.sections))

const data = defineModel()
data.value = props.defaultData
</script>

<template>
  <template v-for="sectionId in sectionIds">
    ■{{ sectionId }}
    <component v-for="(value, key) in props.defaultData.sections[sectionId].sectionData" :is="value.formType"
      :name="value.formName" :args="value.formArgs" :defaultData="value.defaultData"
      v-model="data.sections[sectionId].sectionData[key]" />
  </template>
</template>
