<script setup>
import { ref } from "vue"

const props = defineProps(["size"])

const sheetWidth = ref({
  "A4T": "210mm",
  "A4Y": "297mm",
  "A3T": "297mm",
  "A3Y": "420mm"
}[props.size])

const sheetHeight = ref({
  "A4T": "297mm",
  "A4Y": "210mm",
  "A3T": "420mm",
  "A3Y": "297mm"
}[props.size])
</script>

<template>
  <div class="sheet">
    <slot></slot>
  </div>
</template>

<style scoped>
.sheet {
  background-color: white;
  width: v-bind(sheetWidth);
  height: v-bind(sheetHeight);
  margin: 10mm;
}

@media print {
  .sheet {
    margin: 0;
  }
}
</style>
