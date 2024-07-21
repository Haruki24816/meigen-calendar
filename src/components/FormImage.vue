<script setup>
import { ref } from "vue"
import { store } from "../store"

const props = defineProps(["sectionId", "optionId"])
const inputElement = ref(null)

function updateImage() {
  const file = inputElement.value.files[0]
  const fileReader = new FileReader()
  fileReader.onload = () => {
    store.setOptionData(props.sectionId, props.optionId, fileReader.result)
  }
  fileReader.readAsDataURL(file)
}
</script>

<template>
  <div class="formParts d-flex justify-content-between align-items-center">
    <div>
      {{ store.getOptionName(props.sectionId, props.optionId) }}
    </div>
    <div class="formRightSide">
      <input type="file" ref="inputElement" style="display: none;" accept="image/*" @change="updateImage()">
      <button class="btn btn-primary btn-sm w-100" @click="inputElement.click()">読み込み</button>
    </div>
  </div>
</template>

<style scoped>
.formParts {
  height: 40px;
}

.formRightSide {
  width: 170px;
}
</style>
