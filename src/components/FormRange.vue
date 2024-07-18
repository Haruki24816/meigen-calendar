<script setup>
import { ref } from "vue"

const props = defineProps(["name", "args", "defaultData"])
const data = ref(props.defaultData)
</script>

<template>
  <div class="formParts d-flex justify-content-between align-items-center">
    <div class="user-select-none flex-grow-1">
      {{ props.name }}
    </div>
    <div class="formRange lh-1">
      <input type="range" class="form-range" v-model="data" :min="props.args.min" :max="props.args.max"
        :step="props.args.step" @change="$emit('updateData', data)">
    </div>
    <div class="formNumber">
      <input type="number" class="form-control form-control-sm" v-model="data" @change="$emit('updateData', data)">
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
