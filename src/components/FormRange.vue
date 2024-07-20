<script setup>
import { ref } from "vue"

const props = defineProps(["name", "args", "defaultData"])
const emit = defineEmits(["updateData"])
const data = ref(props.defaultData)

function reset() {
  data.value = props.defaultData
  emit("updateData", data)
}

function randomChoice() {
  data.value = Math.round((props.args.max - props.args.min) * Math.random() + props.args.min)
  emit("updateData", data)
}
</script>

<template>
  <div class="formParts d-flex justify-content-between align-items-center">
    <div class="flex-grow-1">
      <div class="dropdown">
        <div class="dropdown-toggle user-select-none" data-bs-toggle="dropdown">
          {{ props.name }}
        </div>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#" @click.prevent @click="reset()">リセット</a></li>
          <li v-if="props.args.random"><a class="dropdown-item" href="#" @click.prevent @click="randomChoice()">ランダム</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="formRange lh-1">
      <input type="range" class="form-range" v-model="data" :min="props.args.min" :max="props.args.max"
        :step="props.args.step" @input="$emit('updateData', data)">
    </div>
    <div class="formNumber">
      <input type="number" class="form-control form-control-sm" v-model="data" :step="props.args.step"
        @input="$emit('updateData', data)">
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
