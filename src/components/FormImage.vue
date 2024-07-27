<script setup>
import { ref } from "vue"
import { store } from "../store"

const props = defineProps(["sectionId", "optionId"])
const inputElement = ref(null)

function loadDataFromDialog() {
  const file = inputElement.value.files[0]
  loadData(file)
}

function onDrop(event) {
  event.preventDefault()
  event.stopPropagation()
  const file = event.dataTransfer.files[0]
  loadData(file)
}

function loadData(file) {
  if (!file.type.startsWith("image/")) {
    return
  }
  const fileReader = new FileReader()
  fileReader.onload = () => {
    store.setOptionData(props.sectionId, props.optionId, fileReader.result)
  }
  fileReader.readAsDataURL(file)
}
</script>

<template>
  <div class="formParts d-flex justify-content-between align-items-center">
    <div class="dropdown">
      <div class="dropdown-toggle user-select-none" data-bs-toggle="dropdown">
        {{ store.getOptionName(props.sectionId, props.optionId) }}
      </div>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#" @click.prevent
            @click="store.setOptionDefault(props.sectionId, props.optionId)">
            リセット
          </a>
        </li>
      </ul>
    </div>
    <div class="formRightSide">
      <button type="button" class="btn btn-outline-primary btn-sm w-100" @dragover.prevent @drop.prevent="onDrop"
        @click="inputElement.click()">
        クリックして参照or<br>
        ドラッグアンドドロップ
      </button>
    </div>
  </div>
  <input type="file" ref="inputElement" style="display: none;" accept="image/*" @change="loadDataFromDialog()">
</template>

<style scoped>
.formParts {
  height: 70px;
}

.formRightSide {
  width: 170px;
  height: 60px;
}

button {
  height: 100%;
}
</style>
