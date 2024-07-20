<script setup>
import { ref } from "vue"

const props = defineProps(["name", "args", "defaultData"])
const emit = defineEmits(["updateData"])
const data = ref(props.defaultData)

function updateData() {
  data.value = !(data.value)
  emit("updateData", data)
}
</script>

<template>
  <div class="formParts d-flex justify-content-between align-items-center">
    <div>
      {{ props.name }}
    </div>
    <div class="formRightSide">
      <button v-if="data" class="btn btn-secondary btn-sm w-100" @click="updateData()">
        OFF
      </button>
      <button v-else class="btn btn-primary btn-sm w-100" @click="updateData()">
        ON
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
