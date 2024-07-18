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
      <select class="form-select form-select-sm" v-model="data" @change="$emit('updateData', data)">
        <template v-for="item in props.args.items">
          <option v-if="props.defaultData == item" :value="item" selected>{{ item }}</option>
          <option v-else :value="item">{{ item }}</option>
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
