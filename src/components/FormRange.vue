<script setup>
import { ref, watch, computed } from "vue"
import { store } from "../store"

const props = defineProps(["sectionId", "optionId"])
const data = ref(store.getOptionData(props.sectionId, props.optionId))

function randomChoice() {
  const args = store.getOptionArgs(props.sectionId, props.optionId)
  data.value = Math.round((args.max - args.min) * Math.random() + args.min)
  store.setOptionData(props.sectionId, props.optionId, data.value)
}

const currentTemplateId = computed(() => {
  return store.currentTemplateId
})

watch(currentTemplateId, (newValue, oldValue) => {
  data.value = store.getOptionData(props.sectionId, props.optionId)
})
</script>

<template>
  <div class="formParts d-flex justify-content-between align-items-center">
    <div class="flex-grow-1">
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
    </div>
    <div class="formRange lh-1">
      <input type="range" class="form-range" v-model="data"
        :min="store.getOptionArgs(props.sectionId, props.optionId).min"
        :max="store.getOptionArgs(props.sectionId, props.optionId).max"
        :step="store.getOptionArgs(props.sectionId, props.optionId).step"
        @input="store.setOptionData(props.sectionId, props.optionId, data)">
    </div>
    <div class="formNumber">
      <input type="number" class="form-control form-control-sm" v-model="data"
        :step="store.getOptionArgs(props.sectionId, props.optionId).step"
        @input="store.setOptionData(props.sectionId, props.optionId, data)">
    </div>
  </div>
</template>

<style scoped>
.formParts {
  height: 40px;
}

.formRange {
  width: 95px;
}

.formNumber {
  margin-left: 5px;
  width: 70px;
}
</style>
