<script setup>
import { computed } from "vue"
import { store } from "../store"
import hsl from "hsl-to-hex"

const props = defineProps(["month"])
const sectionId = computed(() => { return "wall2024" + props.month })

const imageData = computed(() => { return store.getOptionData(sectionId.value, "image") })
const imageScale = computed(() => { return store.getOptionData(sectionId.value, "imageScale") / 100 + 0.01 })
const imageOffsetX = computed(() => { return store.getOptionData(sectionId.value, "imageOffsetX") + "mm" })
const imageOffsetY = computed(() => { return store.getOptionData(sectionId.value, "imageOffsetY") + "mm" })

const color = computed(() => { return hsl(store.getOptionData(sectionId.value, "color"), 32, 24) })
const font = computed(() => { return store.getOptionData("general", "font") })

const meigenText = computed(() => { return store.getOptionData(sectionId.value, "meigenText").split("\n") })
const meigenPosition = computed(() => { return store.getOptionData(sectionId.value, "meigenPosition") })
const meigenOffset = computed(() => { return store.getOptionData(sectionId.value, "meigenOffset") + "mm" })
const meigenFontSize = computed(() => { return store.getOptionData(sectionId.value, "meigenFontSize") + "mm" })
const meigenLineHeight = computed(() => {
  const lineHeight = store.getOptionData(sectionId.value, "meigenLineHeight")
  const fontSize = store.getOptionData(sectionId.value, "meigenFontSize")
  if (Math.round(lineHeight) > Math.round(fontSize * 0.8)) {
    return lineHeight + "mm"
  } else {
    return fontSize * 0.8 + "mm"
  }
})
</script>

<template>
  <div class="containerBox" :id="sectionId">
    <div class="image">
      <img :src="imageData">
    </div>
    <div class="meigen">
      <div v-for="meigenLine in meigenText" class="meigenLine">
        {{ meigenLine }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerBox {
  width: 190mm;
  height: 133.5mm;
  margin-bottom: 10mm;
  display: flex;
}

.image {
  width: 133.5mm;
  height: 133.5mm;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: black;
}

.image>img {
  width: 100%;
  transform: scale(v-bind("imageScale")) translateX(v-bind("imageOffsetX")) translateY(v-bind("imageOffsetY"));
}

.meigen {
  width: calc(190mm - 133.5mm);
  height: 133.5mm;
  background-color: v-bind("color");
  padding-top: 3mm;
  padding-bottom: 3mm;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: v-bind("meigenPosition");
  overflow: hidden;
}

.meigenLine {
  writing-mode: vertical-rl;
  color: white;
  font-size: v-bind("meigenFontSize");
  line-height: v-bind("meigenLineHeight");
  font-family: v-bind("font");
  margin: 0;
  transform: translateY(v-bind("meigenOffset"));
}
</style>
