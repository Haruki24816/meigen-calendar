<script setup>
import Desk2024Sub from "./Desk2024Sub.vue"

const props = defineProps(["data"])
</script>

<template>
  <template v-if="props.data != null">
    <div class="sheet">
      <Desk2024Sub id="desk20241" :generalData="props.data.sections['general'].sectionData"
        :sectionData="props.data.sections['desk20241'].sectionData" :month="1" />
      <Desk2024Sub id="desk20242" :generalData="props.data.sections['general'].sectionData"
        :sectionData="props.data.sections['desk20242'].sectionData" :month="2" />
      <Desk2024Sub id="desk20243" :generalData="props.data.sections['general'].sectionData"
        :sectionData="props.data.sections['desk20243'].sectionData" :month="3" />
    </div>
    <div class="sheet">
      <Desk2024Sub id="desk20249" :generalData="props.data.sections['general'].sectionData"
        :sectionData="props.data.sections['desk20249'].sectionData" :month="9" />
      <Desk2024Sub id="desk20248" :generalData="props.data.sections['general'].sectionData"
        :sectionData="props.data.sections['desk20248'].sectionData" :month="8" />
      <Desk2024Sub id="desk20247" :generalData="props.data.sections['general'].sectionData"
        :sectionData="props.data.sections['desk20247'].sectionData" :month="7" />
    </div>
    <div class="sheet">
      <Desk2024Sub id="desk20244" :generalData="props.data.sections['general'].sectionData"
        :sectionData="props.data.sections['desk20244'].sectionData" :month="4" />
      <Desk2024Sub id="desk20245" :generalData="props.data.sections['general'].sectionData"
        :sectionData="props.data.sections['desk20245'].sectionData" :month="5" />
      <Desk2024Sub id="desk20246" :generalData="props.data.sections['general'].sectionData"
        :sectionData="props.data.sections['desk20246'].sectionData" :month="6" />
    </div>
    <div class="sheet">
      <Desk2024Sub id="desk202412" :generalData="props.data.sections['general'].sectionData"
        :sectionData="props.data.sections['desk202412'].sectionData" :month="12" />
      <Desk2024Sub id="desk202411" :generalData="props.data.sections['general'].sectionData"
        :sectionData="props.data.sections['desk202411'].sectionData" :month="11" />
      <Desk2024Sub id="desk202410" :generalData="props.data.sections['general'].sectionData"
        :sectionData="props.data.sections['desk202410'].sectionData" :month="10" />
    </div>
  </template>
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
