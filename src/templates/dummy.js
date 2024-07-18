import { shallowRef } from "vue"

import dummyComponent from "./dummyComponent.vue"
import FormBool from "../components/FormBool.vue"

export const dummy = {
  templateId: "dummy",
  templateName: "ダミー",
  printOptions: [
    "ダミー"
  ],
  component: shallowRef(dummyComponent),
  sections: {
    "g": {
      sectionName: "g",
      autoScroll: false,
      sectionData: {
        g: { formName: "g", formType: shallowRef(FormBool), formArgs: {}, data: false }
      }
    }
  }
}
