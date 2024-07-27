import wall2024Component from "./wall2024Component.vue"
import FormDummy from "../components/FormDummy.vue"

export const wall2024 = {
  templateId: "wall2024",
  templateName: "壁掛けタイプ2024年デザイン",
  printOptions: [
    "作成中"
  ],
  component: wall2024Component,
  sections: {
    "general": {
      sectionName: "ダミー",
      autoScroll: false,
      options: {
        "dummy": {
          optionName: "ダミー",
          formType: FormDummy,
          formArgs: { message: "ダミー" },
          default: null
        }
      }
    }
  }
}
