<script setup>
import Sheet from "../components/Sheet.vue"
import Desk2024Sub from "./Desk2024Sub.vue"

const defaultData = defineModel()
const props = defineProps(["data"])

const defaultSectionData = {
  color: { formName: "色", formType: "Range", formArgs: { min: 0, max: 359, step: 1 }, defalutData: 0 },
  meigenText: { formName: "名言", formType: "Textarea", formArgs: {}, defalutData: "名言" },
  meigenFontSize: { formName: "名言文字サイズ", formType: "Range", formArgs: { min: 0.1, max: 40, step: 0.1 }, defalutData: 8 },
  meigenLineHeight: { formName: "名言行間", formType: "Range", formArgs: { min: 0.1, max: 40, step: 0.1 }, defalutData: 8 },
  holidays: { formName: "祝日", formType: "List", formArgs: {}, defalutData: [] }
}

defaultData.value = {
  templateId: "desk2024",
  templateName: "卓上タイプ2024",
  sections: {
    "general": {
      sectionName: "共通データ",
      autoScroll: false,
      sectionData: {
        tonbo: { formName: "トンボ", formType: "Bool", formArgs: {}, defalutData: false },
        font: { formName: "フォント", formType: "Select", formArgs: { items: ["RocknRoll One", "Zen Antique Soft", "Sawarabi Gothic", "Klee One", "Zen Old Mincho", "Shippori Mincho", "Sawarabi Mincho", "Noto Serif JP"] }, defalutData: "Shippori Mincho" },
        year: { formName: "年", formType: "Num", formArgs: {}, defalutData: 2024 }
      }
    },
    "desk20241": {
      sectionName: "1月",
      autoScroll: true,
      sectionData: defaultSectionData
    },
    "desk20242": {
      sectionName: "2月",
      autoScroll: true,
      sectionData: defaultSectionData
    },
    "desk20243": {
      sectionName: "3月",
      autoScroll: true,
      sectionData: defaultSectionData
    },
    "desk20244": {
      sectionName: "4月",
      autoScroll: true,
      sectionData: defaultSectionData
    },
    "desk20245": {
      sectionName: "5月",
      autoScroll: true,
      sectionData: defaultSectionData
    },
    "desk20246": {
      sectionName: "6月",
      autoScroll: true,
      sectionData: defaultSectionData
    },
    "desk20247": {
      sectionName: "7月",
      autoScroll: true,
      sectionData: defaultSectionData
    },
    "desk20248": {
      sectionName: "8月",
      autoScroll: true,
      sectionData: defaultSectionData
    },
    "desk20249": {
      sectionName: "9月",
      autoScroll: true,
      sectionData: defaultSectionData
    },
    "desk202410": {
      sectionName: "10月",
      autoScroll: true,
      sectionData: defaultSectionData
    },
    "desk202411": {
      sectionName: "11月",
      autoScroll: true,
      sectionData: defaultSectionData
    },
    "desk202412": {
      sectionName: "12月",
      autoScroll: true,
      sectionData: defaultSectionData
    }
  }
}
</script>

<template>
  <Sheet size="A4T">
    <Desk2024Sub id="desk20241" :generalData="props.data.sections['general'].sectionData"
      :sectionData="props.data.sections['desk20241'].sectionData" :month="1" />
    <Desk2024Sub id="desk20242" :generalData="props.data.sections['general'].sectionData"
      :sectionData="props.data.sections['desk20242'].sectionData" :month="2" />
    <Desk2024Sub id="desk20243" :generalData="props.data.sections['general'].sectionData"
      :sectionData="props.data.sections['desk20243'].sectionData" :month="3" />
  </Sheet>
  <Sheet size="A4T">
    <Desk2024Sub id="desk20249" :generalData="props.data.sections['general'].sectionData"
      :sectionData="props.data.sections['desk20249'].sectionData" :month="9" />
    <Desk2024Sub id="desk20248" :generalData="props.data.sections['general'].sectionData"
      :sectionData="props.data.sections['desk20248'].sectionData" :month="8" />
    <Desk2024Sub id="desk20247" :generalData="props.data.sections['general'].sectionData"
      :sectionData="props.data.sections['desk20247'].sectionData" :month="7" />
  </Sheet>
  <Sheet size="A4T">
    <Desk2024Sub id="desk20244" :generalData="props.data.sections['general'].sectionData"
      :sectionData="props.data.sections['desk20244'].sectionData" :month="4" />
    <Desk2024Sub id="desk20245" :generalData="props.data.sections['general'].sectionData"
      :sectionData="props.data.sections['desk20245'].sectionData" :month="5" />
    <Desk2024Sub id="desk20246" :generalData="props.data.sections['general'].sectionData"
      :sectionData="props.data.sections['desk20246'].sectionData" :month="6" />
  </Sheet>
  <Sheet size="A4T">
    <Desk2024Sub id="desk202412" :generalData="props.data.sections['general'].sectionData"
      :sectionData="props.data.sections['desk202412'].sectionData" :month="12" />
    <Desk2024Sub id="desk202411" :generalData="props.data.sections['general'].sectionData"
      :sectionData="props.data.sections['desk202411'].sectionData" :month="11" />
    <Desk2024Sub id="desk202410" :generalData="props.data.sections['general'].sectionData"
      :sectionData="props.data.sections['desk202410'].sectionData" :month="10" />
  </Sheet>
</template>
