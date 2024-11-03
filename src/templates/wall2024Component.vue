<script setup>
import { store } from "../store"
import { computed } from "vue"
import wall2024ComponentMeigen from "./wall2024ComponentMeigen.vue"
import wall2024ComponentCalendar from "./wall2024ComponentCalendar.vue"
import wall2024ComponentBackCover from "./wall2024ComponentBackCover.vue"

const coverImageData = computed(() => { return store.getOptionData("general", "cover") })
const omakeImageData = computed(() => { return store.getOptionData("general", "omake") })
</script>

<template>
  <template v-if="store.getOptionData('general', 'imposition')">
    <div class="sheet">
      <wall2024ComponentMeigen month="7" />
      <wall2024ComponentCalendar month="7" />
    </div>
    <div class="sheet">
      <wall2024ComponentMeigen month="8" />
      <wall2024ComponentCalendar month="6" />
    </div>
    <div class="sheet">
      <wall2024ComponentMeigen month="6" />
      <wall2024ComponentCalendar month="8" />
    </div>
    <div class="sheet">
      <wall2024ComponentMeigen month="9" />
      <wall2024ComponentCalendar month="5" />
    </div>
    <div class="sheet">
      <wall2024ComponentMeigen month="5" />
      <wall2024ComponentCalendar month="9" />
    </div>
    <div class="sheet">
      <wall2024ComponentMeigen month="10" />
      <wall2024ComponentCalendar month="4" />
    </div>
    <div class="sheet">
      <wall2024ComponentMeigen month="4" />
      <wall2024ComponentCalendar month="10" />
    </div>
    <div class="sheet">
      <wall2024ComponentMeigen month="11" />
      <wall2024ComponentCalendar month="3" />
    </div>
    <div class="sheet">
      <wall2024ComponentMeigen month="3" />
      <wall2024ComponentCalendar month="11" />
    </div>
    <div class="sheet">
      <wall2024ComponentMeigen month="12" />
      <wall2024ComponentCalendar month="2" />
    </div>
    <div class="sheet">
      <wall2024ComponentMeigen month="2" />
      <wall2024ComponentCalendar month="12" />
    </div>
    <div class="sheet">
      <div class="omakeTop"><img :src="omakeImageData"></div>
      <wall2024ComponentCalendar month="1" />
    </div>
    <div class="sheet">
      <wall2024ComponentMeigen month="1" />
      <div class="omakeBottom"><img :src="omakeImageData"></div>
    </div>
    <div class="sheet">
      <wall2024ComponentBackCover />
      <div class="cover"><img :src="coverImageData"></div>
    </div>
  </template>
  <template v-else>
    <div class="sheet">
      <div class="cover"><img :src="coverImageData"></div>
    </div>
    <div v-for="month in 12" class="sheet">
      <wall2024ComponentMeigen :month="month" />
      <wall2024ComponentCalendar :month="month" />
    </div>
    <div class="sheet">
      <div class="omakeTop"><img :src="omakeImageData"></div>
      <div class="omakeBottom"><img :src="omakeImageData"></div>
    </div>
    <div class="sheet">
      <wall2024ComponentBackCover />
    </div>
  </template>
</template>

<style scoped>
.sheet {
  background-color: white;
  width: 210mm;
  height: 297mm;
  margin: 10mm;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
  display: flex;
  flex-direction: column;
}

.cover {
  width: 210mm;
  height: 148.5mm;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
}

.omakeTop {
  width: 210mm;
  height: 148.5mm;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
}

.omakeBottom {
  width: 210mm;
  height: 148.5mm;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.cover>img, .omakeTop>img, .omakeBottom>img {
  width: 100%;
}

@media print {
  .sheet {
    margin: 0;
  }

  .halfSheet {
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
