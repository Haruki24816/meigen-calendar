<script setup>
import { ref, computed } from "vue"
import Forms from "./components/Forms.vue"

// ↓↓↓

import Desk2024 from "./templates/Desk2024.vue"
import { desk2024DefaultData } from "./templates/Desk2024DefaultData"
import Dummy from "./templates/Dummy.vue"
import { dummyDefaultData } from "./templates/DummyDefaultData"

const templates = [
  [Desk2024, desk2024DefaultData],
  [Dummy, dummyDefaultData]
]

// ↑↑↑

const templateData = {}

for (const templateContent of templates) {
  templateData[templateContent[1].templateId] = {
    templateName: templateContent[1].templateName,
    componentObject: templateContent[0],
    defaultData: templateContent[1]
  }
}

const currentTemplateId = ref(Object.keys(templateData)[0])

const currentTemplate = computed(() => {
  return templateData[currentTemplateId.value].componentObject
})

const currentTemplateName = computed(() => {
  return templateData[currentTemplateId.value].templateName
})

const defaultData = computed(() => {
  return templateData[currentTemplateId.value].defaultData
})

const data = computed(() => {
  return templateData[currentTemplateId.value].defaultData
})

const viewerScale = ref(1)

function updateScale(step) {
  if (0.1 < viewerScale.value + step && viewerScale.value + step < 10) {
    viewerScale.value += step
  }
}
</script>

<template>
  <div class="d-flex flex-column d-print-block">
    <div class="topBar bg-dark text-light row align-items-center shadow g-0 d-print-none">
      <div class="col d-flex align-items-center">
        <div class="mx-2">名言カレンダー</div>
        <div class="dropdown">
          <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
            {{ currentTemplateName }}
          </button>
          <ul class="dropdown-menu">
            <li v-for="(templateContent, templateId) in templateData">
              <a v-if="templateId == currentTemplateId" class="dropdown-item active" href="#" @click.prevent>
                {{ templateContent.templateName }}
              </a>
              <a v-else class="dropdown-item" href="#" @click.prevent @click="currentTemplateId = templateId">
                {{ templateContent.templateName }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col d-flex align-items-center justify-content-center p-0">
        <button @click="updateScale(-0.2)" type="button" class="btn btn-dark"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
          <i class="bi bi-dash"></i>
        </button>
        <div class="dropdown-center mx-1">
          <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
            {{ Math.round(viewerScale * 100) }}%
          </button>
          <ul class="dropdown-menu">
            <template v-for="percentage in [50, 75, 100, 125, 150, 200, 300, 400]">
              <li v-if="percentage == Math.round(viewerScale * 100)">
                <a class="dropdown-item active" href="#" @click.prevent>
                  {{ percentage }}%
                </a>
              </li>
              <li v-else>
                <a class="dropdown-item" href="#" @click.prevent @click="viewerScale = percentage / 100">
                  {{ percentage }}%
                </a>
              </li>
            </template>
          </ul>
        </div>
        <button @click="updateScale(0.2)" type="button" class="btn btn-dark"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
          <i class="bi bi-plus"></i>
        </button>
      </div>
      <div class="col d-flex align-items-center justify-content-end p-0">
        <button type="button" class="btn btn-dark me-1"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
          保存
        </button>
        <button type="button" class="btn btn-dark me-1"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
          読み込み
        </button>
        <button type="button" class="btn btn-dark me-1"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
          印刷
        </button>
      </div>
    </div>
    <div class="mainContents d-flex d-print-block">
      <div class="viewer overflow-scroll flex-grow-1 text-center d-print-block">
        <div class="d-inline-block viewerContents d-print-block" ref="viewer">
          <component :is="currentTemplate" :data="data" />
        </div>
      </div>
      <div class="controls overflow-scroll bg-light shadow d-print-none">
        <select v-model="currentTemplateId">
          <option v-for="(templateContent, templateId) in templateData" :value="templateId">
            {{ templateContent.templateName }}
          </option>
        </select>
        <Forms :defaultData="defaultData" v-model="data" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen {
  .topBar {
    height: 40px;
  }

  .mainContents {
    height: calc(100vh - 40px);
  }

  .viewer {
    width: calc(100vw - 250px);
    background-color: lightgray;
  }

  .viewerContents {
    zoom: v-bind(viewerScale);
  }

  .controls {
    width: 250px;
  }
}
</style>
