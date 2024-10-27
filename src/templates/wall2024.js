import { fonts } from "../modules/fonts"
import defaultImage from "/default.jpg"

import wall2024Component from "./wall2024Component.vue"
import FormBool from "../components/FormBool.vue"
import FormDummy from "../components/FormDummy.vue"
import FormNum from "../components/FormNum.vue"
import FormRange from "../components/FormRange.vue"
import FormSelect from "../components/FormSelect.vue"
import FormTextarea from "../components/FormTextarea.vue"
import FormImage from "../components/FormImage.vue"

function copyMonthOptions() {
  return {
    "color": {
      optionName: "色",
      formType: FormRange,
      formArgs: { min: 0, max: 359, step: 1, random: true },
      default: 23
    },
    "image": {
      optionName: "画像",
      formType: FormImage,
      formArgs: {},
      default: defaultImage
    },
    "imageScale": {
      optionName: "画像倍率",
      formType: FormRange,
      formArgs: { min: 25, max: 400, step: 1 },
      default: 100
    },
    "imageOffsetX": {
      optionName: "画像横位置",
      formType: FormRange,
      formArgs: { min: -100, max: 100, step: 0.5 },
      default: 0
    },
    "imageOffsetY": {
      optionName: "画像縦位置",
      formType: FormRange,
      formArgs: { min: -100, max: 100, step: 0.5 },
      default: 0
    },
    "meigenText": {
      optionName: "名言",
      formType: FormTextarea,
      formArgs: {},
      default: "名言"
    },
    "meigenPosition": {
      optionName: "名言配置",
      formType: FormSelect,
      formArgs: { items: ["上揃え", "中央揃え", "下揃え"], values: ["flex-start", "center", "flex-end"] },
      default: "center"
    },
    "meigenOffset": {
      optionName: "名言位置",
      formType: FormRange,
      formArgs: { min: -100, max: 100, step: 0.5 },
      default: 0
    },
    "meigenFontSize": {
      optionName: "名言サイズ",
      formType: FormRange,
      formArgs: { min: 0.1, max: 40, step: 0.5 },
      default: 12
    },
    "meigenLineHeight": {
      optionName: "名言行間",
      formType: FormRange,
      formArgs: { min: 0.1, max: 40, step: 0.5 },
      default: 12
    },
    "holidays": {
      optionName: "祝日",
      formType: FormDummy,
      formArgs: { message: "直接入力" },
      default: {}
    }
  }
}

export const wall2024 = {
  templateId: "wall2024",
  templateName: "壁掛けタイプ2024年デザイン",
  printOptions: [
    "オプション「面付け」を有効にする",
    "用紙：A4縦",
    "印刷倍率：100%",
    "余白無し",
    "背景画像を印刷する",
    "両面印刷「短辺」綴じ"
  ],
  component: wall2024Component,
  sections: {
    "general": {
      sectionName: "共通データ",
      autoScroll: false,
      options: {
        "imposition": {
          optionName: "面付け",
          formType: FormBool,
          formArgs: {},
          default: false
        },
        "font": {
          optionName: "フォント",
          formType: FormSelect,
          formArgs: { items: fonts, values: fonts, random: true },
          default: "Shippori Mincho"
        },
        "year": {
          optionName: "年",
          formType: FormNum,
          formArgs: {},
          default: 2024
        }
      }
    },
    "wall20241": {
      sectionName: "1月",
      autoScroll: true,
      options: copyMonthOptions()
    },
    "wall20242": {
      sectionName: "2月",
      autoScroll: true,
      options: copyMonthOptions()
    },
    "wall20243": {
      sectionName: "3月",
      autoScroll: true,
      options: copyMonthOptions()
    },
    "wall20244": {
      sectionName: "4月",
      autoScroll: true,
      options: copyMonthOptions()
    },
    "wall20245": {
      sectionName: "5月",
      autoScroll: true,
      options: copyMonthOptions()
    },
    "wall20246": {
      sectionName: "6月",
      autoScroll: true,
      options: copyMonthOptions()
    },
    "wall20247": {
      sectionName: "7月",
      autoScroll: true,
      options: copyMonthOptions()
    },
    "wall20248": {
      sectionName: "8月",
      autoScroll: true,
      options: copyMonthOptions()
    },
    "wall20249": {
      sectionName: "9月",
      autoScroll: true,
      options: copyMonthOptions()
    },
    "wall202410": {
      sectionName: "10月",
      autoScroll: true,
      options: copyMonthOptions()
    },
    "wall202411": {
      sectionName: "11月",
      autoScroll: true,
      options: copyMonthOptions()
    },
    "wall202412": {
      sectionName: "12月",
      autoScroll: true,
      options: copyMonthOptions()
    }
  }
}
