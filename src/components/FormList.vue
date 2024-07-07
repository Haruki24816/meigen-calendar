<script setup>
const props = defineProps(["name", "args", "defaultData"])
const data = defineModel()
data.value = props.defaultData
</script>

<template>
  <div>リスト「{{ props.name }}」「{{ props.args }}」「{{ props.defaultData }}」</div>
</template>
