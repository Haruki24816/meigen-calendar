<script setup>
import { ref, watch, computed } from "vue"
import { store } from "../store"

const props = defineProps(["sectionId", "optionId"])
const data = ref(store.getOptionData(props.sectionId, props.optionId))

function randomChoice() {
  const index = Math.round(store.getOptionArgs(props.sectionId, props.optionId).values.length * Math.random())
  data.value = store.getOptionArgs(props.sectionId, props.optionId).values[index]
  store.setOptionData(props.sectionId, props.optionId, data.value)
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
        <li v-if="store.getOptionArgs(props.sectionId, props.optionId).random">
          <a class="dropdown-item" href="#" @click.prevent @click="randomChoice()">
            ランダム
          </a>
        </li>
      </ul>
    </div>
    <div class="formRightSide">
      <select class="form-select form-select-sm" v-model="data"
        @change="store.setOptionData(props.sectionId, props.optionId, data)">
        <template v-for="(dataValue, index) in store.getOptionArgs(props.sectionId, props.optionId).values">
          <option :value="dataValue">
            {{ store.getOptionArgs(props.sectionId, props.optionId).items[index] }}
          </option>
        </template>
      </select>
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
