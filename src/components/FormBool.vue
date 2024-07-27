<script setup>
import { ref, watch, computed } from "vue"
import { store } from "../store"

const props = defineProps(["sectionId", "optionId"])
const data = ref(store.getOptionData(props.sectionId, props.optionId))

function updateData(newData) {
  data.value = newData
  store.setOptionData(props.sectionId, props.optionId, newData)
}

const currentTemplateId = computed(() => {
  return store.currentTemplateId
})

const realtimeData = computed(() => {
  return store.getOptionData(props.sectionId, props.optionId)
})

watch(currentTemplateId, (newValue, oldValue) => {
  data.value = store.getOptionData(props.sectionId, props.optionId)
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
        <li>
          <a class="dropdown-item" href="#" @click.prevent
            @click="data = store.setOptionDefault(props.sectionId, props.optionId)">
            リセット
          </a>
        </li>
      </ul>
    </div>
    <div class="formRightSide">
      <button v-if="data" class="btn btn-primary btn-sm w-100" @click="updateData(false)">
        ON
      </button>
      <button v-else class="btn btn-secondary btn-sm w-100" @click="updateData(true)">
        OFF
      </button>
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
