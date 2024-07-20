<script setup>
import { ref } from "vue"
import desk2024ComponentSub from "./desk2024ComponentSub.vue"
import { store } from "../store"

const data = ref(store.templates["desk2024"])

function setHoliday(month, date) {
  let holidayList = store.templates["desk2024"].sections['desk2024' + month].sectionData["holidays"].data
  if (holidayList.includes(date)) {
    let index = null
    for (const num in holidayList) {
      if (holidayList[num] == date) {
        index = num
      }
    }
    if (index != null) {
      holidayList = holidayList.splice(index, 1)
    }
  } else {
    holidayList.push(date)
  }
}
</script>

<template>
  <div class="sheet" v-for="months in [[1, 2, 3], [9, 8, 7], [4, 5, 6], [12, 11, 10]]">
    <desk2024ComponentSub v-for="month in months" :id="'desk2024' + month"
      :generalData="data.sections['general'].sectionData" :sectionData="data.sections['desk2024' + month].sectionData"
      :month="month"
      @click-holiday="(event) => { setHoliday(month, event) }" />
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
