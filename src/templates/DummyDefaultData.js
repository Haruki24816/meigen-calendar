import FormBool from "../components/FormBool.vue"

const dummyDefaultData = {
  templateId: "dummy",
  templateName: "ダミー",
  sections: {
    "g": {
      sectionName: "g",
      autoScroll: false,
      sectionData: {
        g: { formName: "g", formType: FormBool, formArgs: {}, data: false }
      }
    }
  }
}

export { dummyDefaultData }
