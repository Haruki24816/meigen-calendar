<script setup>
import { ref } from "vue"

const props = defineProps(["name", "args", "defaultData"])
const data = ref(props.defaultData)
</script>

<template>
  <div class="formParts d-flex justify-content-between align-items-center">
    <div class="user-select-none">
      {{ props.name }}
    </div>
    <div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" v-model="data"
          @change="$emit('updateData', data)">
      </div>
    </div>
  </div>
</template>

<style scoped>
.formParts {
  height: 40px;
}
</style>
