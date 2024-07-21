import dummyComponent from "./dummyComponent.vue"
import FormBool from "../components/FormBool.vue"

export const dummy = {
  templateId: "dummy",
  templateName: "ダミー",
  printOptions: [
    "ダミー"
  ],
  component: dummyComponent,
  sections: {
    "dummySection": {
      sectionName: "ダミーセクション",
      autoScroll: false,
      options: {
        "dummyOption": {
          optionName: "ダミーオプション",
          formType: FormBool,
          formArgs: {},
          default: false
        }
      }
    }
  }
}
