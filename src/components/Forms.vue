<script setup>
import { computed, ref } from "vue"
import { store } from "../store"

const props = defineProps(["templateId"])

const template = computed(() => {
  return store.templates[store.currentTemplateId]
})

const sectionIds = computed(() => {
  return Object.keys(template.value.sections)
})

function autoScroll(sectionId) {
  if (template.value.sections[sectionId].autoScroll) {
    window.location.replace("#" + sectionId)
  }
}

function updateTemplateData(sectionId, optionName, data) {
  store.templates[store.currentTemplateId].sections[sectionId].sectionData[optionName].data = structuredClone(data)
}
</script>

<template>
  <div class="accordion mb-3" id="accordionExample">
    <div class="accordion-item" v-for="sectionId in sectionIds">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + sectionId" aria-expanded="false" :aria-controls="'collapse' + sectionId"
          @click="autoScroll(sectionId)">
          {{ template.sections[sectionId].sectionName }}
        </button>
      </h2>
      <div :id="'collapse' + sectionId" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <component v-for="(optionContent, optionName) in template.sections[sectionId].sectionData"
            :is="optionContent.formType" :name="optionContent.formName" :args="optionContent.formArgs"
            :defaultData="optionContent.defaultData"
            @update-data="(event) => { updateTemplateData(sectionId, optionName, event) }" />
        </div>
      </div>
    </div>
  </div>
</template>