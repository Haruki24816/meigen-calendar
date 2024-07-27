<script setup>
import { onMounted, ref } from "vue"
import { store } from "../store"

const modalObjects = defineModel()
const modalElement = ref(null)

onMounted(() => {
  modalObjects.value["load"] = new bootstrap.Modal(modalElement.value, {})
  modalElement.value.addEventListener("hidden.bs.modal", (event) => {
    loadError.value = false
  })
})

const inputElement = ref(null)
const loadError = ref(false)

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
  if (file.type != "application/json") {
    loadError.value = true
    return
  }
  const fileReader = new FileReader()
  fileReader.onload = () => {
    store.loadData(JSON.parse(fileReader.result))
    loadError.value = false
    modalObjects.value["load"].hide()
  }
  fileReader.readAsText(file)
}
</script>

<template>
  <div class="modal fade d-print-none" id="loadModal" tabindex="-1" aria-labelledby="loadModalLabel" aria-hidden="true"
    ref="modalElement">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="loadModalLabel">データ読み込み</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <button type="button" class="btn btn-outline-primary w-100 mb-3" @dragover.prevent @drop.prevent="onDrop"
            @click="inputElement.click()">
            クリックして参照<br>
            またはここにドラッグアンドドロップ
          </button>
          <div class="mt-1" v-if="!store.isWrapDataEmpty()">
            注意：現在入力されているデータは失われます。
          </div>
          <div class="mt-1 text-danger" v-if="loadError">
            読み込みエラー：データ形式が違います。
          </div>
        </div>
      </div>
    </div>
  </div>
  <input type="file" ref="inputElement" style="display: none;" accept="application/json" @change="loadDataFromDialog()">
</template>
