<script setup>
import { computed } from "vue"
import { store } from "../store"

const year = computed(() => { return store.getOptionData("general", "year") })
const font = computed(() => { return store.getOptionData("general", "font") })
</script>

<template>
  <div class="containerBox">
    <div class="centerBox">
      <div class="title">田口澪 名言カレンダー {{ year }}</div>
      <div class="description">{{ year-1 }}年12月発行</div>
    </div>
  </div>
</template>

<style scoped>
.containerBox {
  width: 210mm;
  height: 148.5mm;
  display: flex;
  justify-content: center;
  align-items: center;
}

.centerBox {
  border: 0.3pt black solid;
  font-family: v-bind("font");
  padding: 10mm 20mm 10mm 20mm;
}

.title {
  font-size: 14pt;
}

.description {
  font-size: 10pt;
  margin-top: 2mm;
}
</style>
