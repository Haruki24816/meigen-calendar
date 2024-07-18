<script setup>
import { ref } from "vue"

const props = defineProps(["name", "args", "defaultData"])
const data = ref(props.defaultData)
</script>

<template>
  <tr>
    <td>
      リスト
    </td>
    <td>
      {{ props.name }}
    </td>
    <td>
      <input type="text" v-model="data" @change="$emit('updateData', data)">
    </td>
  </tr>
</template>
