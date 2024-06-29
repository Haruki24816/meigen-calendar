<script setup>
import Sheet from "./components/Sheet.vue"
import DeskCalendar from "./components/DeskCalendar.vue"
</script>

<template>
  <Sheet size="A4T">
    <DeskCalendar />
  </Sheet>
</template>

<style>
body {
  background-color: lightgray;
}
</style>
