<script setup>
import { ref, watch, computed } from "vue"
import { store } from "../store"

const props = defineProps(["sectionId", "optionId"])
const data = ref(store.getOptionData(props.sectionId, props.optionId))

function cls() {
  data.value = ""
  store.setOptionData(props.sectionId, props.optionId, data.value)
}

const currentTemplateId = computed(() => {
  return store.currentTemplateId
})

watch(currentTemplateId, (newValue, oldValue) => {
  data.value = store.getOptionData(props.sectionId, props.optionId)
})

const realtimeData = computed(() => {
  return store.getOptionData(props.sectionId, props.optionId)
})

watch(realtimeData, (newValue, oldValue) => {
  data.value = store.getOptionData(props.sectionId, props.optionId)
})
</script>

<template>
  <div class="formParts d-flex justify-content-between align-items-center">
    <div class="dropdown">
      <div class="dropdown-toggle user-select-none" data-bs-toggle="dropdown">
        {{ store.getOptionName(props.sectionId, props.optionId) }}
      </div>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#" @click.prevent @click="cls()">クリア</a></li>
      </ul>
    </div>
    <div class="formRightSide">
      <textarea class="form-control" v-model="data"
        @input="store.setOptionData(props.sectionId, props.optionId, data)"></textarea>
    </div>
  </div>
</template>

<style scoped>
.formParts {
  height: 100px;
}

.formRightSide {
  height: 90px;
  width: 170px;
}

textarea {
  height: 100%;
  resize: none;
  white-space: pre;
}
</style>
