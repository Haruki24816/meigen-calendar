<script setup>
import { computed } from "vue"

const props = defineProps(["defaultData"])
const data = defineModel()

const sectionIds = computed(() => {
  return Object.keys(props.defaultData.sections)
})

function autoscroll(sectionId) {
  if (props.defaultData.sections[sectionId].autoScroll) {
    window.location.replace("#" + sectionId)
  }
}
</script>

<template>
  <div class="accordion mb-3" id="accordionExample">
    <div class="accordion-item" v-for="sectionId in sectionIds">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + sectionId" aria-expanded="false" :aria-controls="'collapse' + sectionId"
          @click="autoscroll(sectionId)">
          {{ props.defaultData.sections[sectionId].sectionName }}
        </button>
      </h2>
      <div :id="'collapse' + sectionId" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <component v-for="(optionContent, optionName) in props.defaultData.sections[sectionId].sectionData" :is="optionContent.formType"
            :name="optionContent.formName" :args="optionContent.formArgs" :defaultData="optionContent.data"
            v-model="data.sections[sectionId].sectionData[optionName].data" />
        </div>
      </div>
    </div>
  </div>
</template>
