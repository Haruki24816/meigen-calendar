<script setup>
import { ref } from "vue"

const props = defineProps(["name", "args", "defaultData"])
const emit = defineEmits(["updateData"])
const data = ref(props.defaultData)

function updateData() {
  data.value = !(data.value)
  emit("updateData", data)
}

function reset() {
  data.value = props.defaultData
  emit("updateData", data)
}
</script>

<template>
  <div class="formParts d-flex justify-content-between align-items-center">
    <div class="dropdown">
      <div class="dropdown-toggle user-select-none" data-bs-toggle="dropdown">
        {{ props.name }}
      </div>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#" @click.prevent @click="reset()">リセット</a></li>
      </ul>
    </div>
    <div class="formRightSide">
      <button v-if="data" class="btn btn-primary btn-sm w-100" @click="updateData()">
        ON
      </button>
      <button v-else class="btn btn-secondary btn-sm w-100" @click="updateData()">
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
