import { shallowRef } from "vue"

import desk2024Component from "./desk2024Component.vue"
import FormBool from "../components/FormBool.vue"
import FormList from "../components/FormList.vue"
import FormNum from "../components/FormNum.vue"
import FormRange from "../components/FormRange.vue"
import FormSelect from "../components/FormSelect.vue"
import FormTextarea from "../components/FormTextarea.vue"

function defaultSectionData() {
  return {
    color: { formName: "色", formType: shallowRef(FormRange), formArgs: { min: 0, max: 359, step: 1 }, data: 0 },
    meigenText: { formName: "名言", formType: shallowRef(FormTextarea), formArgs: {}, data: "名言" },
    meigenFontSize: { formName: "名言サイズ", formType: shallowRef(FormRange), formArgs: { min: 0.1, max: 40, step: 0.1 }, data: 8 },
    meigenLineHeight: { formName: "名言行間", formType: shallowRef(FormRange), formArgs: { min: 0.1, max: 40, step: 0.1 }, data: 8 },
    holidays: { formName: "祝日", formType: shallowRef(FormList), formArgs: {}, data: [1, 4] }
  }
}

export const desk2024 = {
  templateId: "desk2024",
  templateName: "卓上タイプ2024",
  printOptions: [
    "用紙：A4縦",
    "印刷倍率：100%",
    "余白無し",
    "背景画像を印刷する"
  ],
  component: shallowRef(desk2024Component),
  sections: {
    "general": {
      sectionName: "共通データ",
      autoScroll: false,
      sectionData: {
        tonbo: { formName: "トンボ", formType: shallowRef(FormBool), formArgs: {}, data: true },
        font: { formName: "フォント", formType: shallowRef(FormSelect), formArgs: { items: ["RocknRoll One", "Zen Antique Soft", "Sawarabi Gothic", "Klee One", "Zen Old Mincho", "Shippori Mincho", "Sawarabi Mincho", "Noto Serif JP"] }, data: "Shippori Mincho" },
        year: { formName: "年", formType: shallowRef(FormNum), formArgs: {}, data: 2024 }
      }
    },
    "desk20241": {
      sectionName: "1月",
      autoScroll: true,
      sectionData: defaultSectionData()
    },
    "desk20242": {
      sectionName: "2月",
      autoScroll: true,
      sectionData: defaultSectionData()
    },
    "desk20243": {
      sectionName: "3月",
      autoScroll: true,
      sectionData: defaultSectionData()
    },
    "desk20244": {
      sectionName: "4月",
      autoScroll: true,
      sectionData: defaultSectionData()
    },
    "desk20245": {
      sectionName: "5月",
      autoScroll: true,
      sectionData: defaultSectionData()
    },
    "desk20246": {
      sectionName: "6月",
      autoScroll: true,
      sectionData: defaultSectionData()
    },
    "desk20247": {
      sectionName: "7月",
      autoScroll: true,
      sectionData: defaultSectionData()
    },
    "desk20248": {
      sectionName: "8月",
      autoScroll: true,
      sectionData: defaultSectionData()
    },
    "desk20249": {
      sectionName: "9月",
      autoScroll: true,
      sectionData: defaultSectionData()
    },
    "desk202410": {
      sectionName: "10月",
      autoScroll: true,
      sectionData: defaultSectionData()
    },
    "desk202411": {
      sectionName: "11月",
      autoScroll: true,
      sectionData: defaultSectionData()
    },
    "desk202412": {
      sectionName: "12月",
      autoScroll: true,
      sectionData: defaultSectionData()
    }
  }
}
