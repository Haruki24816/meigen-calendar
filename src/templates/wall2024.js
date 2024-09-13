import wall2024Component from "./wall2024Component.vue"
import FormBool from "../components/FormBool.vue"

export const wall2024 = {
  templateId: "wall2024",
  templateName: "壁掛けタイプ2024年デザイン",
  printOptions: [
    "作成中"
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
          default: false
        }
      }
    }
  }
}
