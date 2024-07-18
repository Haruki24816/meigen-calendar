<script setup>
import { ref } from "vue"
import desk2024ComponentSub from "./desk2024ComponentSub.vue"
import { store } from "../store"

const data = ref(store.templates["desk2024"])
</script>

<template>
  <div class="sheet">
    <desk2024ComponentSub id="desk20241" :generalData="data.sections['general'].sectionData"
      :sectionData="data.sections['desk20241'].sectionData" :month="1" />
    <desk2024ComponentSub id="desk20242" :generalData="data.sections['general'].sectionData"
      :sectionData="data.sections['desk20242'].sectionData" :month="2" />
    <desk2024ComponentSub id="desk20243" :generalData="data.sections['general'].sectionData"
      :sectionData="data.sections['desk20243'].sectionData" :month="3" />
  </div>
  <div class="sheet">
    <desk2024ComponentSub id="desk20249" :generalData="data.sections['general'].sectionData"
      :sectionData="data.sections['desk20249'].sectionData" :month="9" />
    <desk2024ComponentSub id="desk20248" :generalData="data.sections['general'].sectionData"
      :sectionData="data.sections['desk20248'].sectionData" :month="8" />
    <desk2024ComponentSub id="desk20247" :generalData="data.sections['general'].sectionData"
      :sectionData="data.sections['desk20247'].sectionData" :month="7" />
  </div>
  <div class="sheet">
    <desk2024ComponentSub id="desk20244" :generalData="data.sections['general'].sectionData"
      :sectionData="data.sections['desk20244'].sectionData" :month="4" />
    <desk2024ComponentSub id="desk20245" :generalData="data.sections['general'].sectionData"
      :sectionData="data.sections['desk20245'].sectionData" :month="5" />
    <desk2024ComponentSub id="desk20246" :generalData="data.sections['general'].sectionData"
      :sectionData="data.sections['desk20246'].sectionData" :month="6" />
  </div>
  <div class="sheet">
    <desk2024ComponentSub id="desk202412" :generalData="data.sections['general'].sectionData"
      :sectionData="data.sections['desk202412'].sectionData" :month="12" />
    <desk2024ComponentSub id="desk202411" :generalData="data.sections['general'].sectionData"
      :sectionData="data.sections['desk202411'].sectionData" :month="11" />
    <desk2024ComponentSub id="desk202410" :generalData="data.sections['general'].sectionData"
      :sectionData="data.sections['desk202410'].sectionData" :month="10" />
  </div>
</template>

<style scoped>
.sheet {
  background-color: white;
  width: 210mm;
  height: 297mm;
  margin: 10mm;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 5mm;
  padding-bottom: 5mm;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
}

@media print {
  .sheet {
    margin: 0;
  }
}
</style>

<style>
@page {
  margin: 0;
  size: A4 portrait;
}
</style>
