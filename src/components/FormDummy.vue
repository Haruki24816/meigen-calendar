<script setup>
const props = defineProps(["name", "args", "defaultData"])
const emit = defineEmits(["updateData"])

function reset() {
  emit("updateData", (props.defaultData))
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
      <div>
        {{ props.args.message }}
      </div>
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
