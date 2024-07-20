<script setup>
import { ref } from "vue"

const props = defineProps(["name", "args", "defaultData"])
const data = ref(props.defaultData)
</script>

<template>
  <div class="formParts d-flex justify-content-between align-items-center">
    <div>
      {{ props.name }}
    </div>
    <div class="formRightSide">
      <input type="number" class="form-control form-control-sm" v-model="data" @input="$emit('updateData', data)">
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
