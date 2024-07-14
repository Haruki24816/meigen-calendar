<script setup>
import { onMounted, ref } from "vue"

const props = defineProps(["name", "modalTitle", "buttons"])
const modalObjects = defineModel()

const modalElement = ref(null)

onMounted(() => {
  modalObjects.value[props.name] = new bootstrap.Modal(modalElement.value, {})
})
</script>

<template>
  <div class="modal fade d-print-none" :id="props.name + 'Modal'" tabindex="-1" :aria-labelledby="props.name + 'ModalLabel'"
    aria-hidden="true" ref="modalElement">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" :id="props.name + 'ModalLabel'">{{ modalTitle }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <template v-for="(value, buttonName) in props.buttons">
            <button v-if="value.buttonType == 'secondary'" type="button" class="btn btn-secondary"
              data-bs-dismiss="modal" @click="value.func">
              {{ buttonName }}
            </button>
            <button v-if="value.buttonType == 'primary'" type="button" class="btn btn-primary" data-bs-dismiss="modal"
              @click="value.func">
              {{ buttonName }}
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
