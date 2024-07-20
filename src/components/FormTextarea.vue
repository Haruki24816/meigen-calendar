<script setup>
import { ref } from "vue"

const props = defineProps(["name", "args", "defaultData"])
const emit = defineEmits(["updateData"])
const data = ref(props.defaultData)

function cls() {
  data.value = ""
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
        <li><a class="dropdown-item" href="#" @click.prevent @click="cls()">クリア</a></li>
      </ul>
    </div>
    <div class="formRightSide">
      <textarea class="form-control" v-model="data" @input="$emit('updateData', data)"></textarea>
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
  white-space: pre;
}
</style>
