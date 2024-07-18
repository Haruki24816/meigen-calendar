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
    <div class="formRightSide">
      <textarea class="form-control" v-model="data" @change="$emit('updateData', data)"></textarea>
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
}
</style>
