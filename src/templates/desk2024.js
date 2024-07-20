import { shallowRef } from "vue"
import { fonts } from "../modules/fonts"

import desk2024Component from "./desk2024Component.vue"
import FormBool from "../components/FormBool.vue"
import FormDummy from "../components/FormDummy.vue"
import FormNum from "../components/FormNum.vue"
import FormRange from "../components/FormRange.vue"
import FormSelect from "../components/FormSelect.vue"
import FormTextarea from "../components/FormTextarea.vue"
import FormImage from "../components/FormImage.vue"

import defaultImage from "/default.jpg"

function defaultSectionData() {
  return {
    color: { formName: "色", formType: shallowRef(FormRange), formArgs: { min: 0, max: 359, step: 1, random: true }, data: 186 },
    image: { formName: "画像", formType: shallowRef(FormImage), formArgs: {}, data: defaultImage },
    meigenText: { formName: "名言", formType: shallowRef(FormTextarea), formArgs: {}, data: "名言" },
    meigenPosition: { formName: "名言配置", formType: shallowRef(FormSelect), formArgs: { items: ["上揃え", "中央揃え", "下揃え"], values: ["flex-start", "center", "flex-end"] }, data: "center" },
    meigenOffset: { formName: "名言位置", formType: shallowRef(FormRange), formArgs: { min: -100, max: 100, step: 0.5 }, data: 0 },
    meigenFontSize: { formName: "名言サイズ", formType: shallowRef(FormRange), formArgs: { min: 0.1, max: 40, step: 0.5 }, data: 8 },
    meigenLineHeight: { formName: "名言行間", formType: shallowRef(FormRange), formArgs: { min: 0.1, max: 40, step: 0.5 }, data: 8 },
    holidays: { formName: "祝日", formType: shallowRef(FormDummy), formArgs: { message: "日付を直接クリック" }, data: [] }
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
        font: { formName: "フォント", formType: shallowRef(FormSelect), formArgs: { items: fonts, values: fonts, random: true }, data: "Shippori Mincho" },
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
