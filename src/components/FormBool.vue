<script setup>
const props = defineProps(["name", "args", "defaultData"])
const data = defineModel()
data.value = props.defaultData
</script>

<template>
  ブール「{{ props.name }}」「{{ props.args }}」「{{ props.defaultData }}」
</template>
