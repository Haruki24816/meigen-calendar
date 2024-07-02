<script setup>
import { ref } from "vue"
import Sheet from "./components/Sheet.vue"
import DeskCalendar from "./components/DeskCalendar.vue"

const data = ref({
  printMode: false,
  font: "Shippori Mincho", // "RocknRoll One", "Zen Antique Soft", "Sawarabi Gothic", "Klee One", "Zen Old Mincho", "Shippori Mincho", "Sawarabi Mincho", "Noto Serif JP"
  color: 300,
  meigenText: "名言",
  meigenFontSize: 8,
  meigenLineHeight: 8,
  month: 1,
  year: 2024,
  holidays: [1, 6, 8]
})
</script>

<template>
  <Sheet size="A4T">
    <DeskCalendar :data="data" />
  </Sheet>
</template>

<style>
body {
  background-color: lightgray;
}
</style>
