<script setup>
import { store } from "../store"
const props = defineProps(["sectionId", "optionId"])
</script>

<template>
  <div class="formParts d-flex justify-content-between align-items-center">
    <div class="dropdown">
      <div class="dropdown-toggle user-select-none" data-bs-toggle="dropdown">
        {{ store.getOptionName(props.sectionId, props.optionId) }}
      </div>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#" @click.prevent
            @click="store.setOptionDefault(props.sectionId, props.optionId)">
            リセット
          </a>
        </li>
      </ul>
    </div>
    <div class="formRightSide">
      <div>
        {{ store.getOptionArgs(props.sectionId, props.optionId).message }}
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
