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
      <select class="form-select form-select-sm" v-model="data" @change="$emit('updateData', data)">
        <template v-for="(dataValue, index) in props.args.values">
          <option v-if="props.defaultData == dataValue" :value="dataValue" selected>{{ props.args.items[index] }}
          </option>
          <option v-else :value="dataValue">{{ props.args.items[index] }}</option>
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
