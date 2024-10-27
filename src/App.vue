<script setup>
import { ref } from "vue"
import Forms from "./components/Forms.vue"
import Modal from "./components/Modal.vue"
import DataLoader from "./components/DataLoader.vue"
import { store } from "./store"
import { getNowYMDhmsStr } from "./modules/getNowYMDhmsStr"

const viewerScale = ref(1)

function updateScale(step) {
  if (0.1 < viewerScale.value + step && viewerScale.value + step < 10) {
    viewerScale.value += step
  }
}

const modalObjects = ref({})

function openModal(modalName) {
  modalObjects.value[modalName].show()
}

function print() {
  setTimeout(() => {
    window.print()
  }, 1000)
}

const showControls = ref(true)

const downloadLinkElement = ref(null)

function saveData() {
  const data = JSON.stringify({
    wrapData: store.wrapData,
    currentTemplateId: store.currentTemplateId
  })
  const blob = new Blob([data], { type: "application\/json" })
  const url = URL.createObjectURL(blob)
  downloadLinkElement.value.href = url
  downloadLinkElement.value.download = "meigen" + getNowYMDhmsStr() + ".json"
  downloadLinkElement.value.click()
}
</script>

<template>
  <div class="d-flex flex-column d-print-block overflow-hidden">
    <div class="topBar bg-dark text-light row align-items-center g-0 d-print-none shadow z-3">
      <div class="col d-flex align-items-center">
        <div class="mx-2">名言カレンダー</div>
        <div class="dropdown">
          <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
            {{ store.getCurrentTemplateName() }}
          </button>
          <ul class="dropdown-menu">
            <li v-for="(templateName, templateId) in store.getTemplateNames()">
              <a v-if="store.isCurrentTemplateId(templateId)" class="dropdown-item active" href="#" @click.prevent>
                {{ templateName }}
              </a>
              <a v-else class="dropdown-item" href="#" @click.prevent
                @click="store.changeCurrentTemplateId(templateId)">
                {{ templateName }}
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
        <button type="button" class="btn btn-dark me-1" @click="openModal('about')"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
          このアプリについて
        </button>
        <button type="button" class="btn btn-dark me-1" @click="saveData()"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
          保存
        </button>
        <button type="button" class="btn btn-dark me-1" @click="openModal('load')"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
          読み込み
        </button>
        <button type="button" class="btn btn-dark me-1" @click="openModal('print')"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
          印刷
        </button>
        <button v-if="!showControls" type="button" class="btn btn-dark me-1" @click="showControls = true"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
          データ入力
        </button>
      </div>
    </div>
    <div class="mainContents d-flex d-print-block">
      <div class="minWidth0 flex-fill d-flex flex-column">
        <div class="viewer overflow-auto text-center d-print-block">
          <div class="d-inline-block viewerContents d-print-block">
            <component :is="store.getCurrentTemplateComponent()" />
          </div>
        </div>
      </div>
      <div v-show="showControls" class="controls bg-light d-print-none flex-shrink-0 shadow z-2">
        <div class="d-flex flex-column pt-2 px-2 h-100">
          <div class="d-flex p-2 justify-content-between align-items-center">
            <h5 class="m-0">データ入力</h5>
            <button type="button" class="btn btn-outline-secondary btn-sm" @click="showControls = false">非表示</button>
          </div>
          <div class="noScrollbar overflow-scroll pt-2 px-2">
            <Forms />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal name="print" v-model="modalObjects" modalTitle="印刷" :buttons="{
    'キャンセル': { buttonType: 'secondary', func: null },
    '印刷': { buttonType: 'primary', func: print }
  }">
    <p>下記の設定で印刷してください。</p>
    <ul>
      <li v-for="item in store.getCurrentTemplatePrintOptions()">{{ item }}</li>
    </ul>
  </Modal>
  <Modal name="about" v-model="modalObjects" modalTitle="このアプリについて" :buttons="{}">
    <p>それは私にもよくわからないのだ。</p>
    <p>動作確認：Chrome系のやつ。Firefoxだと縦書きのレイアウトがなんかうまくいかんかった。</p>
  </Modal>
  <DataLoader v-model="modalObjects" />
  <a ref="downloadLinkElement" style="display: none;"></a>
</template>

<style scoped>
@media screen {
  .topBar {
    height: 40px;
  }

  .mainContents {
    width: 100vw;
    height: calc(100vh - 40px);
    background-color: lightgray;
  }

  .minWidth0 {
    min-width: 0;
    position: relative;
  }

  .viewer {
    scroll-behavior: smooth;
  }

  .viewerContents {
    zoom: v-bind(viewerScale);
  }

  .controls {
    width: 350px;
  }

  .noScrollbar {
    scrollbar-width: none;
  }

  .noScrollbar::-webkit-scrollbar {
    display: none;
  }
}
</style>
