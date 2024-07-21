<script setup>
import { store } from "../store"

function autoScroll(sectionId) {
  if (store.isAutoScroll(sectionId)) {
    window.location.replace("#" + sectionId)
  }
}
</script>

<template>
  <div class="accordion mb-3" id="accordionExample">
    <div class="accordion-item" v-for="(sectionName, sectionId) in store.getCurrentTemplateSectionNames()">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + sectionId" aria-expanded="false" :aria-controls="'collapse' + sectionId"
          @click="autoScroll(sectionId)">
          {{ sectionName }}
        </button>
      </h2>
      <div :id="'collapse' + sectionId" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <component v-for="(optionComponent, optionId) in store.getCurrentTemplateOptionComponents(sectionId)"
            :is="optionComponent" :sectionId="sectionId" :optionId="optionId" />
        </div>
      </div>
    </div>
  </div>
</template>
