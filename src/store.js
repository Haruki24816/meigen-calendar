import { reactive, shallowRef } from "vue"

// ↓↓↓

import { desk2024 } from "./templates/desk2024"
import { wall2024 } from "./templates/wall2024"

const templateList = [desk2024, wall2024]

// ↑↑↑

const store = reactive({
  templates: null,
  wrapData: {},
  currentTemplateId: "",
  init(templateList) {
    const templates = {}
    for (const template of templateList) {
      templates[template.templateId] = template
    }
    Object.freeze(templates)
    this.templates = shallowRef(templates)
    this.currentTemplateId = templateList[0].templateId
  },
  getCurrentTemplateName() {
    return this.templates[this.currentTemplateId].templateName
  },
  getTemplateNames() {
    const templateNames = {}
    for (const templateId in this.templates) {
      templateNames[templateId] = this.templates[templateId].templateName
    }
    return templateNames
  },
  isCurrentTemplateId(templateId) {
    return this.currentTemplateId == templateId
  },
  changeCurrentTemplateId(templateId) {
    this.currentTemplateId = templateId
  },
  getCurrentTemplateComponent() {
    return this.templates[this.currentTemplateId].component
  },
  getCurrentTemplatePrintOptions() {
    return this.templates[this.currentTemplateId].printOptions
  },
  getCurrentTemplateSectionNames() {
    const sectionNames = {}
    for (const sectionId in this.templates[this.currentTemplateId].sections) {
      sectionNames[sectionId] = this.templates[this.currentTemplateId].sections[sectionId].sectionName
    }
    return sectionNames
  },
  getCurrentTemplateOptionComponents(sectionId) {
    const optionComponents = {}
    for (const optionId in this.templates[this.currentTemplateId].sections[sectionId].options) {
      optionComponents[optionId] = this.templates[this.currentTemplateId].sections[sectionId].options[optionId].formType
    }
    return optionComponents
  },
  setOptionData(sectionId, optionId, data) {
    if (this.wrapData[this.currentTemplateId] === undefined) {
      this.wrapData[this.currentTemplateId] = {
        sections: {}
      }
    }
    const sections = this.wrapData[this.currentTemplateId].sections
    if (sections[sectionId] === undefined) {
      sections[sectionId] = {
        options: {}
      }
    }
    const options = sections[sectionId].options
    options[optionId] = data
  },
  setOptionDefault(sectionId, optionId) {
    if (
      this.wrapData[this.currentTemplateId] === undefined ||
      this.wrapData[this.currentTemplateId].sections[sectionId] === undefined ||
      this.wrapData[this.currentTemplateId].sections[sectionId].options[optionId] === undefined
    ) {
      return this.getOptionData(sectionId, optionId)
    }
    delete this.wrapData[this.currentTemplateId].sections[sectionId].options[optionId]
    return this.getOptionData(sectionId, optionId)
  },
  getOptionData(sectionId, optionId) {
    if (
      this.wrapData[this.currentTemplateId] === undefined ||
      this.wrapData[this.currentTemplateId].sections[sectionId] === undefined ||
      this.wrapData[this.currentTemplateId].sections[sectionId].options[optionId] === undefined
    ) {
      return structuredClone(this.templates[this.currentTemplateId].sections[sectionId].options[optionId].default)
    } else {
      return this.wrapData[this.currentTemplateId].sections[sectionId].options[optionId]
    }
  },
  isAutoScroll(sectionId) {
    return this.templates[this.currentTemplateId].sections[sectionId].autoScroll
  },
  getOptionName(sectionId, optionId) {
    return this.templates[this.currentTemplateId].sections[sectionId].options[optionId].optionName
  },
  getOptionArgs(sectionId, optionId) {
    return this.templates[this.currentTemplateId].sections[sectionId].options[optionId].formArgs
  },
  loadData(data) {
    this.wrapData = data.wrapData
    this.currentTemplateId = data.currentTemplateId
  },
  isWrapDataEmpty() {
    return Object.keys(this.wrapData).length == 0
  }
})

store.init(templateList)
export { store }
