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
  const index = Math.round(props.args.values.length * Math.random())
  data.value = props.args.values[index]
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
        <li v-if="props.args.random"><a class="dropdown-item" href="#" @click.prevent @click="randomChoice()">ランダム</a></li>
      </ul>
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
