<script setup>
import { ref } from "vue"

const props = defineProps(["name", "args", "defaultData"])
const emit = defineEmits(["updateData"])
const inputElement = ref(null)

function updateImage() {
  const file = inputElement.value.files[0]
  const fileReader = new FileReader()
  fileReader.onload = () => {
    emit("updateData", fileReader.result)
  }
  fileReader.readAsDataURL(file)
}
</script>

<template>
  <div class="formParts d-flex justify-content-between align-items-center">
    <div>
      {{ props.name }}
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
